'use server';

import { z } from 'zod';
import * as nodemailer from 'nodemailer';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

// IMPORTANT: Replace with your actual email service configuration in environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: (process.env.SMTP_PORT === '465'), // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const toEmail = 'prathams54301@gmail.com';

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Please correct the form errors.',
      issues,
      fields: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        message: formData.get('message')?.toString() ?? '',
      },
      success: false,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  // In a real app, you must have environment variables set up for this to work.
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
     console.warn("SMTP configuration is missing. Email will not be sent. This is a mock success response.");
     return {
        message: "Thank you for your message! I will get back to you soon. (Mock Response)",
        success: true,
     }
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: toEmail,
      subject: `New message from ${name} via PortfolioFlow`,
      text: message,
      html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    });

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      success: true,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      message: 'Sorry, something went wrong. Please try again later.',
      success: false,
    };
  }
}
