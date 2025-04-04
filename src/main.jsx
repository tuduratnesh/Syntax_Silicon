import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Examples from './Components/Examples.jsx'
import Profile from './Components/Profile.jsx'
import Settings from './Components/Settings.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Verilog_code from './Components/Verilog_code.jsx'
import Testbench from './Components/Testbench.jsx'
import Time_behaviour from './Components/Time_behaviour.jsx'
import Schematic from './Components/Schematic.jsx'
import Graph from './Components/Graph.jsx'
import Rightside from './Components/Rightside.jsx'
import First from './Components/First.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<First/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='examples' element={<Examples/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='verilog_code' element={<Verilog_code/>}/>
    <Route path='testbench' element={<Testbench/>}/>
    <Route path='time_behaviour' element={<Time_behaviour/>}/>
    <Route path='schematic' element={<Schematic/>}/>
    <Route path='graph' element={<Graph/>}/>
    <Route path='rightside' element={<Rightside/>}/>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
