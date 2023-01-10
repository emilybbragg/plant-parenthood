import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

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
      <div className="flex flex-row items-center gap-3 w-full h-[80px] bg-emerald-700 p-3 justify-between">
        <div className="flex items-center justify-start gap-2">
          <span>Avatar Here</span>
          <span className="text-black font-serif font-semibold text-xl">Hello, {user.username}!</span>
        </div>

        <div className="flex flex-row gap-3 justify-end items-center">
          <Link to="/posts" className="bg-white w-[90px] h-[40px] p-2 rounded-lg flex justify-center items-center">Home</Link>
          <Link to="/myprofile" className="bg-white w-[90px] h-[40px] p-2 rounded-lg flex justify-center items-center">My Profile</Link>
          <button onClick={handleLogoutClick} className="bg-white w-[90px] h-[40px] p-2 rounded-lg flex justify-center items-center">Logout</button>
        </div>
      </div>
    </>
  )
}

export default NavBar;




