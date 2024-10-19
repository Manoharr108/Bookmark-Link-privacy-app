const mongoose = require("mongoose");

const LinkSchema = mongoose.Schema(
    {
        originalLink:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        LinkId:{
            type:String,
            required:true
        }
    }
)

const operation = mongoose.model("Link", LinkSchema)

module.exports = operation