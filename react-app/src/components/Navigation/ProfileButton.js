import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);



  return (
    <>
      <button className="nav-bar-profile-button" onClick={openMenu}>
        <i className="fa-solid fa-user"></i>
        <i className="fas fa-angle-down"></i>
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <div className="nav-bar-dropdown-menu-container">
            <div className='nav-bar-dropdown-menu'>
              <div className='nav-bar-dropdown-menu-signout'>
                <NavLink className='button-container-signout' to={'/myproducts'} style={{ textDecoration: 'none', color: "black" }}>
                  <i style={{paddingRight: '10px'}} class="fa-solid fa-box-open"></i>
                  My Products
                </NavLink>
                <NavLink className='button-container-signout' to={'/myreviews'} style={{ textDecoration: 'none', color: "black" }}>
                  <i style={{paddingRight: '15px'}}  class="fa-solid fa-pencil"></i>
                  My Reviews
                </NavLink>
                <div onClick={handleLogout} className='button-container-signout1'>
                  <i style={{paddingLeft: '15px'}}  class="fa-solid fa-arrow-right-from-bracket fa-flip-horizontal"></i>
                  Sign Out
                </div>
              </div>
            </div>
          </div>

      ) : (
      <>
        <OpenModalButton
          buttonText="Log In"
          onItemClick={closeMenu}
          modalComponent={<LoginFormModal />}
        />

        <OpenModalButton
          buttonText="Sign Up"
          onItemClick={closeMenu}
          modalComponent={<SignupFormModal />}
        />
      </>
        )}
    </ul>
    </>
  );
}

export default ProfileButton;
