import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParlayForm from './pages/ParlayForm';

function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/'
                element={<Home />}
              />
              <Route path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
               <Route 
                path='/parlayform'
                element={<ParlayForm />}
              />
              <Route 
                path="/me" 
                element={<Dashboard />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Dashboard />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;