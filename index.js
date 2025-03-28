import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/Config.js";
import authRoutes from "./Routers/authRoutes.js";
import vehicleRoutes from "./Routers/vehicleRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5003;
app.use(express.json());
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/vehicle", vehicleRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// app.use(cors());
// app.use(
//   cors({
//     origin: "https://resetpasswordtask.netlify.app", //
//     methods: "GET,POST,PUT,DELETE",
//     credentials: true,
//   })
// );
