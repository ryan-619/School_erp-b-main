import mongoose from 'mongoose';

export const studentSchema = new mongoose.Schema({
  roll_number: String,
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  class_name: String,
  section: String,
  name: {
    first: { type: String, required: true },
    last: String,
  },
  gender: String,
  dob: Date,
  blood_group: String,
  religion: String,
  caste: String,
  mobile: String,
  email: { type: String, lowercase: true },
  password: String,
  admission_date: Date,
  category: String,
  house: String,
  height: Number,
  weight: Number,
  guardian: {
    type: String,
    name: String,
    relation: String,
    phone: String,
    email: String,
    occupation: String,
    address: String,
    photo: String,
  },
  transport: {
    route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
    pickup_point: String,
    fees_month: String,
  },
  hostel: {
    hostel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' },
    room_no: String,
  },
  files: {
    student_photo: String,
    documents: String,
  },
  role: { type: String, default: 'student' },
  status: { type: String, enum: ['active', 'inactive', 'disabled'], default: 'active' },
}, { timestamps: true });

export const studentCategorySchema = new mongoose.Schema({
  category_name: { type: String, required: true },
}, { timestamps: true });

export const studentHouseSchema = new mongoose.Schema({
  house_name: { type: String, required: true },
  house_color: String,
}, { timestamps: true });

export const disabledStudentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  reason_id: { type: mongoose.Schema.Types.ObjectId, ref: 'DisableReason' },
  date: Date,
}, { timestamps: true });

export const disableReasonSchema = new mongoose.Schema({
  reason: { type: String, required: true },
}, { timestamps: true });

export const multiClassStudentSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
}, { timestamps: true });

export const onlineAdmissionSchema = new mongoose.Schema({
  class_name: String,
  name: { first: String, last: String },
  gender: String,
  dob: Date,
  mobile: String,
  email: { type: String, lowercase: true },
  guardian: { name: String, phone: String, email: String },
  documents: String,
  guardian_photo: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
}, { timestamps: true });


