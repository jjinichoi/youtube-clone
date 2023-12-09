import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList/VideoList';
import Nav from './components/Nav/Nav';
import VideoDetail from './components/VideoDetail/VideoDetail';

import './index.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/watch/:videoId" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
