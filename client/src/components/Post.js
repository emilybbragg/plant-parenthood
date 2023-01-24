import React from "react";
import { useNavigate } from "react-router-dom";


function Post({
  post,
  user,
}) {

  const navigate = useNavigate();

  const navigateToPost = (postId) => {
    navigate(`/posts/${postId}`)
  };

  const navigateToProfile = (userId) => {
    navigate(`/users/${userId}`)
  };

  console.log(user)
  return (
    <>
      <ul className="flex">
        <div className="flex flex-col items-center justify-between h-[300px] w-[300px]
        bg-green-800 text-black border-4 border-white rounded-t">
          <div>{post?.image}</div>
          {/* <span>{post?.caption}</span> */}
          <div className="flex items-center justify-between  h-[40px] w-[300px] gap-3 bg-white p-3 rounded-b">
            <button className="" onClick={() => navigateToPost(post?.id)}>View Post</button>
            <button className="" onClick={() => navigateToProfile(user?.id)}>{post?.user?.username}</button>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Post;