import React from 'react'
import Home from '../Page/Home'
import About from '../Page/About'
import Service from '../Page/Service'
import {Routes,BrowserRouter,Route,Link} from "react-router-dom"

const App = () => {
  return (

    <BrowserRouter>
    <nav className='Nav'>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/service"> Service</Link>
    </nav>

    <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/service' element={<Service/>}/>

    </Routes>
    
    
    
    
    </BrowserRouter>
    // <div>
    //     <Home/>
    //     <About/>
    //     <Service/>
    // </div>
  )
}

export default App