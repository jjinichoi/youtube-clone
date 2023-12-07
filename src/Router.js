import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import VideoDetail from './pages/VideoDetail/VideoDetail';

import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/watch/:videoId" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
