'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPost =  ({post}) => {
    const {title,image, _id, des} = post;
    // console.log('from edit',title, image, des);
    const [newTitle, setNewtitle] = useState(title);
    const [newImage, setNewImage] = useState(image);
    const [newDes, setNewDes] = useState(des);
    const router = useRouter()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:3000/api/posts/${_id}`,
            {
                method:"PUT",
                headers:{
                    "Content-type":"appliction/json"
                },
                body:JSON.stringify({newTitle, newImage,newDes})
            })
            if(res.ok){
                router.push('/')
                router.refresh()
            }
        } catch (error) {
            
        }
        
    }
    return (
        <div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">title </span>
                        </label>
                        <input value={newTitle} 
                        onChange={(e) => setNewtitle(e.target.value)} 
                        name="title" type="text" placeholder="title" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">image</span>
                        </label>
                        <input value={newImage}
                         onChange={(e) => setNewImage(e.target.value)}
                          name="image" type="text" placeholder="image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Post</span>
                        </label>
                        <textarea value={newDes}
                         onChange={(e) => setNewDes(e.target.value)}
                          name="post" type="text" placeholder="write your post" className="input input-bordered" />

                    </div>
                    <button type="submit"> Post  </button>
                </form>
            </div>
        </div>
    );
};

export default EditPost;