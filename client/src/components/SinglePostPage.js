import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import SinglePost from './SinglePost'
import plant from "../plant.jpeg"


function SinglePostPage({
  user,
  post,
  posts,
  setPosts,
  category,
  setUser
}) {

  const [currentPost, setCurrentPost] = useState({})
  const navigate = useNavigate()
  const { postId } = useParams()
  const [userPosts, setUserPosts] = useState([])

  const navigateToHome = () => {
    navigate("/posts")
  }

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

  function handlePostDeleteClick(post) {
    fetch(`/posts/${postId}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          deletePost(post)
        }
        navigateToHome()
      })
  }

  function deletePost(deletedPost) {
    const updatedPosts = userPosts.filter((post) => post.id !== deletedPost.id)
    setUserPosts(updatedPosts)
  }

  return (
    <>
      <div className="flex flex-col items-center py-[50px]"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >
        <SinglePost
          className=""
          key={currentPost.id}
          id={currentPost.id}
          post={currentPost}
          user={user}
          setUser={setUser}
          handlePostDeleteClick={handlePostDeleteClick}

        />


      </div>

    </>
  )
}

export default SinglePostPage;
