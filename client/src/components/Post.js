import React from "react";

function Post({
  post,
  user,
}) {

  return (
    <>
      <ul className="flex">
        <div className="bg-emerald-600 rounded border-4 border-white text-black h-[300px] w-[300px] flex flex-col items-center justify-between p-3">
          {post?.image}
          <span>{post?.description}</span>

          <div className="flex justify-between">
            <button>View post</button>
            <button>{user?.username}</button>
          </div>


        </div>
      </ul>
    </>
  )
}

export default Post;