import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import Aos from "aos";

import Auth from '../utils/auth';

const Navbar = () => {
  useEffect(() => {
		Aos.init({duration:2000});
		window.addEventListener("scroll", () => {
		});
	}, [])
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
      <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"/>
        <Link className="text-light" to="/">
            <h1 id="title"><img id="build" src="https://res.cloudinary.com/dhqsixgmo/image/upload/v1690795368/raf_cloud_tjyq3y.svg" alt="Raf's_Photo_Cloud"></img></h1>
          </Link>
          <div className="row" id="links">
          {Auth.loggedIn() ? (
            <>
            <Link className="btn" to="/me">
                {Auth.getProfile().data.username}'s Dashboard <i class="fa-solid fa-photo-film"></i>
            </Link>
              <Link to="/postform">
              <button className="btn" to="/postform">
              Photo Cloud <i class="fa-solid fa-cloud"></i>
            </button>
              </Link>
            <button className="btn" onClick={logout}>
                Logout <i id="login_icon" class="fa-solid fa-ban"></i>
            </button>
            </>
          ) : (
            <>
            <Link className="btn" to="/login">
            Login <i id="login_icon" class="fa-solid fa-users-rectangle"></i>
            </Link>
            
            <Link className="btn" to="/signup">
                Sign Up <i id="login_icon" class="fa-solid fa-user-plus"></i>
            </Link>
            </>
          )}
          </div>
    </nav>
  );
};

export default Navbar;