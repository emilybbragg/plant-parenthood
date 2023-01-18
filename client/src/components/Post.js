import React from "react";

function Post({
  post,
  user,
}) {

  return (
    <>
      <ul className="flex">
        <div className="flex flex-col items-center justify-between h-[300px] w-[300px]
        bg-green-800 text-black border-4 border-white rounded-t">
          <div>{post?.image}</div>
          {/* <span>{post?.caption}</span> */}
        </div>
      </ul>
    </>
  );
}

export default Post;