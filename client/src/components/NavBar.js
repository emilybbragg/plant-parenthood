import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import cactus from "../cactus.jpeg";


function NavBar({ user, setUser }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/")
      }
    });
  }

  return (
    <>

      <div className="flex flex-row items-center gap-3 w-full h-[80px] 
      bg-green-800 opacity-40
      p-3 justify-between">

        <div className="flex items-center justify-start gap-4">
          <div className="border-2 rounded-full w-14 h-14">Avatar Here</div>
          <span className="text-white font-serif font-semibold text-4xl">Hello, {user?.username}!</span>
        </div>

        <div className="flex flex-row gap-3 justify-end items-center">
          <Link to="/posts" className="text-white w-[100px] h-[40px] p-2 rounded-lg flex justify-center items-center hover:border-2 border-white">Home</Link>
          <Link to="/users/userId" className="text-white w-[100px] h-[40px] p-2 rounded-lg flex justify-center items-center hover:border-2 !border-white">My Profile</Link>
          <button onClick={handleLogoutClick} className="text-white w-[100px] h-[40px] p-2 rounded-lg flex justify-center items-center hover:border-2 !border-white">Logout</button>
        </div>

      </div>
    </>
  )
}

export default NavBar;




