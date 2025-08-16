// frontend/src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LandingPage from './views/Landingpage';
import LoggedOut from './views/LoggedOut';
import Login from './views/Login';
import SignUp from './views/Signin';
import Dashboard from './views/Dashboard';
import ArticleList from './views/Articles';
import Blogs from './views/BLogs';
import ArticlesWriteup from './views/ArticlesWriteup';
import BlogsWriteup from './views/BlogsWriteup';
import CounsellorProfile from './views/CounsellorProfile';
import AboutUs from './views/AboutUs';
import BookSession from './views/BookSession';
import Testimonies from './views/Testimonies';
import TestimoniesDetails from './views/TestimoniesDetails';
import { useAuth } from './auth/AuthContext';

function LogoutRoute() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
    navigate('/', { replace: true });
  }, [logout, navigate]);
  return null;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/articles-writeup" element={<ArticlesWriteup />} />
      <Route path="/blogs-writeup" element={<BlogsWriteup />} />
      <Route path="/counsellors-profile" element={<CounsellorProfile />} />
      <Route path="/talk-to-counsellor" element={<BookSession />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/testimonies" element={<Testimonies />} />
      <Route path="/testimonies-details" element={<TestimoniesDetails />} />
      <Route path="/logged-out" element={<LoggedOut />} />
      <Route path="/logout" element={<LogoutRoute />} />
    </Routes>
  );
};

export default App;
