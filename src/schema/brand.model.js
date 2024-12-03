import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const BrandSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Please provide your brand name"],
    maxlength: 100,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 2000,
    trim: true,
    default: null, // Optional clarity
  },
  platforms: {
    type: [String], // Specify array of strings
    default: [], // Default to an empty array
  },
  campaign: {
    type: [String], // Specify array of strings
    default: [],
  },
  content: {
    type: [String], // Specify array of strings
    default: [],
  },
  industry: {
    type: [String], // Specify array of strings
    default: [],
  },
  budget: {
    type: String,
    maxlength: 10,
    trim: true,
    default: null, // Optional clarity
  },
  email: {
    type: String,
    minlength: 10, // Corrected to lowercase
    required: [true, "Please provide your email"],
    lowercase: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Enter a valid email address",
    ],
  },
  phone: {
    type: String,
    required: true,
    minlength: 10, // Corrected to lowercase
    match: [
      /^\+?[0-9]{1,4}-?[0-9]{3,4}-?[0-9]{4}$/,
      "Enter a valid phone number",
    ], // More flexible regex
  },
});

const Brand = models.Brand || model("Brand", BrandSchema);

export default Brand;
