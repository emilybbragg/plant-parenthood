import React from "react";

function Post({ post }) {

  return (
    <>
      <ul className="">
        <img src={post.image} alt="Post" />
        <div className="">
          {post.title}
        </div>
      </ul>
    </>
  )
}

export default Post;