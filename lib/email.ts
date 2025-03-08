import { headers } from "next/headers";

interface SendEmailParams {
  to: string;
  fromName: string;
  subject: string;
  html: string;
}

export async function sendEmail({
  to,
  fromName,
  subject,
  html,
}: SendEmailParams) {
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, fromName, subject, html }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Network response was not ok");
    }
    return { success: true };
  } catch (error: Error | any) {
    console.error("Failed to send email:", error);
    return { success: false, error: error.message };
  }
}

export function generateContactEmail(
  name: string,
  email: string,
  message: string
) {
  return {
    to: "regi.leslie.gouale@gmail.com",
    fromName: "Gouale Services <noreply@gouale.com>",
    subject: "Nouveau message de contact - Gouale Services",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Nouveau message de contact</h1>
        <div style="background-color: #f5f5f5; padding: 16px; border-radius: 4px; margin: 16px 0;">
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eaeaea;" />
        <p style="color: #666; font-size: 14px;">
          Gouale Services - Location d'Art de la Table<br />
          Message reçu via le formulaire de contact
        </p>
      </div>
    `,
  };
}

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  const emailContent = generateContactEmail(name, email, message);
  return sendEmail({
    to: emailContent.to,
    fromName: emailContent.fromName,
    subject: emailContent.subject,
    html: emailContent.html,
  });
}

export function generatePasswordResetEmail(resetToken: string) {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

  return {
    subject: "Réinitialisation de votre mot de passe - Gouale Services",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Réinitialisation de mot de passe</h1>
        <p>Vous avez demandé la réinitialisation de votre mot de passe. Cliquez sur le lien ci-dessous pour procéder :</p>
        <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; text-decoration: none; border-radius: 4px; margin: 16px 0;">
          Réinitialiser le mot de passe
        </a>
        <p>Si vous n'avez pas demandé cette réinitialisation, vous pouvez ignorer cet email.</p>
        <p>Ce lien expirera dans 24 heures.</p>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eaeaea;" />
        <p style="color: #666; font-size: 14px;">
          Gouale Services - Location d'Art de la Table<br />
          Cet email a été envoyé automatiquement, merci de ne pas y répondre.
        </p>
      </div>
    `,
  };
}

export function generateWelcomeEmail(name: string, email: string) {
  return {
    to: email,
    fromName: "Gouale Services <noreply@gouale.com>",
    subject: "Bienvenue chez Gouale Services !",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Bienvenue ${name} !</h1>
        <p>Nous sommes ravis de vous compter parmi nos clients.</p>
        <p>Chez Gouale Services, nous nous efforçons de rendre vos événements uniques grâce à notre sélection d'art de la table.</p>
        <p>N'hésitez pas à parcourir notre catalogue et à nous contacter si vous avez des questions.</p>
        <a href="${process.env.NEXTAUTH_URL}/products" style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; text-decoration: none; border-radius: 4px; margin: 16px 0;">
          Découvrir nos produits
        </a>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eaeaea;" />
        <p style="color: #666; font-size: 14px;">
          Gouale Services - Location d'Art de la Table<br />
          Pour toute question, contactez-nous via notre formulaire de contact.
        </p>
      </div>
    `,
  };
}

/**
 * Envoie un email de bienvenue à un nouvel utilisateur
 * @param name Le nom de l'utilisateur
 * @param email L'adresse email de l'utilisateur
 */
export async function sendWelcomeEmail(
  name: string,
  email: string
): Promise<void> {
  try {
    // Récupération de l'hôte pour construire l'URL complète
    const headersList = await headers();
    const host =
      headersList.get("host") ||
      process.env.NEXT_PUBLIC_APP_URL ||
      "localhost:3000";
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
    const baseUrl = `${protocol}://${host}`;

    // Appel à l'API d'envoi d'email avec une URL absolue
    const response = await fetch(`${baseUrl}/api/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Bienvenue sur Gouale Services",
        template: "welcome",
        data: {
          name,
          email,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Échec de l'envoi d'email: ${error}`);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}

export function generateReservationConfirmationEmail(
  name: string,
  reservationDetails: {
    id: string;
    startDate: Date;
    endDate: Date;
    items: any[];
  }
) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  });

  return {
    subject: "Confirmation de votre réservation - Gouale Services",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Réservation confirmée</h1>
        <p>Bonjour ${name},</p>
        <p>Votre réservation a bien été enregistrée. Voici les détails :</p>
        <div style="background-color: #f5f5f5; padding: 16px; border-radius: 4px; margin: 16px 0;">
          <p><strong>Numéro de réservation :</strong> ${reservationDetails.id}</p>
          <p><strong>Date de début :</strong> ${formatter.format(reservationDetails.startDate)}</p>
          <p><strong>Date de fin :</strong> ${formatter.format(reservationDetails.endDate)}</p>
          <p><strong>Articles réservés :</strong> ${reservationDetails.items.length}</p>
        </div>
        <a href="${process.env.NEXTAUTH_URL}/dashboard/reservations" style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; text-decoration: none; border-radius: 4px; margin: 16px 0;">
          Voir les détails de la réservation
        </a>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eaeaea;" />
        <p style="color: #666; font-size: 14px;">
          Gouale Services - Location d'Art de la Table<br />
          Pour toute question concernant votre réservation, contactez-nous.
        </p>
      </div>
    `,
  };
}

export function generateReservationAdminNotificationEmail(
  customerName: string,
  reservationDetails: {
    id: string;
    startDate: Date;
    endDate: Date;
    items: any[];
  }
) {
  const formatter = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
  });

  return {
    subject: "Nouvelle réservation - Gouale Services",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333;">Nouvelle réservation reçue</h1>
        <p>Une nouvelle réservation a été effectuée par ${customerName}.</p>
        <div style="background-color: #f5f5f5; padding: 16px; border-radius: 4px; margin: 16px 0;">
          <p><strong>Numéro de réservation :</strong> ${reservationDetails.id}</p>
          <p><strong>Date de début :</strong> ${formatter.format(reservationDetails.startDate)}</p>
          <p><strong>Date de fin :</strong> ${formatter.format(reservationDetails.endDate)}</p>
          <p><strong>Articles réservés :</strong> ${reservationDetails.items.length}</p>
        </div>
        <a href="${process.env.NEXTAUTH_URL}/dashboard/reservations/${reservationDetails.id}" style="display: inline-block; padding: 12px 24px; background-color: #0070f3; color: white; text-decoration: none; border-radius: 4px; margin: 16px 0;">
          Voir les détails de la réservation
        </a>
        <hr style="margin: 24px 0; border: none; border-top: 1px solid #eaeaea;" />
        <p style="color: #666; font-size: 14px;">
          Gouale Services - Location d'Art de la Table<br />
          Notification automatique de nouvelle réservation
        </p>
      </div>
    `,
  };
}

export async function sendReservationEmails(
  customerEmail: string,
  customerName: string,
  reservationDetails: {
    id: string;
    startDate: Date;
    endDate: Date;
    items: any[];
  }
) {
  // Send confirmation email to customer
  const customerEmailContent = generateReservationConfirmationEmail(
    customerName,
    reservationDetails
  );
  await sendEmail({
    to: customerEmail,
    fromName: customerName,
    subject: customerEmailContent.subject,
    html: customerEmailContent.html,
  });

  // Send notification emails to admins
  const adminEmailContent = generateReservationAdminNotificationEmail(
    customerName,
    reservationDetails
  );
  const adminEmails = [
    "regi.leslie.gouale@gmail.com",
    "noreply-services@gouale.com",
  ];

  await Promise.all(
    adminEmails.map((adminEmail) =>
      sendEmail({
        to: adminEmail,
        fromName: "Administrateur",
        subject: adminEmailContent.subject,
        html: adminEmailContent.html,
      })
    )
  );

  return { success: true };
}
