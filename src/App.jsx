import { useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/Menu'
import './App.css'

function App() {

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  )
}

export default App
