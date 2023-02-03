import React from 'react'

import './App.css';
import AllUserList from './components/AllUserList.js';
import Name from './components/Name.js';
import SignUpFormm from './components/SignUpForm';
import SumNumbers from './components/SumNumbers';

import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header  from './components/Header';
import TaskScreen from './components/TaskScreen';
import TestComponent from './components/CounterComponent';
import Photos from './components/Photos';
import higherOrderComponent from "./components/HOC"
import SampleRenderProps from './components/SampleRenderProps';

function App() {

  const TestApp = higherOrderComponent(() => {
    return <div> Test App</div>
  })
  return (
    <div>
      {/* <AllUserList/> */} 
      {/* <Name/> */}
      {/* <SumNumbers/> */}
      
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path={"/"} element={<h1> This is on Home page</h1>}/>
       <Route path={"/about"} element={<h1> This is on About Us page</h1>}/>
       <Route path={"/contact"} element={<h1> This is on Contact page</h1>}/>
        <Route path={"/sumnumber"} element={<SumNumbers/>}>
           <Route path={"sum"} element={<SumNumbers/>}/>
        </Route>
        <Route path={"/tesk"} element={<TaskScreen/> }/>
        <Route path={"/counter"} element={<TestComponent/> }/>
        <Route path={"/photos"} element={<Photos/>}/>
        <Route path={"/test"} element={<TestApp/>}/>
        <Route path={"/sample"} element={<SampleRenderProps/>}/>

      </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
