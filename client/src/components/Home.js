import React, { useState, useEffect } from "react";
import Post from "./Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then(posts => {
        if (posts && posts.length > 0) {
          setPosts(posts)
        }
      })
  }, [])


  return (
    <>
      <div className="">Check out these latest posts:</div>
      <ul className="">
        {posts?.length > 0 ? (posts.map((post) => (
          <>
            <div className="">
              <Post
                key={post.id}
                id={post.id}
                album={post}
              // user={user}
              />
            </div>
          </>
        ))
        ) :
          <div className="">No Posts Yet!</div>
        }
      </ul>
    </>
  )
}

export default Home;