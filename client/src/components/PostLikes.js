import { React, useState, useContext } from "react"
import { UserContext } from "../UserContext"
import Icon from "./Icons"


function PostLikes({
  setPostLikes,
  postLikes,
  post,
  postId
}) {

  const { user, setUser } = useContext(UserContext)
  const [errors, setErrors] = useState([])

  function handlePostLikeClick() {
    const likeData = {
      user_id: user.id,
      post_id: post.id,
    }
    fetch(`/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newLike) => {
            const allLikesWithNew = [...postLikes, newLike]
            setPostLikes(allLikesWithNew)
          })
        } else {
          r.json().then((err) => {
            setErrors([err?.error])
          })
        }
      })
  }

  function handleLikeDeleteClick(postLike) {
    fetch(`/posts/${post.id}/likes`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          deletePostLike(postLike)
        }
      })
  }

  function deletePostLike() {
    const updatedLikes = postLikes?.findIndex((postLikes) => post?.like?.id === user?.like?.id)
    // .filter((like) => like?.id !== deletedLike.id)
    setPostLikes(updatedLikes)
  }

  return (
    <>

      <button
        onClick={handlePostLikeClick}
      >
        <Icon
          icon="like"
          className="h-4 w-4" />
      </button>
      <span>{postLikes?.length || 0} likes</span>

      <button className="" onClick={() => handleLikeDeleteClick(postLikes)}>
        <span role="img" aria-label="delete">🗑</span>
      </button>
    </>
  )
}

export default PostLikes;