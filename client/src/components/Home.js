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
import { useNavigate } from "react-router-dom";


function Home({
  user,

}) {
  const [posts, setPosts] = useState([])
  const [postImage, setPostImage] = useState([])
  const [postCaption, setPostCaption] = useState([])
  const [errors, setErrors] = useState([])
  const navigate = useNavigate();

  const navigateToPost = (postId) => {
    navigate(`/posts/${postId}`)
  };

  const navigateToProfile = (userId) => {
    navigate(`/users/${userId}`)
  };


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
      caption: postCaption,
      user_id: user?.id
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
            setPostCaption("")
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })

  }



  return (
    <>

      <div className="flex flex-col items-center "
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover'
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
                  <span className="font-serif font-semibold text-sm items-center flex py-3">Post caption</span>
                  <input
                    type="text"
                    id="caption"
                    value={postCaption}
                    onChange={(e) => setPostCaption(e.target.value)}
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

            <div className="flex flex-col">
              <Post
                key={post.id}
                id={post.id}
                post={post}
                className=""
                user={user}
              />
              <div className="flex items-center justify-between  h-[40px] w-[300px] gap-3 bg-white p-3 rounded-b">
                <button className="" onClick={() => navigateToPost(post?.id)}>View Post</button>
                <button className="" onClick={() => navigateToProfile(user?.id)}>{user?.username}</button>

              </div>


            </div>
          ))
          ) :
            <div className="flex justify-center items-center text-3xl text-green-800 opacity-60 pl-[400px] pb-[200px]">
              No Posts Yet! Add one to get started.
            </div>
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