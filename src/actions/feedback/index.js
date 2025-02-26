"use server";

import createConnection from "@/db";
import Feedback from "@/schema/feedback.model.js";

export async function getFeedbacks(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newFeedback = await Feedback.create(data);

    if (newFeedback) {
      return {
        status: "success",
        message: "Feedback store successfully",
      };
    } else {
      return {
        status: "error",
        message: "Feedback store failed",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: "Feedback store failed",
    };
  }
}
