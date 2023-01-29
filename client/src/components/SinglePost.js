import { useState, React } from "react"
import { useNavigate } from "react-router-dom"
import EditPost from "./EditPost"


function SinglePost({
  post,
  user,
  handleUpdatePost,
  handlePostDeleteClick
}) {

  const navigate = useNavigate()
  const [isEditing, setIsEditing] = useState(false)

  const navigateToProfile = (userId) => {
    navigate(`/users/${userId}`)
  }



  // console.log(user.id)
  // console.log(post?.user?.id)
  console.log(post)



  return (
    <>

      <div>
        <ul className="flex flex-col">

          <div className="flex flex-col items-center justify-between h-[500px] w-[500px] bg-green-800 text-black border-4 border-white rounded-t">
            <div>{post?.image}</div>
          </div>
          <div className={`flex flex-col p-3 h-fit w-[500px] gap-2 bg-white border-2 border-white text-black
            ${isEditing && post.user?.id == user.id ? "rounded-none" : post.user?.id == user.id ? "rounded-none" : "rounded-b"}
          `}>

            <div className="flex row items-start gap-2">
              <button>Heart Icon</button>
              <span># Likes</span>
            </div>

            <div className="flex row items-start gap-2">
              <button>Comment Icon</button>
              <button
              // onClick={}
              >View all comments</button>
            </div>

            <div className="flex gap-2">
              <button className="flex items-start font-bold" onClick={() => navigateToProfile(user?.id)}>
                {post?.username || post?.user?.username || ""}
              </button>
              {isEditing && post.user?.id == user.id ?
                <EditPost
                  id={post.id}
                  post={post}
                  handleUpdatePost={handleUpdatePost}
                  user={user.id}
                  className="border-black border-2"
                /> :
                <span>{post?.caption || ""}</span>
              }

            </div>

            <div className="flex gap-2">
              <span>Category:</span>
              <span>{post?.category?.name || ""}</span>
            </div>
          </div>
        </ul>


        {/* 
        {isEditing && post.user?.id == user.id ? (
          <EditPost
            id={post.id}
            post={post}
            handleUpdatePost={handleUpdatePost}
            user={user.id}
          />
        ) */}

        {!isEditing && post?.user?.id == user.id ? (
          <>
            <div className="flex justify-between bg-white rounded-b px-3 pb-3">
              <button className="" onClick={() => setIsEditing((isEditing) => !isEditing)}>
                <span role="img" aria-label="edit">Edit Post ✏️</span>
              </button>
              <button className=""
                onClick={() => handlePostDeleteClick(post)}
              >
                <span role="img" aria-label="delete">Delete Post 🗑</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  )
}

export default SinglePost;