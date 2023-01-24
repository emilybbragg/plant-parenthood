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
import cactus from "../cactus.jpeg";
import plant from "../plant.jpeg";
import { useNavigate } from "react-router-dom";


function Home({
  user,

}) {
  const [posts, setPosts] = useState([])

  const navigate = useNavigate();

  // const navigateToPost = (postId) => {
  //   navigate(`/posts/${postId}`)
  // };

  // const navigateToProfile = (userId) => {
  //   navigate(`/users/${userId}`)
  // };

  const navigateToNewPostForm = (newpost) => {
    navigate(`/posts/${newpost}`)
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


  console.log(posts)

  return (
    <>

      <div className="flex flex-col items-center"
        style={{
          backgroundImage: `url(${plant})`,
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >

        <div className="flex flex-row items-center justify-end  h-fit w-fit p-3 rounded-xl">
          <div className="flex items-center justify-end  w-full h-[80px] gap-8">
            <button className="hover:border-2 hover:border-white hover:rounded p-3 text-green-800 opacity-60"
              onClick={() => navigate("/posts/newpost")}>Create a New Post</button>

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
              // user={post?.user}
              />
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