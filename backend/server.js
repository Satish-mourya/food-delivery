import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
 


// app config
const app=express();
const port=4000;

// middleware
app.use(express.json()) // get a request it will parse use json
app.use(cors())// can acess backend from fronted


// db connecetion

connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

app.get("/",(req,res)=>{
    res.send("API working")

})        // can request

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://satishmourya:Satish3055@cluster0.5jlxb1o.mongodb.net/?