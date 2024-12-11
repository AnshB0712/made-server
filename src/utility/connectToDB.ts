import admin from "firebase-admin"
import mongoose from "mongoose"
import { UserModel } from "../models/user.model"

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log("-- MongoDB Connected --")

    return admin.firestore()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
