import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './myHooks/Redux';
import HomePage from './pages/HomePage';
import LoadPage from './pages/LoadPage';
import PostPage from './pages/PostPage';
import UserPage from './pages/UserPage';
import { fetchAllUsers } from './store/action/User_actions';


function App() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  return (
    <div style={{padding: 100, background: '#1D3542', height: '100%', minHeight: '100vh'}}>
      <Routes> 
          {/* <Route path="/" element={<LoadPage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/userPage/:id" element={<UserPage />} />
          <Route path="/post" element={<PostPage />} />

      </Routes>
    </div>
    
  );
}

export default App;
