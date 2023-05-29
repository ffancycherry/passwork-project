//маршрутизация 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main-page';

function App() {
  return (
    <Main />
   /* <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/main-page' element={<Main />} /> 
          <Route path='/recovary' />
        </Routes>
    </Router>*/
  );
}

export default App;
