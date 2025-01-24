"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const countryCode = formData.get("countryCode") as string;

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "arvinayson.dev@gmail.com",
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${countryCode}${phone}
        Message: ${message}
      `,
    });

    if (error) {
      return { error: "Failed to send email" };
    }

    return { success: true };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
