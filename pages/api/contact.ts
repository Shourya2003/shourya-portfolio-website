import type { NextApiRequest, NextApiResponse } from "next";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { name, email, message, subject } = (req.body || {}) as ContactBody;
  const clean = (v: unknown) =>
    String(v || "")
      .replace(/[<>"\r\n]/g, "")
      .slice(0, 2000);
  const safeName = clean(name).slice(0, 100);
  const safeEmail = clean(email).slice(0, 320);
  const safeSubject = clean(subject).slice(0, 200);
  const safeMessage = clean(message).slice(0, 5000);

  if (
    !safeName ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail) ||
    !safeMessage
  ) {
    res.status(400).json({ error: "Invalid name, email, or message" });
    return;
  }
  const to = process.env.MAIL_TO_ADDRESS;
  const body = `From: ${safeName}<br>E-Mail: ${safeEmail}<br>Message:<br>${safeMessage}`;

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: process.env.MAIL_USE_TLS === "true",
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      replyTo: safeEmail,
      to,
      subject: `New Message from Website: ${safeSubject}`,
      html: body,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending email" });
  }
}
