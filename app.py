from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

# Email Configuration (Update with your details)
EMAIL_ADDRESS = "venkat.tridapro@gmail.com"
EMAIL_PASSWORD = "11O32OO4++"

@app.route('/send-email', methods=['POST'])
def send_email():
    try:
        data = request.json  # Get data from frontend
        recipient_email = "thruvenkat.er@gmail.com"
        
        # Create Email
        subject = f"New Design Idea: {data['title']}"
        body = f"""
        Category: {data['category']}
        Description: {data['description']}
        Uniqueness: {data['uniqueness']}
        Existing Technologies: {data['existingTechnologies']}
        Gap Analysis: {data['gapAnalysis']}
        Patentability: {data['patentability']}
        Market Data: {data['marketData']}
        Financials: {data['financials']}
        """

        msg = MIMEMultipart()
        msg["From"] = EMAIL_ADDRESS
        msg["To"] = recipient_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        # Connect to SMTP Server
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.sendmail(EMAIL_ADDRESS, recipient_email, msg.as_string())
        server.quit()

        return jsonify({"message": "Email sent successfully!"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
