import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const feedbackSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      maxlength: 100,
      trim: true,
    },
    email: {
      type: String,
      minlength: 10, // Corrected casing
      required: [true, "Please provide your email"],
      lowercase: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Enter a valid email address",
      ],
    },
    role: {
      type: String,
    },
    brandName: {
      type: String,
      trim: true,
    },
    review: {
      type: String,
      required: [true, "Please write your review"],
      trim: true,
    },
    areasForImprovement: {
      type: String,
      trim: true,
    },
    satisfaction: {
      type: Number,
    },
    communicationRating: {
      type: String,
    },
    metExpectations: {
      type: String,
      default: "Yes",
    },
    recommendationLikelihood: {
      type: String,
      trim: true,
    },
    socialMedia: {
      type: String,
      trim: true,
    },
    isAnonymous: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Feedback = models.Feedback || model("Feedback", feedbackSchema);
export default Feedback;
