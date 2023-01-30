import React, { useState, useEffect } from "react"
import { UserContext } from "../UserContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LoginPage from "./LoginPage"
import SignupPage from "./SignupPage"
import Home from "./Home"
import NavBar from "./NavBar"
import SinglePostPage from "./SinglePostPage"
import ProfilePage from "./ProfilePage"
import CreateNewPostPage from "./CreateNewPostPage"


function App() {
  // const value = { user, setUser }
  // const providerValue = useMemo(() => ({ user, setUser }, [user, setUser]))
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [bio, setBio] = useState("")

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          if (user !== null) {
            setUser(user)
          }
        })
      }
    })
  }, [])

  return (
    <div>
      <>
        {!user ?
          <UserContext.Provider value={{ user, setUser }}>
            <LoginPage />
          </UserContext.Provider> :
          <UserContext.Provider value={{ user, setUser }}>
            <NavBar />
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/posts/:postId" element={<SinglePostPage posts={posts} setPosts={setPosts} />} />
              <Route path="/signup" element={<SignupPage bio={bio} setBio={setBio} />} />
              <Route path="/posts" element={<Home posts={posts} setPosts={setPosts} />} />
              <Route path="/users/:userId" element={<ProfilePage posts={posts} setPosts={setPosts} bio={bio} setBio={setBio} />} />
              <Route path="/posts/newpost" element={<CreateNewPostPage posts={posts} setPosts={setPosts} />} />
            </Routes>
          </UserContext.Provider>
        }
      </>
    </div>
  )
}

export default App;