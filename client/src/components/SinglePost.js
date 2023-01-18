import React from "react";

function SinglePost({
  post,
  user,
}) {

  return (
    <>
      <ul className="flex">
        <div className="flex flex-col items-center justify-between h-[500px] w-[500px]
        bg-green-800 text-black border-4 border-white rounded-t">
          <div>{post?.image}</div>
        </div>
      </ul>
    </>
  );
}

export default SinglePost;