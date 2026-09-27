import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.TO_EMAIL || "saurabhram9087@gmail.com";
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER || recipientEmail;
    const gmailPass =
      process.env.GMAIL_APP_PASSWORD ||
      process.env.EMAIL_PASS ||
      process.env.SMTP_PASS;

    // 1. Direct Gmail SMTP via Nodemailer (100% direct, zero third-party delay, no activation link needed)
    if (gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${gmailUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Inquiry: ${name} (${service})`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #27272a; background-color: #0c0c0c; color: #f4f4f5; border-radius: 12px;">
            <h2 style="color: #D71920; margin-top: 0; font-size: 20px; letter-spacing: 1px; text-transform: uppercase;">
              New Portfolio Inquiry
            </h2>
            <div style="margin: 20px 0; padding: 16px; background-color: #18181b; border-radius: 8px; border: 1px solid #27272a;">
              <p style="margin: 6px 0;"><strong>Client Name:</strong> ${name}</p>
              <p style="margin: 6px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #D71920;">${email}</a></p>
              <p style="margin: 6px 0;"><strong>Service Requested:</strong> ${service}</p>
            </div>
            <h3 style="color: #a1a1aa; font-size: 13px; text-transform: uppercase; margin-bottom: 8px;">Client Message:</h3>
            <div style="white-space: pre-wrap; background-color: #18181b; padding: 16px; border-radius: 8px; border: 1px solid #27272a; line-height: 1.6; color: #e4e4e7;">${message}</div>
            <p style="font-size: 11px; color: #71717a; margin-top: 24px; text-align: center;">
              You can reply directly to this email to respond to ${name} (${email}).
            </p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Your message has been sent directly to Saurabh!",
      });
    }

    // 2. Resend API support (if configured)
    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          reply_to: email,
          subject: `Portfolio Inquiry from ${name} - ${service}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #222; background-color: #0c0c0c; color: #f4f4f5; border-radius: 12px;">
              <h2 style="color: #D71920; margin-top: 0; font-size: 20px;">New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Service:</strong> ${service}</p>
              <p><strong>Message:</strong><br/>${message}</p>
            </div>
          `,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ success: true, message: "Message sent successfully!" });
      }
    }

    // 3. FormSubmit fallback with proper Origin & Referer headers
    const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: "https://saurabh-sharma.vercel.app",
        Referer: "https://saurabh-sharma.vercel.app/",
      },
      body: JSON.stringify({
        name,
        email,
        service,
        message,
        _subject: `Portfolio Inquiry: ${name} (${service})`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await formSubmitRes.json();

    if (formSubmitRes.ok && (result.success === "true" || result.success === true)) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    }

    if (result.message && result.message.includes("Activation")) {
      return NextResponse.json({
        success: true,
        needsActivation: true,
        message:
          "FormSubmit sent a one-time activation email to your inbox (saurabhram9087@gmail.com). Please click 'Activate Form' once to start receiving messages.",
      });
    }

    throw new Error(result.message || "Failed to deliver email.");
  } catch (error: any) {
    console.error("Contact API Route Error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Unable to send email right now. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
