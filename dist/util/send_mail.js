"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    const mailSecret = process.env.MAIL_SECRET;
    const mail = process.env.MAIL;
    const baseUrl = process.env.BASE_URL;
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: mail,
            pass: mailSecret,
        },
    });
    const mailOption = {
        from: "Nom nom foods",
        to: email,
        subject: "Reset your password",
        html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="font-size: 24px; color: #007BFF; text-align: center; margin-bottom: 20px;">
        Your Password Reset Link
      </h1>
      <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
        You have requested to reset your password.
      </p>
      <div style="text-align: center;">
        <a href="${baseUrl}/auth/change-password?id=${token}" 
           style="display: inline-block; padding: 12px 24px; background-color: #007BFF; color: #fff; text-decoration: none; border-radius: 4px; font-size: 16px;">
          Reset Password
        </a>
      </div>
    </div>
  `,
    };
    yield transporter.sendMail(mailOption);
});
exports.sendEmail = sendEmail;
