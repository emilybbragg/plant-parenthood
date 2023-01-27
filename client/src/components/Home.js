import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Post from "./Post"
import plant from "../plant.jpeg"


function Home({
  user,
  posts,
  setPosts,
  post
}) {

  const navigate = useNavigate()

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(posts => {
        if (posts && posts.length > 0) {
          setPosts(posts)
        }
      })
  }, [])

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then(categories => {
        if (categories && categories.length > 0) {
          setCategories(categories)
        }
      })
  }, [])

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(posts => {
        if (posts && posts.length > 0) {
          setPosts(posts)
        }
      })
    if (selectedCategory) {
      setPosts(filteredPosts)
    }
  }, [])
  // const filteredCategory = categories?.filter((category) => selectedCategory == category?.id)
  // console.log(filteredCategory)
  const filteredPosts = posts?.filter((post) => selectedCategory == post?.category?.id)
  console.log(filteredPosts)




  return (
    <>
      <div className="flex flex-col items-center"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          // height: '100vh' - set minimum height?
        }}
      >
        <div className="flex flex-row items-center justify-end h-fit w-fit p-3 rounded-xl">
          <div className="flex items-center justify-end w-full h-[80px] gap-8">
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
                <option value="default" disabled>Filter By Category</option>
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
        </div>


        <ul className="flex flex-wrap-reverse items-center w-full h-full gap-[150px] pl-[110px] py-5 rounded">


          {posts?.length > 0 ? (posts?.map((post) => (
            <div className="flex flex-col">
              <Post
                key={post.id}
                id={post.id}
                post={post}
                user={user}
              />
            </div>
          ))
          ) :

            <div className="flex items-center justify-center pl-[400px] pb-[200px] text-3xl text-green-800 opacity-60">
              No Posts Yet! Add one to get started.
            </div>
          }
        </ul>
      </div>
    </>
  )
}

export default Home;