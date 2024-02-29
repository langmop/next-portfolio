"use server";

import { Resend } from "resend";
import { getErrorMessage } from "@/utils/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("email");
  const message = formData.get("message");
  if (message === null || senderEmail === null) {
    return {
      error: "Invalid Data Provided",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mishragaurav656@gmail.com",
      subject: "New Request Received",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
