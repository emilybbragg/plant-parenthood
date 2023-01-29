import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Post from "./Post"
import { useParams } from "react-router-dom"


function EditPost({
  user,
  posts,
  setPosts,
  post
}) {

  // const { caption } = post
  const [caption, setCaption] = useState("")
  const [updatedCaption, setUpdatedCaption] = useState("")
  const { postId } = useParams()
  const [isEditing, setIsEditing] = useState(false)
  const [userPosts, setUserPosts] = useState([])


  function handleCaptionChange(e) {
    setUpdatedCaption(e.target.value)
  }

  function handlePostUpdateSubmit(e) {
    e.preventDefault()

    console.log(JSON.stringify({ caption: updatedCaption }))

    fetch(`/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: updatedCaption
      }),
    })
      .then((r) => r.json())
      .then((caption) => {
        handleUpdatePost(caption)
      })
      .then(() => setIsEditing(false));
  }

  function handleUpdatePost(updatedPost) {
    const editedPosts = userPosts?.map((post) => {
      if (post?.id === updatedPost?.id) {
        return updatedPost
      } else {
        return post
      }
    })
    setUserPosts(editedPosts)
  }


  return (
    <form onSubmit={handlePostUpdateSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          className="border-black border-2 rounded"
          placeholder={caption}
          value={updatedCaption}
          onChange={handleCaptionChange}
        />
        <button className="" type="submit" value="Save">Save</button>
      </div>
    </form>
  )
}

export default EditPost;