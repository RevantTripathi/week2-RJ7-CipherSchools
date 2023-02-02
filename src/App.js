import React from 'react'

import './App.css';
import AllUserList from './components/AllUserList.js';
import Name from './components/Name.js';
import SignUpFormm from './components/SignUpForm';
import SumNumbers from './components/SumNumbers';

import {BrowserRouter, Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
      {/* <AllUserList/> */}
      {/* <Name/> */}
      {/* <SumNumbers/> */}
      
      <BrowserRouter>
      <Routes>
       <Route path={"/"} element={<h1> This is on Home page</h1>}/>
       <Route path={"/about"} element={<h1> This is on About Us page</h1>}/>
       <Route path={"/contact"} element={<h1> This is on Contact page</h1>}/>
        <Route path={"/sumnumber"} element={<SumNumbers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
