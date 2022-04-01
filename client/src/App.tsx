import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';

function App() {

  return (
    <div style={{padding: 100, background: '#1D3542'}}>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />

    </Routes>
    </div>
    
  );
}

export default App;
