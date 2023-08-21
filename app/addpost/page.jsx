'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";


const page = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [des, setDes] = useState('')
  const router = useRouter()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
        const res = await fetch('http://localhost:3000/api/posts',
        {
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({title,image,des})
        })
        if(res.ok){
          
          router.push('/')
          router.refresh()
        }
    } catch (error) {
      console.log(error);
    }
  }
     
  return (

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">title </span>
          </label>
          <input onChange={(e)=>setTitle(e.target.value)}  name="title" type="text" placeholder="title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input onChange={(e)=>setImage(e.target.value)} name="image" type="text" placeholder="image" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post</span>
          </label>
          <textarea onChange={(e)=>setDes(e.target.value)} name="post" type="text" placeholder="write your post" className="input input-bordered" />
          
        </div>
        <button type="submit"> Post  </button>
      </form>
    </div>
  );
};

export default page;