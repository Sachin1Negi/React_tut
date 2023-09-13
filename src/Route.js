//In this js file we will learn about Routing , API calls 

//Learning Routing
// Before starting routing we have installed some required packages : npm i react-router-dom
// Refer to this link for current syntax of using react-router-dom and routing :
// https://www.w3schools.com/react/react_router.asp

import React from 'react'
//This is map of 'Component Name' vs 'Component Location'
import Home from './Components/Home'
import Info from './Components/Info'
import Contacts from './Components/Contacts'
import Nopage from './Components/Nopage'
import Layout from './Components/Layout'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function Route_Api() {
    return (
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }



