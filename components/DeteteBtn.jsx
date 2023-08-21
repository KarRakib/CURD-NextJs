'use client'
import { useRouter } from "next/navigation";
import {HiOutlineTrash} from "react-icons/hi"

const DeteteBtn = ({id}) => {
    const router = useRouter()
    // console.log('from id',id);
    const deletePost = async()=>{
        const confirmed = confirm('Are You Sure Delete')
        if(confirmed){
            await fetch(`http://localhost:3000/api/posts?id=${id}`,
            {method:"DELETE"}
            )
            router.refresh()
        }
    }
    return (
        <button onClick={deletePost} className="text-red-400">
            <HiOutlineTrash size={24}/>
        </button>
    );
};

export default DeteteBtn;