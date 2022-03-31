import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {

  return (
    <Routes> 
      <Route path="/" element={<HomePage />} />
      <Route path="/post" element={<PostPage />} />

    </Routes>
  );
}

export default App;
