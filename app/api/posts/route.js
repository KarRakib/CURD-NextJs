import dataConnect from "@/libs/mongoose";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";

export const POST = async (req) =>{
    const {title, image,des} = await req.json();
    await dataConnect()
    await Posts.create({title,image,des})
    return NextResponse.json({message:"create SuccessFully"},{status:201})
}
export const GET = async () =>{
    await dataConnect()
    const posts = await Posts.find()
    return NextResponse.json({posts}, {message:'get Sucess'},{status:200})
}
export const DELETE = async (req)=>{
    const id = req.nextUrl.searchParams.get("id")
    // const id= request.nextUrl.searchParams.get("id")
    await dataConnect();
    await Posts.findByIdAndDelete(id)
    // await Posts.findOneAndDelete(id);
    return NextResponse.json({message:'detete success'},{status:201})

}