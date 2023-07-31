import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer id="footer" className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button id="back" className="btn"
            onClick={() => navigate(-1)}
          >
            ⬅️ Go Back 
          </button>
        )}
        <h4 id="foot-title">
          Made with{' '}
          <i class="fa-brands fa-github"></i>
          {' '}
          <strong> AASports89 &copy;{year} </strong>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;