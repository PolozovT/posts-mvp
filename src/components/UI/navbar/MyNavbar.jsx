import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logOut = () => {
    setIsAuth(false)
    localStorage.removeItem('auth');
  }

  return (
    <div className='navbar'>
      <MyButton onClick={logOut}>log out</MyButton>
      <div className='navbar__links'>
        <Link to='/about' style={{ margin: '5px' }}>
          about
        </Link>
        <Link to='/posts' style={{ margin: '5px' }}>
          posts
        </Link>
      </div>
    </div>
  )
}

export default MyNavbar;