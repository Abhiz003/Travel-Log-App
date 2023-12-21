import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Feed from './Components/Feed';
import AllUsers from './Components/AllUsers'
import ViewBlogs from './Components/ViewBlogs'
import TripLog from './Components/TripLog'
import AddATale from './Components/AddATale'

import Login from './AuthPages/Login'
import SignUp from './AuthPages/SignUp'
// import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/feed/' element={<Feed />}>      
          <Route path='allusers' element={<AllUsers />} />   
          <Route path='viewblogs' element={<ViewBlogs />} />
          <Route path='triplog' element={<TripLog />} />
          <Route path='addAtale' element={<AddATale />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
}

export default App;
