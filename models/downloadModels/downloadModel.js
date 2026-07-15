import mongoose from 'mongoose';

export const contentTypeSchema = new mongoose.Schema({
  content_type_name: { type: String, required: true },
}, { timestamps: true });

export const uploadShareContentSchema = new mongoose.Schema({
  title: String,
  content_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ContentType' },
  file_url: String,
  description: String,
}, { timestamps: true });

export const contentShareListSchema = new mongoose.Schema({
  content_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UploadShareContent' },
  class_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  shared_date: Date,
  note: String,
}, { timestamps: true });

export const videoTutorialSchema = new mongoose.Schema({
  title: String,
  description: String,
  video_url: String,
  thumbnail: String,
  category: String,
}, { timestamps: true });


