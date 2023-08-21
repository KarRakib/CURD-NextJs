import dataConnect from "@/libs/mongoose";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export const PUT = async(req,{params})=>{
const {id} = params;
// console.log('check id', id);
const {newTitle:title, newImage:image, newDes:des} = await req.json();
await dataConnect();
await Posts.findByIdAndUpdate(id,{title,image,des});
return NextResponse.json({message:'Alhamdulliah Update Success'}, {status:201})
}
export const GET = async (req,{params})=>{
    const {id} = params;
    console.log(id);
    await dataConnect();
    const post = await Posts.findById({_id:id})
    console.log('ki vai tumi emon korcho keno',post);
    return NextResponse.json({post},{message:'Alhamdulliah find'})
}