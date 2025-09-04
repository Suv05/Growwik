"use server";

import { Resend } from "resend";
import BrandEmail from "@/components/emails/BrandEmail";
import createConnection from "@/db";
import Brand from "@/schema/brand.model.js";

export async function setBrand(data) {
  try {
    // Ensure MongoDB connection is established
    await createConnection();

    const newBrand = await Brand.create(data);

    if (newBrand) {
      // Send email notification to client
      await sendEmailToClient(newBrand);

      return {
        status: "success",
        message: "Brand created successfully",
      };
    } else {
      return {
        status: "error",
        message: "Brand creation failed",
      };
    }
  } catch (err) {
    console.error("❌ Error in setBrand:", err);

    return {
      status: "error",
      message: "Brand creation failed",
    };
  }
}

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailToClient(brandData) {
  try {
    //console.log("📧 Attempting to send email with brand data:", brandData);

    const response = await resend.emails.send({
      from: "no-reply@growwik.com",
      to: "growwikmedia@gmail.com", // or process.env.CLIENT_EMAIL
      subject: "New Brand Signup",
      react: <BrandEmail brandData={brandData} />,
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
