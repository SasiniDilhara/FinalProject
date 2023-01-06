import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './components/pages/Home/Home';
import Addbook from './components/pages/Addbook/Addbook';
import Register from './components/pages/Register/Register';
import Password_1 from './components/pages/Password_1/Password_1';
import Password_2 from './components/pages/Password_2/Password_2';
import Password_3 from './components/pages/Password_3/Password_3';
import Password_4 from './components/pages/Password_4/Password_4';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home/>}>
          </Route>
          
          <Route path='/Addbook' element={<Addbook/>}>
          </Route>
          
          <Route path="/Register" element={<Register/>}>
          </Route>

          <Route path="/Password_1" element={ <Password_1/>}>
          </Route>

          <Route path="/Password_2" element={ <Password_2/>}>
          </Route>

          <Route path="/Password_3" element={ <Password_3/>}>
          </Route>

          <Route path="/Password_4" element={ <Password_4/>}>
          </Route>
        
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
