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
  const [liked, setLiked] = useState(postLikes?.find((like) => like?.user_id == user?.id))

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
            setLiked(true)
          })
        } else {
          r.json().then((err) => {
            setErrors([err?.error])
          })
        }
      })
  }

  function handlePostLikeDeleteClick(likes) {
    console.log(likes)
    const userLike = likes?.find((like) => like?.user_id == user?.id)

    fetch(`/likes/${userLike?.id}`, {
      method: "DELETE",
    })
      .then((r) => {
        if (r.ok) {
          deletePostLike(userLike)
          setLiked(false)
        }
      })
  }

  function deletePostLike(deletedLike) {
    const updatedLikes = postLikes?.filter((like) => like?.id !== deletedLike?.id)
    setPostLikes(updatedLikes)
  }

  function handleLikeButtonClick() {
    if (liked) {
      handlePostLikeDeleteClick(postLikes)
    }
    else {
      handlePostLikeClick()
    }
  }

  return (
    <>
      <button onClick={handleLikeButtonClick}>
        <Icon
          icon={liked ? "liked" : "unliked"}
          className="h-4 w-4" />
      </button>


      {/* {liked ?
        <button onClick={handlePostLikeClick}>
          <Icon
            icon="liked"
            className="h-4 w-4" />
        </button>
        :
        <button
          onClick={handlePostLikeDeleteClick}
        >
          <Icon
            icon="unliked"
            className="h-4 w-4" />
        </button>
      } */}
      <span>{postLikes?.length || 0} likes</span>



      {/* <button className=""
        onClick={() => handlePostLikeDeleteClick(postLikes)}
      >
        <span role="img" aria-label="delete">🗑</span>
      </button> */}
    </>
  )
}

export default PostLikes;