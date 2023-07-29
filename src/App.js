import React from 'react';
import './App.css';
import './QuoraApp.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import QuoraLandingPage from './components/quoralandpage/QuoraLandingPage';
import QuoraHolderBlog from './components/quroablog/QuoraHolderBlog';
import ProfileDropdown from './components/profile/ProfileDropdown';
import Signup from './components/quoralandpage/Signup';
import CreatePost from './components/quroablog/CreatePost';
import AddQuestion from './components/quroablog/AddQuestion';
import Create from './components/quroablog/Create'
import ProfileDetails from './components/profile/ProfileDetails';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="quoraLandingPage" element={<QuoraLandingPage/>} />
        <Route path="quoraHolderBlog" element={<QuoraHolderBlog/>}/>
        {/* <Route path="profileDropdown" element={<ProfileDropdown/>}/> */}
        <Route path="signup" element={<Signup/>}/>
        <Route path="createPost" element={<CreatePost/>}/>
        <Route path="addQuestion" element={<AddQuestion/>}/>
        <Route path="create" element={<Create/>}/>
        <Route path="profileDetails" element={<ProfileDetails/>}/>
      </Routes>    
    </BrowserRouter>
  );
  
}

export default App;
