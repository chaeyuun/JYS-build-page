import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/Teacher/AdminHome'
import UserHome from './pages/Student/UserHome'
import UserLogin from './pages/Account/Login';
import Signup from './pages/Account/Signup';
import Findid from './pages/Account/Findid';
import Findpw from './pages/Account/Findpw';
import Rental from './pages/Equipment/Rental';
import ListDetail from './pages/Teacher/ListDetail'
import RentalList from './pages/Teacher/RentalList'
import Test from './pages/Test'
import AddCamera from './pages/Equipment/AddCamera'
import Notlogin from './pages/Notlogin'
import RentalStatus from './pages/Equipment/RentalStatus'
import styled from 'styled-components';


function App() {
  return (
    <Appwrap>
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/home" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/find-id" element={<Findid />} />
      <Route path="/find-pw" element={<Findpw />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/listdetail/:id" element={<ListDetail/>} />
      <Route path="/rentallist" element={<RentalList/>} />
      <Route path="/test" element={<Test />} />
      <Route path="/add-camera" element={<AddCamera />} />
      <Route path="/" element={<Notlogin />} />
      <Route path="/status" element={<RentalStatus />} />
    </Routes>
    </Router>
    </Appwrap>
  );
}

export default App;

const Appwrap = styled.div`
  
`