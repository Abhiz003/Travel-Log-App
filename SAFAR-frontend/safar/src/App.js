import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Feed from './Components/Feed';
import AllUsers from './Components/AllUsers'
import ViewBlogs from './Components/ViewBlogs'
import DisplayBlog from './Components/DisplayBlog'
import TripLog from './Components/TripLog'
import AddATale from './Components/AddATale'
import ShareJourney from './Components/ShareJourney';

import Login from './AuthPages/Login'
import SignUp from './AuthPages/SignUp'
import IntroPage from './Components/IntroPage';
import Card1 from './Components/Card1';
import AddBlog from './Components/AddBlog';
// import Footer from './Components/Footer';

function App() {

  return (
    <>
      <div className="main-screen">

        <Navbar />
        <Routes>
          <Route path='/' element={<IntroPage />} />
          <Route path='/intro' element={<IntroPage/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/feed/allusers' element={<AllUsers />} />
          <Route path='viewblogs' element={<ViewBlogs />} />

          <Route path='/displayblog' element={<DisplayBlog />} />
          <Route path='/triplog' element={<TripLog />} />
          <Route path='/addAtale' element={<AddATale />} />
          <Route path='/addblog' element={<AddBlog/>} />
          <Route path='/shareJourney' element={<ShareJourney />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />




          <Route path="/card1" element={<Card1/>} />
        </Routes>

        {/* <Footer/>  */}
      </div>
    </>
  );
}

export default App;
