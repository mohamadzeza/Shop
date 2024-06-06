import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Buy from './components/buy.jsx'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import MainBuy from './components/main-buy.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/Prudect' element={<MainBuy/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
