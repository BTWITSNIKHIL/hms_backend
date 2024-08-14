import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import {errorMiddleware} from './middlewares/error.js'
import messageRouter from "./router/messageRouter.js";
import appointmentRouter from "./router/appointmentRouter.js"; 
import userRouter from "./router/userRouter.js";
const app = express();
app.use(bodyParser.json());
config({ path: "./config/config.env" }); // Ensure this is correct

const corsOptions = {
  origin: [
    process.env.FRONTEND_URL, // This should point to http://localhost:5173
       // Add this line
    process.env.DASHBOARD_URL,
  ],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointments", appointmentRouter); // Adding the route

dbConnection();
app.use(errorMiddleware);
export default app;
