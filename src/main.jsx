import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Examples from './Components/Examples.jsx'
import Profile from './Components/Profile.jsx'
import Settings from './Components/Settings.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='examples' element={<Examples/>}/>
    <Route path='profile' element={<Profile/>}/>
    <Route path='settings' element={<Settings/>}/>
    </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
