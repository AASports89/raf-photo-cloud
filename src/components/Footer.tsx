import React, {useEffect} from 'react';
import '../App.css';
import favicon from '../logo.svg';
import Aos from 'aos';

export default function Footer() {
    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])
    const year = new Date().getFullYear();

    return (
       
            <footer id='footer'>				
                 <div id="logo-footer" className="col justify-center">
                    <img data-aos="flip-down" id="royal-icon" src={favicon} alt="Raf-Photo Cloud"></img>
                        <p id="footer-title">
                            <b>© Raf-Photo Cloud {year}. All Rights Reserved.</b>
                        </p>
                </div>

            </footer>
    )};  