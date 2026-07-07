import mongoose from 'mongoose';

if (!process.env.CENTRAL_MONGO_URI) {
  throw new Error('CENTRAL_MONGO_URI is required in .env file');
}

let centralConnection = null;

export const connectCentralDB = async () => {
  try {
    centralConnection = await mongoose.createConnection(
      process.env.CENTRAL_MONGO_URI,
      { maxPoolSize: 10 }
    ).asPromise();
    console.log('Central MongoDB Connected');
    return centralConnection;
  } catch (error) {
    console.error('Central MongoDB Connection Failed:', error.message);
    throw error;
  }
};

export const getCentralDB = () => {
  if (!centralConnection) throw new Error('Central DB not initialized');
  return centralConnection;
};
