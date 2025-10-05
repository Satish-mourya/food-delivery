import userMOdel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)}
// login

const loginUser=async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await userMOdel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user don't exist"}) 
        }

        const isMatch= await bcrypt.compare(password,user.password);

        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token=createToken(user._id);
        res.json({success:true,token});


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// register user

const registerUser=async (req,res)=>{
    const {name,password,email}=req.body;
    try {
        // chcking user exist or not
        const exist=await userMOdel.findOne({email})
        if(exist){
           return  res.json({success:false,message:"user already exist"})
        }

        // validating email format and password

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
            
        }

        if(password.length<8){
            return res.json({success:false,message:"enter strong passsword"})
        }

        // hashing password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        // save user
        const newUser=new userMOdel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user=await newUser.save();
        const token=createToken(user._id);
        res.json({success:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {loginUser,registerUser};