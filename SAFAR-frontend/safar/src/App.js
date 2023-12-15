import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Display from './Components/Display';
import ViewBlogs from './Components/ViewBlogs';
import TripLog from './Components/TripLog';
import Login from './AuthPages/Login'
import SignUp from './AuthPages/SignUp'
// import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/viewblogs' element={<ViewBlogs/>}/>
      <Route path='/triplog' element={<TripLog/>}/>




      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    
    {/* <Footer/> */}
    </>
  );
}

export default App;
