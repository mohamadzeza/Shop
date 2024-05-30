import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Prudect from './components/Prudect'
import Prudects from './components/Prudects'
import Navbar from './layouts/Navbar'
import Search from './components/search'
import Carts from './components/carts'

function App() {

  return (
    
    <>
      <Navbar/> 
      <br />
      <br />
      <Search/>
      <h1>Explore</h1>
      <Prudects/>
      <h1>Best Siling</h1>
      <Carts/>
    </>
  )
}

export default App
