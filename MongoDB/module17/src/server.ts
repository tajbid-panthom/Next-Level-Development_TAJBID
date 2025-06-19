import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import "dotenv/config";

let PORT: number = parseInt(process.env.PORT || "3000");
let MONGO_URI: string = process.env.MONGO_URI || "";
let server: Server;
async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
    server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
