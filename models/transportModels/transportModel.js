import mongoose from 'mongoose';

export const transportRouteSchema = new mongoose.Schema({
  route_name: String,
  route_start: String,
  route_end: String,
}, { timestamps: true });

export const vehicleSchema = new mongoose.Schema({
  vehicle_number: String,
  type: String,
  capacity: Number,
  driver_name: String,
  driver_phone: String,
}, { timestamps: true });

export const pickupPointSchema = new mongoose.Schema({
  point_name: String,
  pickup_time: String,
}, { timestamps: true });

export const routePickupPointSchema = new mongoose.Schema({
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
  pickup_point_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PickupPoint' },
  order: Number,
}, { timestamps: true });

export const assignVehicleSchema = new mongoose.Schema({
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
}, { timestamps: true });

export const transportFeesMasterSchema = new mongoose.Schema({
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
  amount: Number,
}, { timestamps: true });

export const studentTransportFeesSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'TransportRoute' },
  pickup_point_id: { type: mongoose.Schema.Types.ObjectId, ref: 'PickupPoint' },
  fees_amount: Number,
}, { timestamps: true });


