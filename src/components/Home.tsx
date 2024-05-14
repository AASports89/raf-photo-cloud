import React, {useEffect} from 'react';
import '../App.css';
import Aos from 'aos';
import Navbar from "./Navbar";


const Home = () => {

    useEffect(() => {
		Aos.init({duration:3000});
	}, [])
return (
    <div className="App">
        <Navbar />
    </div>
        );
    };
export default Home;