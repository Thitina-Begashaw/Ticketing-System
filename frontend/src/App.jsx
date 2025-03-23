import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
       
        <Routes>    
          <Route path='/' element = {<HomePage/> }/>
          <Route path='/login' element = {<Login/> }/>
          <Route path='/signup' element = {<Signup/> }/>
        </Routes>

    </Router>
  )
}

export default App;
