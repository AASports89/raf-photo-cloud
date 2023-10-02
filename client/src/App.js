import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup.handlebars';
import Login from './pages/login.handlebars';
import Dashboard from './pages/dashboard.handlebars';
import Navbar from './components/navbar';
import Home from './pages/layouts/main.handlebars';
import PostForm from './pages/post.handlebars';
const Handlebars = require('handlebars')

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
                path='/post'
                element={<PostForm />}
              />
              <Handlebars
                path='/dashboard'
                element={<Dashboard/>}
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
        </div>
      </Router>
  );
}

export default App;