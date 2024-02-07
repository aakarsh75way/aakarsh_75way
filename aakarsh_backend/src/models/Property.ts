import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  type: {
    type: String,
    enum: ['House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Commercial'],
    default: 'House'
  },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 
});