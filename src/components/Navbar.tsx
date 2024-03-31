import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';
import Aos from 'aos';

export default function Navbar() {

  const navigate = useNavigate();
     
    const goToHome = () => {
 
        // This will navigate to second component
        navigate('/');
    };
    const gotToUpload = () => {
 
        // This will navigate to first component
        navigate('/upload');
    };
	
    
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
              <a id='home' data-aos="flip-right" className="nav-link active" onClick={goToHome}>
                <i id='home-icon' className="fa-solid fa-house"></i> 
                Home
              </a>  
           
              <a id='custom' data-aos="flip-left" className="nav-link active" onClick={gotToUpload}>
                <i id='custom-icon' className="fa-solid fa-layer-group"></i>
                Upload
              </a>
            </nav>
          </div>
        </nav>
      </div>
    )};