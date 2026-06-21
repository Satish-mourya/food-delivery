import mongoose, { mongo } from "mongoose";


export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://satishmourya:Zwads2n2tsbKWuGr@cluster0.5jlxb1o.mongodb.net/food-delivery').then(()=>{
        console.log("DB connected");
    })
}
