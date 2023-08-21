'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from "react-icons/fi";
import DeteteBtn from './DeteteBtn';
const Postview = ({post}) => {
  
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={'post.image'} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {post.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{post.des} </p>
                   
                    <div className="card-actions justify-start">
                        <Link href={`/editpost/${post._id}`} className="badge badge-outline"><FiEdit/> Edit Post</Link>
                        <div>
                            <DeteteBtn id={post._id} />
                            {/* <Link href={`/eidtpost${post._id}`}>Delete </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Postview;