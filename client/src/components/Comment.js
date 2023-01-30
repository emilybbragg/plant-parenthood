import React, { useContext } from "react"
import { UserContext } from "../UserContext"

function Comment({
  comment,
  handleCommentDeleteClick
}) {


  const { user, setUser } = useContext(UserContext)
  // console.log(comment?.description)
  // console.log(comment)
  // console.log(user)


  return (
    <>
      <ul className="flex flex-col">
        <>
          <span className="">{comment?.description}</span>
          <span>{comment?.username || comment?.user?.username || ""}</span>
          {comment?.user_id == user?.id ?
            <button className="" onClick={() => handleCommentDeleteClick(comment)}>
              <span role="img" aria-label="delete">Delete 🗑</span>
            </button> : ""
          }
        </>
      </ul>
    </>
  )
}

export default Comment;
