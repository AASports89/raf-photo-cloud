import './App.css';
import Aos from 'aos';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SingleFileUploader from './components/SingleFileUploader';

export default function App() {

  Aos.init({duration:3000});
  
  
  return(
    <div className="container-fluid">
       <Router>
            <Routes>
                <Route path="/"
                    element={<Home />} />
                
                <Route path="/upload"
                    element={<SingleFileUploader />} />
            </Routes>
        </Router>
    </div>
);}