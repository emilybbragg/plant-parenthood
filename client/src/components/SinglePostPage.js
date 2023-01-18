import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import SinglePost from './SinglePost';
import plant from "../plant.jpeg";
import { useNavigate } from "react-router-dom";



function SinglePostPage({
  user
}) {
  const [currentPost, setCurrentPost] = useState({})
  const { postId } = useParams();
  const navigate = useNavigate();

  const navigateToProfile = (userId) => {
    navigate(`/users/${userId}`)
  };

  console.log(currentPost)

  useEffect(() => {
    fetch(`/posts/${postId}`)
      .then((r) => r.json())
      .then((p) => {
        setCurrentPost(p)
      });
  }, [postId])



  return (
    <>
      <div className="flex flex-col items-center"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover'
        }}
      >

        <SinglePost
          post={currentPost}
          className=""
          user={user}
        />

        <div className="flex flex-col p-3 h-full w-[500px] rounded-b border-2 border-white">
          <div className="flex">
            <button>Like Post Button -- </button>
            <span># Likes</span>
          </div>

          <div className="flex gap-3">
            <button className="" onClick={() => navigateToProfile(user?.id)}>{user?.username}</button>
            <span className="">{currentPost?.caption}</span>
          </div>
        </div>
        <button className="flex items-center justify-center">View Comments</button>
      </div>
    </>
  );
}

export default SinglePostPage;
