import React, {useEffect} from 'react';
import '../App.css';
import logo from '../logo.svg';
import Aos from 'aos';

export default function Navbar() {
    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])

    return (
		<div className="col-12">
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">     
          <div className="col-2 justify-center">
            <h1 className="text-hide">
                <img id='logo' src={logo} className="card-img" alt="logo"  data-aos="slide-right"/>
            </h1>
          </div>
          <div className="col-10">
            <h2 className="card-header">
         
              </h2>
          </div>
        </nav>
        <header id='header' className="navbar navbar-expand-lg navbar-light bg-light">
          <a id='home' data-aos="flip-right" className="nav-link active" href='./Home.tsx'>
            <i id='home-icon' className="fa-solid fa-house"></i> 
            Home
          </a>   
          <a id='custom' data-aos="flip-left" className="nav-link active">
            <i id='custom-icon' className="fa-solid fa-layer-group"></i>
            Share
            </a>
        </header>
      </div>
    )};