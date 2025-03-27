import React from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
     <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
     </Router>
  );
}

export default App;
