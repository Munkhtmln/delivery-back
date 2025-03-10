import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import { connectedMongoDB } from "./database/db";
import categoryRoute from "./routes/food-category.route";
import foodRoute from "./routes/food-route";
import authenticationRoute from "./routes/authentication-route";

const app = express();
configDotenv();

connectedMongoDB();
app.use(bodyParser.json());
const port = process.env.PORT;

app.use("/food-category", categoryRoute);
app.use("/foods", foodRoute);
app.use("/Authentication", authenticationRoute);

app.listen(port, () => {
  console.log("server aslaa", port);
});
