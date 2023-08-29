import type { NextApiRequest, NextApiResponse } from "next";
import nodeMailer from "nodemailer";

type RequesteData = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export type ResponseData = {
  statusMessage: string;
  errors?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { name, email, message, subject } = req.body;
  console.log("sending from", name, email);
  const options = {
    from: `${name} <${email}>`,
    to: "islamabdelhakiim21@gmail.com",
    subject: subject,
    html: `${message} <br /> ${email}`,
  };

  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "islamabdelhakiim21@gmail.com",
      pass: "jtrybohpvsnfggzm",
    },
  });
  try {
    const info = await transporter.sendMail(options);
    res.status(200).json({ statusMessage: "success", });
    console.log(`Email sent, ${info.messageId}`);
  } catch (err: any) {
    console.log(err)
    res
      .status(500)
      .json({
        statusMessage: "failed",
        errors: err ?? "error in sending the email ",
      });
  }
}
