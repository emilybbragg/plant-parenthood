//Packages
import React, { useState, useEffect } from "react"
import Popup from 'reactjs-popup'

//Components
import Post from "./Post"
import styled from "styled-components"
import FormField from "../styles/FormField"
import Input from "../styles/Input.js"
import Label from "../styles/Label.js"
import Button from "../styles/Button.js"

import 'reactjs-popup/dist/index.css';


function Home() {
  const [posts, setPosts] = useState([])
  const [postImage, setPostImage] = useState([])
  const [postDescription, setPostDescription] = useState([])
  const [errors, setErrors] = useState([])

  console.log(posts)

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(posts => {
        if (posts && posts.length > 0) {
          setPosts(posts)
        }
      })
  }, [])

  function handlePostSubmit(e) {
    e.preventDefault();
    setErrors([]);
    const postData = {
      image: postImage,
      description: postDescription
    };
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
            setPostDescription("")
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })

  }


  return (
    <>

      <div className="flex flex-col">
        <span className="flex items-center justify-center">Check out the latest posts, or:</span>
        <div className="flex items-center justify-center w-full h-[80px] gap-8">
          <Popup
            trigger={<button> Create a New Post</button>}
            // position="right center"
            className="p-3 rounded-lg flex justify-center items-center bg-emerald-700">

            <div className="w-fit h-fit flex p-3">
              <form className="w-fit h-fit" onSubmit={handlePostSubmit}>
                <span className="items-center justify-center flex border-2 rounded-sm h-[150px] w-full border-black">+</span>
                <span className="font-serif font-semibold text-sm items-center justify-center flex py-3">Post Description</span>
                <input
                  type="text"
                  id="description"
                  value={postDescription}
                  onChange={(e) => setPostDescription(e.target.value)}
                  className="border-2 border-black flex flex-col"
                />
                <div className="font-serif font-semibold text-sm items-center justify-center flex py-3">Category</div>
                <Button type="submit" className="items-center justify-center flex">Post</Button>
                <div>
                  {errors?.map((err) => (
                    <ul key={err} className="">Error: {err}</ul>
                  ))}
                </div>
              </form>
            </div>

          </Popup>


          <button
            // onClick={ }
            className="w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center bg-emerald-700">Filter By Category</button>
        </div>
      </div>






      <ul className="flex flex-row items-center justify-center justify-between w-full h-full gap-3">
        {posts?.length > 0 ? (posts?.map((post) => (
          <>
            <div className="">
              <Post
                key={post.id}
                post={post}
                className="h-full"
              // user={user}
              />
            </div>
          </>


        ))
        ) :
          <div className="">No Posts Yet! Add one to get started.</div>
        }
      </ul>

      {/* <Wrapper> */}
      {/* </Wrapper> */}
    </>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Home;