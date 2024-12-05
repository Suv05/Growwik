import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const InfluencerSchema = new Schema({
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
  phoneNo: {
    type: String,
    required: true,
    minlength: 10, // Corrected casing
    match: [
      /^\+?[0-9]{1,4}-?[0-9]{3,4}-?[0-9]{4}$/,
      "Enter a valid phone number",
    ], // Flexible regex
  },
  platforms: {
    type: [String], // Specify array of strings
    default: [], // Default to empty array
  },
  instaId: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null, // Optional clarity
  },
  youtubeId: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null, // Optional clarity
  },
  followersCount: {
    type: Number, // Changed to Number for numeric representation
    default: 0, // Default to zero if not provided
  },
  genre: {
    type: [String], // Specify array of strings
    default: [], // Default to empty array
  },
});

const Influencer = models.Influencer || model("Influencer", InfluencerSchema);

export default Influencer;
