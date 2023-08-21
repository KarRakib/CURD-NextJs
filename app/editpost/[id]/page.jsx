'use client';

import EditPost from "@/components/EditPost";

const postGetById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: "no-cache" })
    if (!res.ok) {
      throw Error('faild fetch')
    }
    return await res.json()
  } catch (error) {

  }
}
const page = async ({ params }) => {
  const { id } = params;
  const {post }= await postGetById(id)
  console.log(post);


  return (
    <div>
      <EditPost post={post} />
    </div>
  );
};

export default page;