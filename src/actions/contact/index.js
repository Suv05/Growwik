"use server";

import { Resend } from "resend";
import UserEmail from "@/components/emails/UserEmail";
import createConnection from "@/db";
import Contact from "@/schema/contact.model.js";

export async function setContact(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();
    

    const newUser = await Contact.create(data);

    if (newUser) {

      // Send email notification to client
      await sendEmailToClient(newUser);

      return {
        status: "success",
        message: "Contact created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Contact creation failed",
      };
    }
  } catch (err) {
    console.log(err);

    return {
      status: "error",
      message: "Contact creation failed",
    };
  }
}


// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToClient(contactData) {
  try {
    const response = await resend.emails.send({
      from: "no-reply@growwik.com",
      to: "growwikmedia@gmail.com", // or process.env.CLIENT_EMAIL
      subject: "New Contact Request",
      react: <UserEmail userData={contactData} />,
    });

    if (response.error) {
      console.error("❌ Email send error:", response.error);
    }

    return response;
  } catch (err) {
    console.error("❌ Exception while sending email:", err);
  }
}