import mongoose from 'mongoose';

export const hostelSchema = new mongoose.Schema({
  hostel_name: String,
  type: { type: String, enum: ['boys', 'girls', 'co-ed'] },
  warden_name: String,
  warden_phone: String,
}, { timestamps: true });

export const roomTypeSchema = new mongoose.Schema({
  room_type_name: String,
  beds: Number,
  facilities: String,
}, { timestamps: true });

export const hostelRoomSchema = new mongoose.Schema({
  hostel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hostel' },
  room_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RoomType' },
  room_no: String,
  floor: String,
  capacity: Number,
  occupied: Number,
}, { timestamps: true });

