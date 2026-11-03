import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

let transporter = null;

if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendNotificationEmail({ subject, leadData }) {
  const recipient = process.env.NOTIFICATION_EMAIL || 'contact@bizwoke.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <div style="background-color: #0F294A; padding: 15px; border-radius: 6px; text-align: center; color: white;">
        <h2 style="margin: 0; color: #FFFFFF;">BIZWOKE NOVA™</h2>
        <p style="margin: 4px 0 0; color: #F27A24; font-size: 13px; font-weight: bold;">New Inbound Website Enquiry</p>
      </div>

      <div style="padding: 20px 0;">
        <h3 style="color: #0F294A; border-bottom: 2px solid #F27A24; padding-bottom: 8px;">${subject}</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          ${Object.entries(leadData).map(([key, val]) => `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 35%; border-bottom: 1px solid #f1f5f9;">${key}:</td>
              <td style="padding: 8px 0; color: #0F294A; border-bottom: 1px solid #f1f5f9;">${String(val || '-')}</td>
            </tr>
          `).join('')}
        </table>
      </div>

      <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
        Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST<br>
        Source: Bizwoke Nova Corporate Website API
      </div>
    </div>
  `;

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"Bizwoke Nova Website" <${process.env.SMTP_USER}>`,
        to: recipient,
        subject: `[Bizwoke Nova Alert] ${subject}`,
        html: htmlContent,
      });
      console.log(`[Email] Notification email successfully sent to ${recipient}`);
      return { success: true, delivered: true };
    } catch (err) {
      console.error(`[Email Error] Failed to send email via SMTP:`, err.message);
      return { success: true, delivered: false, error: err.message };
    }
  } else {
    console.log(`[Email Notice] SMTP not configured in .env. Lead logged to storage. Notification recipient: ${recipient}`);
    return { success: true, delivered: false, note: 'SMTP_CREDENTIALS_PENDING' };
  }
}

