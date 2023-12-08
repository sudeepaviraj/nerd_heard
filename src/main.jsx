import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginScreen from './components/LoginScreen.jsx'
import ScanScreen from './components/ScanScreen.jsx'
import LectureScreen from './components/LectureScreen.jsx'
import VerificationScreen from './components/VerificationScreen.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LoginScreen/>}/>
    <Route path='/home' element={<ScanScreen/>}/>
    <Route path='/verify' element={<VerificationScreen/>}/>
    <Route path='/admin' element={<LectureScreen/>}/>
  </Routes>
  </BrowserRouter>,
)
