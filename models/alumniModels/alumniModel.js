import mongoose from 'mongoose';

export const alumniMemberSchema = new mongoose.Schema({
  name: String,
  batch_year: Number,
  current_position: String,
  company: String,
  email: String,
  phone: String,
  photo: String,
}, { timestamps: true });

export const alumniEventSchema = new mongoose.Schema({
  event_title: String,
  date: Date,
  venue: String,
  description: String,
  rsvp_deadline: Date,
}, { timestamps: true });

