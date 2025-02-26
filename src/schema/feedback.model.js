import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const feedbackSchema = new Schema({
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
  },
  review: {
    type: String,
    required: [true, "Please write your review"],
  },
  areasForImprovement: {
    type: String,
  },
  satisfaction: {
    type: String, 
  },
  communicationRating: {
    type: String,
  },
  metExpectations: {
    type: String,
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
});

const Feedback = models.Feedback || model("Feedback", feedbackSchema);
export default Feedback;