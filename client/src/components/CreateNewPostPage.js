import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../styles/Button.js"
import plant from "../plant.jpeg"
import { UserContext } from "../UserContext"


function CreateNewPostPage({

  posts,
  setPosts,

}) {

  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  const [postImage, setPostImage] = useState("")
  const [postCaption, setPostCaption] = useState("")
  const [errors, setErrors] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const navigateToHome = () => {
    navigate("/posts")
  }

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then(categories => {
        if (categories && categories.length > 0) {
          setCategories(categories)
        }
      })
  }, [])

  function handlePostSubmit(e) {
    e.preventDefault()
    setErrors([])
    const postData = {
      image: postImage,
      caption: postCaption,
      user_id: user?.id,
      category_id: selectedCategory
    }
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((newPost) => {
            // console.log(newPost)
            const allPostsWithNew = [...posts, newPost]
            setPosts(allPostsWithNew);
            setPostImage("")
            setPostCaption("")
            setSelectedCategory([])
            navigateToHome()
          })
        }
        else {
          r.json().then((err) => setErrors[err.errors])
        }
      })
  }

  return (
    <div className="flex flex-col items-center pt-[50px]"
      style={{
        backgroundImage: `url(${plant})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div className="flex flex-col items-center justify-center h-[600px] w-[500px] rounded-b border-2 border-white bg-white">
        <form className="flex flex-col items-center justify-between w-full px-4 h-fit gap-10" onSubmit={handlePostSubmit}>
          <span className="flex items-center justify-center h-[300px] w-full px-4 border-2 rounded-sm border-black">Add Photo</span>
          <div className="grid grid-cols-6 gap-1 h-[200px] w-full bg-green-800 opacity-40 rounded">
            <div className="flex items-center justify-center pt-8 pl-8 col-span-3">
              <textarea
                placeholder="Add your caption here!"
                className="rounded p-1 overflow-auto w-full"
                rows="4"
                value={postCaption}
                onChange={(e) => setPostCaption(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 items-center justify-center pt-8 col-span-3">
              <select
                name="categories"
                className="flex items-center justify-center p-1 rounded text-green-800 hover:border-2 hover:border-green-800 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="default">Select a Category</option>
                {categories?.map((category) => (
                  <option
                    value={category?.id}
                    name={category?.name}
                  >
                    {category?.name}
                  </option>
                ))}
              </select>
              <Button type="submit">Post</Button>
            </div>
            <div>
              {errors?.map((err) => (
                <ul key={err}
                  className=""
                >
                  Error: {err}
                </ul>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNewPostPage;