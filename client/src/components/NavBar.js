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
      <div className="bg-white flex items-center justify-center w-full h-[80px]">
        <span className="text-black font-serif font-semibold text-xl">Good Morning, {user.username}!</span>
      </div>
      <span className=""></span>

      <div className="bg-emerald-700 p-3">
        <div className="flex justify-between">

          <Link to="/posts" className="bg-white w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center">Home</Link>
          <Link to="/myprofile" className="bg-white w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center">My Profile</Link>

          <button onClick={handleLogoutClick} className="bg-white w-[100px] h-[50px] p-3 rounded-lg flex justify-center items-center">Logout</button>

        </div>
      </div>


    </>
  )
}

export default NavBar;




