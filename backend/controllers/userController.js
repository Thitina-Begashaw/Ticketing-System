import User from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const register = async (req,res) =>{
    try {
        const {name , email , password ,role}=req.body;
        if (!name || !email || !password ) {
         res.status(404).json({message: "All fields are required"})
        }

        const existingUser = await User.findOne({email});

        if (existingUser) {
            res.status(404).json({message: "Email already existed"});
        }
     
        const hashedPass = await bcrypt.hash(password, 10);


        const user = await User.create({name ,email , password:hashedPass , role})

        const token = jwt.sign(
            { userId: user._id, name: user.name, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
          );

        res.status(200).json({user , token});
 
        
        
    } catch (error) {
        res.status(500).json({message : "Error Found"});
        console.log(error)
    }
}

export const login = async (req,res)=>{

    try {
        const {email , password} = req.body;

        if (!email || !password) {
            res.status(404).json({message:"All fields are required"});        
        }

        const user = await User.findOne({email})

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
          }
      
          const token = jwt.sign(
            { userId: user._id, name: user.name, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
          );
          res.status(200).json({user , token});
 

    } catch (error) {
        res.status(500).json({message:"Error Occured"});
        console.log(error);
    }
}