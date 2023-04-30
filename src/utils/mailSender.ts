import { mailData } from '@/interfaces/mailData.interface';
import nodemailer from 'nodemailer';

class MailSender {
  private static mailList: mailData[] = [];
  private static transporter;

  public static initializeTransporter(): void {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
    });
  }

  public static addMail(mail: mailData) {
    this.mailList.push(mail);
  }

  public static async sendMails() {
    this.mailList.forEach(mail => {
      this.transporter.sendMail(mail);
    });
  }
}

export default MailSender;
