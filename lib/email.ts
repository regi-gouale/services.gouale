import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

interface SendEmailParams {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailParams) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
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

export function generateWelcomeEmail(name: string) {
  return {
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
