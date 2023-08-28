import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/LoginScreen.jsx'
import ScanScreen from './components/ScanScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginScreen/>}/>
    <Route path='/home' element={<ScanScreen/>}/>
  </Routes>
  </BrowserRouter>,
)
