import orderModel from "../models/orderModels.js";
import userMOdel from "../models/userModel.js";
import Stripe from "stripe";

 

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion: "2022-11-15",
});

const placeOrder = async (req, res) => {
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userMOdel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const line_items=req.body.items.map((item)=>{
      
    })
  } catch (error) {}
};

export { placeOrder };
