const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey", // This is required for SendGrid
    pass: process.env.SENDGRID_API_KEY,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { title, category, description, uniqueness, existingTechnologies, gapAnalysis, patentability, marketData, financials } = req.body;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `New Design Idea: ${title}`,
    text: `
    Title: ${title}
    Category: ${category}
    Description: ${description}
    Uniqueness: ${uniqueness}
    Existing Technologies: ${existingTechnologies}
    Gap Analysis: ${gapAnalysis}
    Patentability: ${patentability}
    Market Data: ${marketData}
    Financials: ${financials}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "❌ Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
