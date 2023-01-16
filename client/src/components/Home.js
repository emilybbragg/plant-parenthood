//Packages
import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


//Components
import Post from "./Post";
import styled from "styled-components";
import FormField from "../styles/FormField";
import Input from "../styles/Input.js";
import Label from "../styles/Label.js";
import Button from "../styles/Button.js";
import cactus from "../cactus.jpeg";
import plant from "../plant.jpeg";


function Home({
  user

}) {
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

      <div className="flex flex-col items-center"
        style={{
          backgroundImage: `url(${plant})`,
          height: '750px',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}

      >


        <div className="flex flex-row items-center justify-end  h-fit w-fit p-3 rounded-xl">


          <div className="flex items-center justify-end  w-full h-[80px] gap-8">
            <Popup
              trigger={<button className="
              hover:border-2 hover:border-white hover:rounded p-3
              text-green-800 opacity-60
              "> Create a New Post</button>}
              // position="right center"
              className="p-3 rounded-lg flex justify-center items-center bg-emerald-700">

              <div className="w-fit h-fit flex p-3">
                <form className="w-fit h-fit" onSubmit={handlePostSubmit}>
                  <span className="items-center flex border-2 rounded-sm h-[150px] w-full border-black">+</span>
                  <span className="font-serif font-semibold text-sm items-center flex py-3">Post Description</span>
                  <input
                    type="text"
                    id="description"
                    value={postDescription}
                    onChange={(e) => setPostDescription(e.target.value)}
                    className="border-2 border-black flex flex-col"
                  />
                  <div className="font-serif font-semibold text-sm items-center flex py-3">Category</div>
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
              className="w-[175px] h-[50px]rounded-lg flex justify-center items-center
              
              hover:border-2 hover:border-white hover:rounded p-3
              text-green-800 opacity-60
              ">Filter By Category</button>
          </div>


        </div>




        <ul className="flex flex-wrap items-center gap-20 justify-between w-full h-full px-20 py-5 rounded">
          {posts?.length > 0 ? (posts?.map((post) => (
            <>
              {/* <div className=""> */}
              <Post
                key={post.id}
                post={post}
                className="h-full "

                user={user}
              />
              {/* </div> */}
            </>


          ))
          ) :
            <div className="">No Posts Yet! Add one to get started.</div>
          }
        </ul>


      </div>
    </>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default Home;