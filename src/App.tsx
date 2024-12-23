import './App.css'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Store from './Pages/Store'
import Navbar from './Components/Navbar'
import { ShoppingCartProvider } from './Context/ShoppingCartContext'

function App() {
  
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <div className='p-10' >
        <Routes>
          <Route path='/' element={<Home/>}   />
          <Route path='/About' element={ <About/>} />
          <Route path='/Store' element={<Store/>} />
        </Routes> 
      </div>
    </ShoppingCartProvider>
  )
}

export default App
