import mongoose, { mongo } from "mongoose";


export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://satishmourya:Satish3055@cluster0.5jlxb1o.mongodb.net/food-delivery').then(()=>{
        console.log("DB connected");
    })
}