import mongoose from 'mongoose';

export const eventSchema = new mongoose.Schema({
  event_title: String,
  event_date: Date,
  description: String,
  image: String,
}, { timestamps: true });

export const gallerySchema = new mongoose.Schema({
  gallery_title: String,
  image_url: String,
  category: String,
}, { timestamps: true });

export const newsSchema = new mongoose.Schema({
  title: String,
  content: String,
  publish_date: Date,
  image: String,
  author: String,
}, { timestamps: true });

export const bannerImageSchema = new mongoose.Schema({
  image_url: String,
  title: String,
  link: String,
  order: Number,
}, { timestamps: true });

export const pageSchema = new mongoose.Schema({
  page_title: String,
  slug: { type: String, unique: true },
  content: String,
  meta_title: String,
  meta_description: String,
}, { timestamps: true });

export const menuSchema = new mongoose.Schema({
  menu_name: String,
  link: String,
  parent_id: mongoose.Schema.Types.ObjectId,
  order: Number,
  menu_type: String,
}, { timestamps: true });

export const mediaManagerSchema = new mongoose.Schema({
  file_name: String,
  file_url: String,
  file_type: String,
}, { timestamps: true });

