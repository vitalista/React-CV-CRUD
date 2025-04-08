import React from 'react';
import Login from './Login';
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
     <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/cv/list' element={<Home/>}/>
            <Route path='/cv/add' element={<Home/>}/>
        </Routes>
     </Router>
  );
}

export default App;
