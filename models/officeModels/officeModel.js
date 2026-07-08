import mongoose from 'mongoose';

export const admissionEnquirySchema = new mongoose.Schema({
  student_name: String,
  class_seeking: String,
  parent_name: String,
  phone: String,
  email: String,
  enquiry_date: Date,
  status: { type: String, enum: ['pending', 'contacted', 'converted', 'lost'], default: 'pending' },
}, { timestamps: true });

export const complaintSchema = new mongoose.Schema({
  complaint_type: String,
  complainant_name: String,
  phone: String,
  complaint: String,
  date: Date,
  status: { type: String, enum: ['open', 'in-progress', 'resolved'], default: 'open' },
}, { timestamps: true });

export const visitorBookSchema = new mongoose.Schema({
  visitor_name: String,
  purpose: String,
  meeting_with: String,
  in_time: String,
  out_time: String,
  date: Date,
}, { timestamps: true });

export const phoneCallLogSchema = new mongoose.Schema({
  call_type: { type: String, enum: ['incoming', 'outgoing'] },
  name: String,
  phone: String,
  purpose: String,
  date: Date,
  note: String,
}, { timestamps: true });

export const postalDispatchSchema = new mongoose.Schema({
  to_title: String,
  reference_no: String,
  address: String,
  date: Date,
  note: String,
}, { timestamps: true });

export const postalReceiveSchema = new mongoose.Schema({
  from_title: String,
  reference_no: String,
  address: String,
  date: Date,
  note: String,
}, { timestamps: true });

export const setupFrontOfficeSchema = new mongoose.Schema({
  config: mongoose.Schema.Types.Mixed,
}, { timestamps: true });


