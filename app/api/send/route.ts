import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  try {
    const body = await req.json();
    const { to, fromName, subject, html } = body;

    // const emailHtml = await render(ContactFormEmail({ name, email, message }));

    const response = await resend.emails.send({
      from: fromName,
      to: to,
      subject: subject,
      html: html,
    });

    return NextResponse.json(
      { message: "Email sent successfully", response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email", error },
      { status: 500 }
    );
  }
}
