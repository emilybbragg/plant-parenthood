import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Home from "./Home";
import NavBar from "./NavBar";
import SinglePostPage from "./SinglePostPage";
import ProfilePage from "./ProfilePage"
import CreateNewPostPage from "./CreateNewPostPage";


function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([])




  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          if (user) {
            setUser(user)
          }
        });
      }
    });
  }, []);

  if (!user) return <LoginPage user={user} onLogin={setUser} />

  return (
    <div>
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<LoginPage user={user} onLogin={setUser} />} />
          <Route path="/posts/:postId" element={<SinglePostPage user={user} posts={posts} setPosts={setPosts} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts" element={<Home user={user} posts={posts} setPosts={setPosts} />} />
          <Route path="/users/:userId" element={<ProfilePage user={user} setUser={setUser}
          // userPosts={userPosts} setUserPosts={setUserPosts}
          />} />
          <Route path="/posts/newpost" element={<CreateNewPostPage user={user} posts={posts} setPosts={setPosts} />} />

        </Routes>
      </>
    </div>
  );
}

export default App;