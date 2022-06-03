const User = require('../model/user')
const bcrypt = require('bcrypt')
const config = require('config')
const userService = require('../service/user.service')

const getLoginForm = (req,res)=>{
    res.render('login/layout')
}
const login = (req,res)=>{}
const getSignupForm = (req,res)=>{
    res.render('signup/layout')
}
const signup = async(req,res)=>{
    const {email,password} = req.body
    const fields = {email,password}
    const hashedPassword = await bcrypt.hash(password,config.get('hashed.salt'))
    const findUser = await userService.findUser({email})
    if(findUser){
        return res.render('login/layout',{message:'Email already exists login pls'})
    }
    const createUser = await userService.createEntry({email,password:hashedPassword})
    return res.render('signup/layout',{message:'user created'})
}

module.exports ={getLoginForm,login,getSignupForm,signup}