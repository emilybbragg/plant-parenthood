import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";


function ProfilePage({
  user,
  setUser
}) {
  const [userBio, setUserBio] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  const { userId } = useParams();

  useEffect(() => {
    fetch(`/users/${userId}`)
      .then((r) => r.json())
      .then((user) => {
        setUser(user)
      });
  }, [userId])

  console.log(user?.posts)
  console.log(user)

  // function handleSubmit(e) {
  //   // e.preventDefault();

  //   fetch(`/users/${userId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       description: updatedDescription
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       handleUpdateReview(data)
  //     })
  //     .then(() => setIsEditing(false));
  // }

  return (

    <>
      <div className="flex gap-10 items-center justify-center p-5">
        <div className="flex flex-col items-center justify-between rounded border-2 border-black h-fit w-[350px] p-3 gap-10 min-h-[400px]">
          <div className="border-2 rounded-full w-20 h-20 p-20 flex">Avatar Here</div>

          <div className="flex flex-col items-center border-2 border-black rounded p-5 w-full h-full gap-3">
            <span className="">{user?.name} (@{user?.username})</span>
            {isEditing ?
              <input
                type="text"
                id="bio"
                value={userBio}
                onChange={(e) => setUserBio(e.target.value)}
                placeholder="Add Your Bio Here"
                className="border-2 border-black flex flex-col"
              /> :
              <span>{userBio}</span>
            }
          </div>

          <div>
            {
              isEditing ?
                // <button onClick={() => setIsEditing(!isEditing)}>Save</button> :
                <button onClick={() => setIsEditing(false)}
                // onSubmit={handleSubmit}
                >Save</button> :
                <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>

            }
          </div>

        </div>

        <ul className="flex items-center justify-center">
          {user?.posts?.length > 0 ? (user?.posts?.map((post) => (
            <>
              <Post
                key={post?.id}
                id={post?.id}
                post={post}
                user={user}
              />
            </>
          ))
          ) :
            <div className="flex justify-center items-center text-3xl text-green-800 opacity-60 pt-[200px]">
              No Posts Yet! Add one to get started.
            </div>
          }
        </ul>
      </div>
    </>
  );
}

export default ProfilePage;