"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  try {
    const localYear = new Date().getFullYear();
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const countryCode = formData.get("countryCode") as string;

    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "arvinayson.dev@gmail.com",
      subject: "Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${countryCode}${phone}
        Message: ${message}
      `,
      html: `<body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4;">
      <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Welcome to Our Platform</h1>
      </div>
      <div style="padding: 30px; background-color: white;">
          <p style="color: #333;">Hi ${firstName},</p>
          <p style="color: #666;">Welcome to our platform! We're excited to have you on board.</p>
          <a href="#" style="display: block; width: 200px; margin: 20px auto; padding: 12px; background-color: #3b82f6; color: white; text-align: center; text-decoration: none; border-radius: 5px;">
              Get Started
          </a>
          <p style="color: #666;">If you have any questions, our support team is here to help.</p>
      </div>
      <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">© ${localYear} Our Company. All rights reserved.</p>
      </div>
  </body>`,
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
