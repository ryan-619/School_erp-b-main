import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  school_name: { type: String, required: true },
  domain: { type: String, required: true, unique: true },
  mongo_uri: { type: String, required: true }, // e.g. mongodb://localhost:27017/abcschool_db
  status: { type: String, enum: ['active', 'inactive', 'suspended'], default: 'active' },
}, { timestamps: true });

const superAdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, default: 'superadmin' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  phone: String,
  school_id: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
  role: { type: String, default: 'admin' },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

export { schoolSchema, superAdminSchema, adminSchema };
