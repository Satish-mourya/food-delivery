import express from "express";
import { addFood,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter=express.Router();

// image storage engine

const storage =multer.diskStorage({
    destination:"uploads" ,// where i want to store image , it is upload place
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)// to add unique name to each file
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)


export default foodRouter;