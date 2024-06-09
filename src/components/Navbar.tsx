import React, {useEffect} from 'react';
import '../App.css';
import logo from '../logo.svg';
import Aos from 'aos';

const Navbar = () => {
    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])

    return (
		<div className="col-12">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
          <div id="logo-header" className="col-2 justify-center">
            <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
          </div>
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
              <a id='home' data-aos="flip-right" className="nav-link active" href={"https://aasports89.github.io/raf-photo-cloud/"}>
                <i id='home-icon' className="fa-solid fa-house"></i> 
                Home
              </a>
                <a id='home' data-aos="flip-right" className="nav-link active" href={"https://aasports89.github.io/raf-photo-cloud/signin"}>
                    <i id='home-icon' className="fa-duotone fa-users"></i>
                    Log In
                </a>

                <a id='custom' data-aos="flip-left" className="nav-link active" href={"https://aasports89.github.io/raf-photo-cloud/signup"}>
                    <i id='home-icon' className="fa-duotone fa-user-plus"></i>
                    Sign Up
                </a>
              <a id='custom' data-aos="flip-left" className="nav-link active" href={"https://aasports89.github.io/raf-photo-cloud/upload"}>
                  <i id='custom-icon' className="fa-duotone fa-cloud-arrow-up"></i>
                Upload
              </a>
            </nav>
          </div>
        </nav>
      </div>
    )};
export default Navbar;