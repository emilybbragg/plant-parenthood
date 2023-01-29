import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Post from "./Post"
import plant from "../plant.jpeg"
import Button from "../styles/Button.js"
import { useNavigate } from "react-router-dom"


function ProfilePage({
  user,
  setUser

}) {
  const [isEditing, setIsEditing] = useState(false)
  const [bio, setBio] = useState("")
  // const [userBios, setUserBios] = useState([])

  const { userId } = useParams()

  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then(categories => {
        if (categories && categories.length > 0) {
          setCategories(categories)
        }
      })
  }, [])

  // useEffect(() => {
  //   fetch(`/users/${userId}`)
  //     .then((r) => r.json())
  //     .then((user) => {
  //       setUser(user)
  //     });
  // }, [userId])

  function handleUpdateUser() {
    const userData = {
      // avatar
      bio: bio,
    };
    fetch(`/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((r) => r.json())
      .then((userData) => {
        handleUpdateUser(userData)
      })
      .then(() => setIsEditing(false));
  }


  useEffect(() => {
    setFilteredPosts(user?.posts?.reverse())
  }, [user])

  useEffect(() => {
    if (selectedCategory === "default") {
      setFilteredPosts(user?.posts?.reverse())
    }
    else {
      const filteredPosts = user?.posts?.filter((post) => selectedCategory == post?.category_id)
      setFilteredPosts(filteredPosts.reverse())
    }
  }, [selectedCategory])



  // function handleUpdateUser(updatedUser) {
  //   const updateUser = userBios.filter((userBio) => userBio?.id === updatedUser?.id ? updatedUser : userBio)
  //   setUser(updatedUser)
  // }




  return (
    <>
      <div className="flex p-[3rem]"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          // height: '100vh'
        }}
      >

        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center h-[600px] w-[500px] rounded-b border-2 border-white bg-white shrink-0">
            <span className="flex items-center justify-center h-[300px] w-[300px] border-2 rounded-full border-black">Add Photo</span>
            <div className="flex flex-col items-center justify-center h-fit min-h-[200px] w-[450px] bg-green-800 opacity-40 rounded items-center">
              <div className="flex flex-col items-center justify-center w-full h-fit min-h-[200px]">
                <span className="text-white text-lg font-bold">
                  {user?.name} (@{user?.username})
                </span>
                <hr className="w-[20rem] h-1 mx-auto my-4 bg-white border-0 rounded" />
                {isEditing ?
                  <input
                    // value={userBio}
                    // onChange={(e) => setUserBio(e.target.value)}
                    placeholder="Add Your Bio Here!"
                    className="flex text-center rounded p-1 h-[100px] w-[300px] overflow-auto"
                  /> :
                  bio ?
                    <span className="flex text-center">
                      {bio}
                    </span> :
                    <span className="text-white">Edit your profile to add your bio here!</span>

                }
              </div>
              <div className="flex p-3">
                {
                  isEditing ?
                    <Button
                      onClick={handleUpdateUser}
                    >
                      Save
                    </Button> :
                    <Button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                      Edit
                    </Button>
                }
              </div>

            </div>
          </div>
        </div>





        <div className="flex w-fit h-[80px] gap-8 absolute pl-[750px]">
          <button className="w-[175px] h-[50px] p-3 rounded bg-white text-green-800 opacity-60 hover:border-2 hover:border-green-800"
            onClick={() => navigate("/posts/newpost")}
          >
            Create a New Post
          </button>
          <select
            name="categories"
            className="flex items-center justify-center w-[175px] h-[50px] p-3 rounded text-green-800 opacity-60 hover:border-2 hover:border-green-800"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <>
              <option value="default">All Posts</option>
              {categories?.map((category) => (
                <option
                  value={category?.id}
                  name={category?.name}
                >
                  {category?.name}
                </option>
              ))}
            </>
          </select>
        </div>

        <div className="flex justify-between p-10 gap-[10rem] w-fit overflow-y-auto h-[800px]">
          <ul className="flex flex-wrap gap-[4rem] rounded pl-[80px]">
            {filteredPosts?.length > 0 ? (filteredPosts?.map((post) => (
              <>
                <Post
                  key={post.id}
                  id={post.id}
                  post={post}
                  user={user}
                />
              </>
            ))
            ) :
              <span className="flex pt-[200px] text-3xl text-green-800 opacity-60">
                No Posts Yet! Add one to get started.
              </span>
            }
          </ul>
        </div>

      </div>


    </>
  )
}

export default ProfilePage;