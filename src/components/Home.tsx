import React, {useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import logo192 from '../images/logo192.svg'
import '../App.css';
import Aos from 'aos';

export default function Home() {

    
    useEffect(() => {
		Aos.init({duration:3000});
	}, [])
return (
    <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <main>
                <section className="section">
                    <div className="columns is-variable is-8">
                        <div className="column is-5 is-offset-1">
                            <div className="card">
                                <img id="sum-img" className="card-img-top" src={logo192} alt="Card image"></img>   
                            </div>
                        </div>
                        <div className="column is-5">
                            <div className="card">
                                <img id="sum-img" className="card-img-top" src="{{format_summary 1.image}}" alt="Card image"></img>  
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="App-footer">
                <Footer />
            </footer>
    </div>
        );
    }