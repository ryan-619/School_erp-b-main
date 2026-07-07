import mongoose from 'mongoose';

export const studentCertificateSchema = new mongoose.Schema({
  certificate_name: String,
  template: String,
  header: String,
  body_text: String,
}, { timestamps: true });

export const generateCertificateSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  certificate_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentCertificate' },
  generated_date: Date,
  issued_by: String,
}, { timestamps: true });

export const studentIdCardDesignSchema = new mongoose.Schema({
  template_config: mongoose.Schema.Types.Mixed,
  layout: String,
  fields_to_show: [String],
}, { timestamps: true });

export const generateIdCardSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  design_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentIdCardDesign' },
  generated_date: Date,
}, { timestamps: true });

export const staffIdCardDesignSchema = new mongoose.Schema({
  template_config: mongoose.Schema.Types.Mixed,
  layout: String,
  fields_to_show: [String],
}, { timestamps: true });

export const generateStaffIdCardSchema = new mongoose.Schema({
  staff_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  design_id: { type: mongoose.Schema.Types.ObjectId, ref: 'StaffIdCardDesign' },
  generated_date: Date,
}, { timestamps: true });
