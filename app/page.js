'use client'
import Postview from "@/components/postview"
import Link from "next/link"

const getAllPosts = async() =>{
  try {
    const res = await fetch('http://localhost:3000/api/posts',{cache:"no-cache"})
    if(!res.ok){
      throw Error('fetach Faild')
    }
    return await res.json()
  } catch (error) {
    console.log('getAllPosts', error);
  }
}
export default async function Home() {
const {posts }= await getAllPosts()
// console.log(posts);

  return (
  <div>
    

   <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
   {
    posts?.map(post=><Postview key={post._id} post={post}/>)
   }
   </div>
  </div>
  )
}
