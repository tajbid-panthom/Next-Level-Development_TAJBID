import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./app";
import { client } from "../config/mongodb";

let server;
const port = 8080;

const bootstrap = async () => {
  await client.connect();
  console.log("Connected successfully to MongoDB");

  server = app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
  });
};

bootstrap();
