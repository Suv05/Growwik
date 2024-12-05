import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
    maxlength: 100,
    trim: true,
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
  contact: {
    type: String,
    required: true,
    minlength: 10, // Corrected to lowercase
    match: [
      /^\+?[0-9]{1,4}-?[0-9]{3,4}-?[0-9]{4}$/,
      "Enter a valid phone number",
    ], // Broader regex
  },
  company: {
    type: String,
    maxlength: 100,
    trim: true,
    default: null, // Optional clarity
  },
  message: {
    type: String,
    maxlength: 500,
    default: null, // Optional clarity
  },
});

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
