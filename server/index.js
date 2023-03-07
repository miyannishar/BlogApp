import express, { application } from "express";
import connectToMongo from "./config/db.js"
import authRoutes from "./routes/blog.js"
import cors from "cors"

const router = express.Router()

const app = express();
const PORT = 9000;

connectToMongo();

app.get("/", (req, res)=>{
    res.send("API is running");
    console.log("Workinggg")
})

//API Routes
app.use(cors())
app.use(express.json());
app.use("/api/v1/", authRoutes)


app.listen(PORT, ()=>{
    console.log(`API is running on ${PORT}`);
})