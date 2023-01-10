import React from "react";

function Post({ post }) {

  return (
    <>
      <ul className="">
        <div className="bg-white rounded-sm border-2 border-black text-black h-[250px] w-[250px]">
          {post.image}
          {post.description}
        </div>
      </ul>
    </>
  )
}

export default Post;