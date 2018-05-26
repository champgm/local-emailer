import { NextFunction, Request, Response } from 'express-serve-static-core';
import * as bunyan from 'bunyan';
import * as path from 'path';
import * as nodemailer from 'nodemailer';
import * as DotEnv from 'dotenv';
import { IEmailRequestBody } from '../interfaces/EmailRequestBody';

const bunyanLogger = bunyan.createLogger({ name: `${path.basename(__filename)}` });

DotEnv.config();

const mailerConfiguration: any = {
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  secure: process.env.EMAIL_SERVER_ENCRYPTION, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ACCOUNT_USERNAME, // generated ethereal user
    pass: process.env.EMAIL_ACCOUNT_PASSWORD  // generated ethereal password
  }
};
const transporter = nodemailer.createTransport(mailerConfiguration);

const recipientMap = JSON.parse(process.env.EMAIL_RECIPIENTS);

export async function emailHandler(
  request: Request,
  response: Response,
  nextFunction: NextFunction) {

  if (request.body) {
    bunyanLogger.info({ BODY: request.body }, 'REQUEST BODY');
    const body: IEmailRequestBody = request.body;

    const recipients = body.recipients.map(recipientKey => recipientMap[recipientKey]).join(',');
    const mailOptions = {
      from: process.env.EMAIL_ACCOUNT_ADDRESS,
      to: recipients,
      subject: `TO DO: ${body.subject}`,
      text: body.body
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        bunyanLogger.info({ error }, 'Error sending message.');
        response.status(500).send({ sendResult: 'Message could not be sent.' });
      } else {
        bunyanLogger.info({ info }, 'Message sent.');
        response.status(200).send({ sendResult: 'Message sent.' });
      }
    });
  }
}

function next(nextFunction: NextFunction, input: any) {
  if (nextFunction) {
    nextFunction(input);
  }
}
