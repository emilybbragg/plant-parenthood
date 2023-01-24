import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";
import plant from "../plant.jpeg";



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

  console.log(user)

  // function handleUpdateUser(e) {
  //   // e.preventDefault();
  //   const userData = {
  //     // avatar
  //     bio: userBio,
  //   };
  //   fetch(`/users/${userId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userData }),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       handleUpdateUser(data)
  //     })
  //     .then(() => setIsEditing(false));
  // }



  return (

    <>

      <div className="flex"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >
        <div className="flex items-center justify-between">

          <div className=" flex flex-col items-center justify-center rounded border-2 border-black h-fit w-[350px] p-3 gap-10 min-h-[500px]">
            <div className="border-2 rounded-full w-20 h-20 p-20 flex items-center justify-center">Avatar Here</div>
            <div className="flex flex-col items-center justify-center border-2 border-black rounded p-5 w-full h-fit min-h-[200px] gap-3">
              <span className="">{user?.name} (@{user?.username})</span>
              {isEditing ?
                <textarea
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                  placeholder="Add Your Bio Here"
                  className="border-2 border-black text-black flex flex-col min-h-[50px] h-fit"
                /> :
                <span className="flex text-center">{userBio}</span>
              }
            </div>

            <div>
              {
                isEditing ?
                  <button
                  // onClick={handleUpdateUser}
                  >
                    Save
                  </button> :
                  <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
              }
            </div>

          </div>



          <div className="flex">
            <ul className="flex">
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
                <div className="flex text-3xl text-green-800 opacity-60 pt-[200px]">
                  No Posts Yet! Add one to get started.
                </div>
              }
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}

export default ProfilePage;