import React, { useState, useEffect } from "react";
import plant from "../plant.jpeg";
import Button from "../styles/Button.js";



function CreateNewPostPage({
  user,
  posts,
  setPosts
}) {


  const [postImage, setPostImage] = useState([])
  const [postCaption, setPostCaption] = useState([])
  const [errors, setErrors] = useState([])

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
    <div className="flex flex-col items-center"
      style={{
        backgroundImage: `url(${plant})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'cover',
        height: '100vh'
      }}
    >
      <div className="flex flex-col p-3 h-full w-[500px] rounded-b border-2 border-white">


        <form className="w-fit h-fit" onSubmit={handlePostSubmit}>
          <span className="items-center flex border-2 rounded-sm h-[150px] w-full border-black">Upload Image Here</span>
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

    </div >


  )
}

export default CreateNewPostPage;