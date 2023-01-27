import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Post from './Post'
import plant from "../plant.jpeg"


function SinglePostPage({
  user,
  post,
  category
}) {

  const [currentPost, setCurrentPost] = useState([])
  const navigate = useNavigate()
  const { postId } = useParams()

  const navigateToProfile = (userId) => {
    navigate(`/users/${userId}`)
  }

  useEffect(() => {
    fetch(`/posts/${postId}`)
      .then((r) => r.json())
      .then((p) => {
        setCurrentPost(p)
      })
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
        <Post
          className=""
          post={currentPost}
          user={user}
          category={category}
        />
        <div className="flex flex-col p-3 h-full w-[500px] border-2 border-white rounded-b">
          <div className="flex">
            <button>Like Post Button -- </button>
            <span># Likes</span>
          </div>
          <div className="flex gap-3">
            <button
              className=""
              onClick={() => navigateToProfile(user?.id)}
            >
              {post?.username || post?.user?.username || ""}
            </button>
            <span className="">{currentPost?.caption}</span>
          </div>
        </div>
        <button className="flex items-center justify-center">View Comments</button>
      </div>
    </>
  )
}

export default SinglePostPage;
