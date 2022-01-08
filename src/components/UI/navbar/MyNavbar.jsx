import React from "react";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div className='navbar'>
      <Link to='/about' className='navbar__links'>
        About
      </Link>
      <Link to='/posts' className='navbar__links'>
        Posts
      </Link>
    </div>
  )
}

export default MyNavbar;