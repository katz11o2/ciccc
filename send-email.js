const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendTestEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL,
    to: "thiruvenkat.er@gmail.com",
    subject: "Test Email",
    text: "Hello! This is a test email from Nodemailer.",
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent: ", info.response);
  } catch (error) {
    console.error("❌ Error sending email: ", error);
  }
}

sendTestEmail();
