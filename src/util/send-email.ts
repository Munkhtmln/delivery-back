import nodemailer from "nodemailer";

const sendEmail = async (email: string, token: string) => {
  const mailSecret = process.env.MAIL_SECRET;
  const mail = process.env.MAIL;
  console.log("mailsecret", mailSecret);
  console.log("mail", mail);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: mail,
      pass: mailSecret,
    },
  });
  const mailOption = {
    from: "Nom Nom foods",
    to: email,
    subject: "Nom Nom foods password recovery",
    html: `<h1>Your password reset link </h1>
    <a href="http://localhost:3000/Authentication/reset-password?id=${token}" > Click here </a>
  `,
  };
  await transporter.sendMail(mailOption);
};

export default sendEmail;
