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
      <div className="">
        <p className="">Welcome, {user.username}!</p>
        <div className="">
          <Link to="/home" className="nav">Home</Link>
          {/* <Link to="/myreviews" className="nav"> My Reviews </Link> */}
          {/* <Link to="/myalbums" className="nav"> My Reviewed Albums </Link> */}
          <button onClick={handleLogoutClick} className="">Logout</button>
        </div>
      </div>
    </>
  )
}

export default NavBar;




