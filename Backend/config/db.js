import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb://localhost:27017/RD_TECNOLOGY-DB"
    )
    .then(() => console.log("DB Conectadooooooo"));
};




export default connectDB;

