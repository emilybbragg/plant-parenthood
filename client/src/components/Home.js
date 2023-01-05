import React, { useState, useEffect } from "react";
import Post from "./Post";
import styled from "styled-components";
import FormField from "../styles/FormField"
import Input from "../styles/Input.js";
import Label from "../styles/Label.js";
import Button from "../styles/Button.js";


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

      <div className="px-20 py-5">

        <div className="bg-emerald-700 flex items-center justify-center w-full h-[80px] gap-8">
          <button
            // onClick={ }
            className="bg-white w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center">Create a New Post</button>
          <button
            // onClick={ }
            className="bg-white w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center">Filter By Category</button>
        </div>
        <div className="">Check out these latest posts:</div>


        <ul className="flex flex-row items-center justify-center justify-between w-full h-full">
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
            <div className="">No Posts Yet!</div>
          }
        </ul>

        {/* <Wrapper> */}

        <div className="h-[420px] w-[420px]">
          <form className="" onSubmit={handlePostSubmit}>
            <h1 className="">Or, show off your latest addition:</h1>

            <FormField>
              <Label htmlFor="">Post Image:</Label>
              <Input type="text" id="image" value={postImage} onChange={(e) => setPostImage(e.target.value)} />
            </FormField>

            <FormField>
              <Label htmlFor="">Post Description:</Label>
              <Input type="text" id="description" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} />
            </FormField>

            <FormField>
              <Button type="submit">Submit</Button>
            </FormField>

            <FormField>
              <div>
                {errors?.map((err) => (
                  <ul key={err} className="">Error: {err}</ul>
                ))}
              </div>
            </FormField>
          </form>
        </div>
        {/* </Wrapper> */}
      </div>
    </>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Home;