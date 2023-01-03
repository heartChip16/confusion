import { useState } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className='container'>
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  )
}

export default App
