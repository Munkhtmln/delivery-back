import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { configDotenv } from "dotenv";
import { connectMongodb } from "./database/db";
import { authRoute } from "./routes/auth.route";
import { foodRoute } from "./routes/food.route";
import { foodCategoryRoute } from "./routes/food-category.route";
import { foodOrderRoute } from "./routes/food-order.route";
import { userRoute } from "./routes/user.route";

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
configDotenv();
connectMongodb();

app.use("/auth", authRoute);
app.use("/food", foodRoute);
app.use("/food-category", foodCategoryRoute);
app.use("/food-order", foodOrderRoute);
app.use("/user", userRoute);
app.get("/", (req, res) => {
  console.log("hello this is get");
  res.send("hello this is get");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
