const operation = require("../models/link-model")
const bcrypt = require("bcrypt")


exports.CreateLink = async(req, res)=>{
    let {originalLink, password} = req.body;
    try{
        let bpass = await bcrypt.hash(password, 10)
        let random = Math.random().toString(36).substring(7);
        let newlink = new operation({
            originalLink:originalLink,
            password:bpass,
            LinkId:random
        })
        await newlink.save()
        return res.status(201).json({message:"Successfully added a new link!", newlink, newLink:`https://link-protector.vercel.app/${random}`})
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}



exports.Authenticate = async(req, res)=>{
    let {id} = req.params;
    let {password} = req.body;
    try {
        const link = await operation.findOne({LinkId:id})
        if(!link){
            return res.status(404).json({message:"Link not found!"})
        }
        const ispasswordtrue = await bcrypt.compare(password, link.password)
        if(ispasswordtrue){
            // return res.redirect(link.originalLink)
            return res.status(200).json({message:"I'm getting it successfully!", link:link.originalLink})
        }
        else{
            return res.status(500).json({message:"Please check your password!!"})
        }
    } catch (error) {
        return res.status(500).json({message:'Something went wrong!'})
    }
}