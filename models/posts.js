const { Schema, default: mongoose, model } = require("mongoose");

const UserSchema = new Schema({
title:String,
image: String, 
des: String
},
{
    timestamps:true
}
)
const Posts = mongoose.models.Posts || mongoose.model("Posts", UserSchema)
export default Posts