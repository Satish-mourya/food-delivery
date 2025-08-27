import mongoose from "mongoose";

const foodSchema= new mongoose.Schema({
    name:{type:String,required:true}, // name is required
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:String,required:true}
})
// to prevent creating a model again and again we use like if the model exist before then dont create otherwise create it
const foodModel=mongoose.models.food || mongoose.model("food",foodSchema); // model name and schema

export default foodModel;