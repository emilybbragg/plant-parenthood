import React from "react";

function SinglePost({
  post,
  user,
}) {

  console.log("single post page")
  console.log(post)
  return (
    <>
      <ul className="flex">
        <div className="flex flex-col items-center justify-between h-[500px] w-[500px]
        bg-green-800 text-black border-4 border-white rounded-t">
          <div>{post?.image}</div>
          <span>{post?.username || post?.user?.username || ""}</span>

        </div>
      </ul>
    </>
  );
}

export default SinglePost;