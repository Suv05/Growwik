"use server";

import createConnection from "@/db";
import Feedback from "@/schema/feedback.model.js";
import { revalidatePath } from "next/cache";

//store reviews in db
export async function getFeedbacks(data) {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const newFeedback = await Feedback.create(data);

    if (newFeedback) {
      revalidatePath("/feedback");
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

//show all reviews
export async function showAllReviews() {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const getReviews = await Feedback.find({}).sort({ createdAt: -1 });

    if (getReviews) {
      return {
        status: "success",
        message: "all reviews showing",
        reviewsData: JSON.parse(JSON.stringify(getReviews)),
      };
    } else {
      return {
        status: "error",
        message: "can't get any reviews",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: "can't get any reviews",
    };
  }
}

//count the reviews
export async function countAllReviews() {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const countReviews = await Feedback.countDocuments();

    if (countReviews) {
      return {
        status: "success",
        message: "all reviews counted",
        countReviews: JSON.parse(JSON.stringify(countReviews)),
      };
    } else {
      return {
        status: "error",
        message: "can't get any reviews",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: "can't get any reviews",
    };
  }
}

//show 4 reviews
export async function fetchReviews() {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const getReviews = await Feedback.find({}).sort({ createdAt: -1 }).limit(3);

    if (getReviews) {
      return {
        status: "success",
        message: "all reviews showing",
        limitReviews: JSON.parse(JSON.stringify(getReviews)),
      };
    } else {
      return {
        status: "error",
        message: "can't get any reviews",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: "can't get any reviews",
    };
  }
}
//sum of all satisfaction rating
export async function sumOfStar() {
  try {
    // Ensure the MongoDB connection is established
    await createConnection();

    const sumOfStar = await Feedback.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$satisfaction" },
        },
      },
    ]);

    if (sumOfStar) {
      return {
        status: "success",
        message: "all stars counted",
        sumOfStar: JSON.parse(JSON.stringify(sumOfStar)),
      };
    } else {
      return {
        status: "error",
        message: "can't get the stars",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      status: "error",
      message: "can't get the stars",
    };
  }
}

export async function averageSatisfaction() {
  try {
    await createConnection();

    // Get the sum of stars
    const sumResult = await sumOfStar();
    if (sumResult.status !== "success") {
      return sumResult; // Propagate error if sumOfStar failed
    }
    const sumOfStars = sumResult.sumOfStar[0].total;

    // Get the total count of reviews
    const totalReviews = await Feedback.countDocuments({});

    // Calculate the average and round to two decimal places
    const average =
      totalReviews > 0 ? (sumOfStars / totalReviews).toFixed(2) : 0;

    return {
      status: "success",
      message: "Average satisfaction calculated",
      average: average,
    };
  } catch (err) {
    console.error(err);
    return {
      status: "error",
      message: "Failed to calculate average satisfaction",
    };
  }
}
