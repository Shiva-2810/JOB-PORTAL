import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});
 
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

// cors defines which frontend server can access the backend
const corsOptions = {
    origin:'http://localhost:5173', // react localhost
    credentials:true
}

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// app.get("/",(req,res)=>{
//     return res.status(200).json({
//         message : "I am coming from backend",
//         success:true 
//     })
// })

// api's
// whenever a request comes in that starts with /api/v1/user, give it to userRoute to handle.”
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})