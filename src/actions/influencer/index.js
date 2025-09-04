"use server";

import { Resend } from "resend";
import InfluencerEmail from "@/components/emails/InfluencerEmail";
import createConnection from "@/db";
import Influencer from "@/schema/influencer.model.js";

export async function setInfluencer(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newUser = await Influencer.create(data);

    if (newUser) {
      // Send email notification to client
      await sendEmailToClient(newUser);

      return {
        status: "success",
        message: "Influencer created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Influencer creation failed",
      };
    }
  } catch (err) {
    console.log(err);

    return {
      status: "error",
      message: "Influencer creation failed",
    };
  }
}

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToClient(influencerData) {
  try {
    //console.log("📧 Attempting to send email with brand data:", influencerData);

    const response = await resend.emails.send({
      from: "no-reply@growwik.com",
      to: "growwikmedia@gmail.com", // or process.env.CLIENT_EMAIL
      subject: "New Influencer Signup",
      react: <InfluencerEmail influencerData={influencerData} />,
    });

    //console.log("✅ Resend response:", response);

    if (response.error) {
      console.error("❌ Email send error:", response.error);
    }

    return response;
  } catch (err) {
    console.error("❌ Exception while sending email:", err);
  }
}
