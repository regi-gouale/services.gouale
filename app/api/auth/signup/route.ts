import { sendWelcomeEmail } from "@/lib/email";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

// Schéma de validation pour les données d'inscription
const SignupSchema = z.object({
  email: z.string().email("Email invalide"),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export async function POST(req: Request) {
  try {
    // Extraction et validation des données
    const body = await req.json();
    const validationResult = SignupSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: validationResult.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email, name, password } = validationResult.data;

    // Vérification si l'utilisateur existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 400 }
      );
    }

    // Hashage du mot de passe
    const hashedPassword = await hash(password, 12);

    // Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    // Envoi de l'email de bienvenue
    try {
      await sendWelcomeEmail(name, email);
    } catch (emailError) {
      console.error("Échec de l'envoi de l'email de bienvenue:", emailError);
      // On continue malgré l'échec de l'email
    }

    // On ne retourne pas le mot de passe hasché
    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error("Erreur d'inscription:", error);
    return NextResponse.json(
      { error: error.message || "Échec de la création du compte" },
      { status: 500 }
    );
  }
}
