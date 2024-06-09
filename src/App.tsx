import React, {useEffect} from "react";
import './App.css';
import Aos from 'aos';
import Home from './components/Home';
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signup/signup";
import SingleFileUploader from './components/SingleFileUploader';
import favicon from "./logo.svg";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";


const App = () => {

    useEffect(() => {
        Aos.init({duration:3000});
    }, [])
    const year = new Date().getFullYear();
  
  
  return(
    <div className="container-fluid">
        <Router>
            <Routes>
                <Route
                    path="https://aasports89.github.io/"
                    element={<Home />}
                />
                <Route
                    path="https://aasports89.github.io/signin"
                    element={<SignIn />}
                />
                <Route
                    path="https://aasports89.github.io/signup"
                    element={<SignUp />}
                />
                <Route
                    path="https://aasports89.github.io/upload"
                    element={<SingleFileUploader />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
        <footer data-aos="slide-up" id='footer' className='App-footer'>
            <nav id='footer-card'>
                <img id="royal-icon" src={favicon} alt="Raf-Cloud"></img><b> © Raf-Photo Cloud {year}. All Rights Reserved.</b>
            </nav>
        </footer>
    </div>
);}

export default App;