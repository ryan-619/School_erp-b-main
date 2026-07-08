import mongoose from 'mongoose';

export const itemCategorySchema = new mongoose.Schema({
  category_name: { type: String, required: true },
}, { timestamps: true });

export const itemSchema = new mongoose.Schema({
  item_name: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemCategory' },
  unit: String,
  description: String,
}, { timestamps: true });

export const itemStoreSchema = new mongoose.Schema({
  store_name: String,
  location: String,
}, { timestamps: true });

export const itemSupplierSchema = new mongoose.Schema({
  supplier_name: String,
  phone: String,
  email: String,
  address: String,
}, { timestamps: true });

export const itemStockSchema = new mongoose.Schema({
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemStore' },
  supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemSupplier' },
  quantity: Number,
  unit_price: Number,
  date: Date,
  invoice_number: String,
}, { timestamps: true });

export const issueItemSchema = new mongoose.Schema({
  item_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
  issued_to_type: { type: String, enum: ['student', 'staff'] },
  issued_to_id: mongoose.Schema.Types.ObjectId,
  quantity: Number,
  issue_date: Date,
}, { timestamps: true });


