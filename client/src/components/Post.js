import React from "react";

function Post({ post }) {

  return (
    <>
      <ul className="">
        <div className="bg-black text-white h-[250px] w-[250px]">
          {post.image}
          {post.description}
        </div>
      </ul>
    </>
  )
}

export default Post;