const nodemailer =
  require("nodemailer");

const {
  Notification,
} = require("../models");

class NotificationService {
  async sendEmail(
    to,
    subject,
    html
  ) {
    const transporter =
      nodemailer.createTransport({
        host:
          process.env.EMAIL_HOST,

        port:
          process.env.EMAIL_PORT,

        secure: false,

        auth: {
          user:
            process.env.EMAIL_USER,
          pass:
            process.env.EMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to,
      subject,
      html,
    });
  }

  async createNotification(
    userId,
    title,
    message
  ) {
    return Notification.create({
      userId,
      title,
      message,
    });
  }
}

module.exports =
  new NotificationService()