const bcrypt = require('bcryptjs');
const { User } = require('../models');
const generateToken = require('../helpers/generateToken');
const crypto = require("crypto")
const sendEmail = require("../helpers/sendEmail")


/*register user*/
const register = async (req, res, next) => {
    try {
        const { fullName, email, password, role } = req.body;

        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'fullName, email and password are required'
            });
        }

        const existingUser = await User.findOne({
            where:{email}
        })
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'User already exists'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const createUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            role
        });

        const token = generateToken(createUser);
        sendEmail(createUser.email,"Welcome to APERFORM","Welcome to APERFORM!");
        return res.status(201).json({
            success: true,
            message: 'Account created successfully',
            data: {
                user: {
                    userId: createUser.userId,
                    fullName: createUser.fullName,
                    email: createUser.email,
                    role: createUser.role,
                    status: createUser.status
                },
                token
            }
        });
    } catch (error) {
        next(error);
    }
};



/*login user*/

const login = async (req,res,next)=>{
 try{
       const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"email and password are required"
        })
    }
    const user = await User.findOne({
        where:{email}
    })
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Email does not exist"
        })
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid credentials"
        })
    }
    const token = generateToken({
        userId:user.userId,
        role:user.role})
    return res.status(200).json({
        success:true,
        message:"Login successful",
        token,
        data:user
    })
 }catch(error){
    next(error)
 }
}


//current user

const currentUserProfile = async(req,res,next) =>{
    const userId =req.user.id
    try{
        const user = awaitUser.findByPk(userId);
        res.status(200).json({
            success:true,
            data:user
        })
    }catch(error){
        next(error)
    }
}

//change password

const changePassword =  async(req,res,next)=>{
    try{
        const userId = req.user.id;
        const {oldPassword,newPassword} = req.body;
        const user = await User.findByPk(userId)
        const isMatch = await bcrypt.compare(oldPassword,user.password)
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"Password is incorrect"
            })
    
        }
        const saltPassword = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(newPassword,saltPassword)
        user.password = hashedPassword
        await user.save();
        return res.status(200).json({
            success:true,
            message:"Password changed successfuly"
        })
    }catch(error){
        next(error)
    }
}

//forgot password

const forgotPassword = async(req,res,next) =>{
    try{
        const {email} = req.body
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Email does not exist"
            })
        }
        const resetToken = crypto.randomBytes(20).toString("hex")
        user.resetPasswordToken = resetToken
        user.resetPasswordExpires = Date.now() + 10*60*1000
        await user.save()
        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`
        const eMessage = `
        <h3>Password Reset Request</h3>
        <p>click below:</p>
        <a href="${resetUrl}">
        Reset Password
        </a>
        `
        sendEmail(user.email,"Password Reset Request",eMessage)
        return res.status(200).json({
            success:true,
            message:"Password reset email set"
        })
    }catch(error){
        next(error)
    }
}

//reset password

const resetPassword = async(req,res,next)=>{
    try{
        const {token} =req.params
        const {password} = req.body
       // const user  = await User.findOne({
        //    where:{resetPasswordToken:token}
       // })
        const user = await User.findOne({
            where: {
                 resetPasswordToken: token
                }
            })
        if(!user || !user.resetPasswordExpires || user.resetPasswordExpires < Date.now()){
            return res.status(400).json({
                success:false,
                message:"Invalid or expired token"
            })
        }
        const saltPassword =  await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,saltPassword)
        user.password = hashedPassword
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null
        await user.save()
        return res.status(200).json({
            success:true,
            message:"Password reset successful"
        })
    }catch(error){
        next(error)
    }
}

module.exports = { register, login, currentUserProfile,changePassword, forgotPassword,resetPassword};

