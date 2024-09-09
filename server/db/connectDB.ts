import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to DB");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;