import Navbar from './components/Navbar';
import favicon from './logo.svg';
import './App.css';
import Aos from 'aos';

function App() {

  Aos.init({duration:3000});
  const year = new Date().getFullYear();
  
  return(
    <div className="container-fluid">
      <Navbar />
      <footer id='footer' className="row justify-content-md-center">				
              <div className="col-12 justify-content-center" id="footer-div">
                <h1 className='card-header' id='footer-card'>
                  <p data-aos="flip-down" id="footer-title"><img id="royal-icon" src={favicon} alt="Raf-Photo Cloud"></img><b>© Raf-Photo Cloud {year}. All Rights Reserved.</b></p>
                  {/* <a data-aos="slide-left" className="px-5" href="https://www.ubereats.com/store/royal-pastry/q3B2luXuVsmOSVPn_AXNEA" target="_blank" rel="noopener noreferrer">
                    <i id="twitter" className="fa-brands fa-uber"></i>
                  </a> |
                  <a data-aos="flip-down" className="px-5" href="https://#" target="_blank" rel="noopener noreferrer">
                    <i id="insta" className="fa-brands fa-instagram"></i>
                  </a> |
                  <a  data-aos="slide-right" className="px-5" href="https://www.yelp.com/biz/royal-bakery-los-angeles" target="_blank" rel="noopener noreferrer">
                    <i id="yelp" className="fa-brands fa-yelp"></i>
                  </a> */}
                
                </h1>
              </div>
      </footer>
    </div>
);
}

export default App;
