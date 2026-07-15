import mongoose from 'mongoose';

export const settingsSchema = new mongoose.Schema({
  school_name: String,
  logo: String,
  theme: String,
  timezone: String,
  date_format: String,
  currency: String,
  language: String,
  config: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export const sessionSchema = new mongoose.Schema({
  session_name: String,
  start_date: Date,
  end_date: Date,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Inactive' },
}, { timestamps: true });

export const rolePermissionSchema = new mongoose.Schema({
  role_name: String,
  role_type: String,
  permissions: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

export const moduleSchema = new mongoose.Schema({
  module_name: String,
  module_type: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  icon: String,
}, { timestamps: true });

export const notificationSchema = new mongoose.Schema({
  notification_type: String,
  template: String,
  enabled: Boolean,
}, { timestamps: true });

export const smsSettingsSchema = new mongoose.Schema({
  provider: String,
  api_key: String,
  sender_id: String,
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Inactive' },
}, { timestamps: true });

export const paymentSettingsSchema = new mongoose.Schema({
  provider: String,
  api_key: String,
  secret_key: String,
  mode: { type: String, enum: ['sandbox', 'live'] },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Inactive' },
}, { timestamps: true });

export const currencySchema = new mongoose.Schema({
  currency_name: String,
  symbol: String,
  code: String,
  exchange_rate: Number,
  is_base: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

export const languageSchema = new mongoose.Schema({
  language_name: String,
  code: String,
  is_rtl: { type: Boolean, default: false },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  is_active: { type: Boolean, default: false },
}, { timestamps: true });

export const captchaSchema = new mongoose.Schema({
  provider: String,
  site_key: String,
  secret_key: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
}, { timestamps: true });

export const fileTypeSchema = new mongoose.Schema({
  allowed_extensions: [String],
  max_size: Number,
}, { timestamps: true });

export const customFieldSchema = new mongoose.Schema({
  field_name: String,
  field_type: String,
  module: String,
  options: [String],
  required: Boolean,
}, { timestamps: true });

export const systemFieldSchema = new mongoose.Schema({
  field_name: String,
  field_type: String,
  module: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

export const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, lowercase: true },
  password: String,
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RolePermission' },
  user_type: String,
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
}, { timestamps: true });

