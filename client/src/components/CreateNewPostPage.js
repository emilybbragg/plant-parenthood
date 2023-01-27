import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../styles/Button.js"
import plant from "../plant.jpeg"


function CreateNewPostPage({
  user,
  posts,
  setPosts,
}) {
  const [postImage, setPostImage] = useState("")
  const [postCaption, setPostCaption] = useState("")
  const [errors, setErrors] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  const navigate = useNavigate()

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
    e.preventDefault();
    setErrors([]);
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
        <form className="flex flex-col items-center space-y-4 w-fit h-fit gap-10" onSubmit={handlePostSubmit}>
          <span className="flex items-center justify-center h-[300px] w-[450px] border-2 rounded-sm border-black">Add Photo</span>
          <div className="flex items-center justify-center h-[200px] w-[450px] bg-green-800 opacity-40 rounded items-center">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Add your caption here!"
                className="flex rounded p-1 h-[150px] w-[200px] overflow-auto"
                value={postCaption}
                onChange={(e) => setPostCaption(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-5">
              <select
                name="categories"
                className="flex items-center justify-center w-[150px] h-[45px] p-1 rounded text-green-800 hover:border-2 hover:border-green-800 bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories?.map((category) => (
                  <option
                    value={category?.id}
                    name={category?.name}
                  >
                    {category?.name}
                  </option>
                ))}
              </select>
              <Button
                type="submit"
              >
                Post
              </Button>

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