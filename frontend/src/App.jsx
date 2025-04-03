import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import InternalPage from './pages/InternalPage';
import AddTicket from './components/AddTicket';
import Dashboard from './components/Dashboard';
import TicketList from './components/TicketList';
function App() {
  return (
    <Router>
       
        <Routes>    
          <Route path='/' element = {<HomePage/> }/>
          <Route path='/login' element = {<Login/> }/>
          <Route path='/signup' element = {<Signup/> }/>
          <Route path='/user' element = {<InternalPage/> }/>
          <Route path='/user/dashboard' element = {<Dashboard/> }/>


          <Route path='/user/addticket' element = {<AddTicket/> }/>
          <Route path='/user/myticket' element = {<TicketList/> }/>
        </Routes>

    </Router>
  )
}

export default App;
