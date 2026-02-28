import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Addpage from './pages/addpage'
import Editpage from './pages/Editpage'
import Mainnote from './pages/Mainnote'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
const App = () => {
  const [searchtext, setsearchtext] = useState('');

  const handleSearch = (val) => {
    setsearchtext(val);
    
  }

  return (
    <div>
      <Router>
        <Navbar searchtext={searchtext} handleSearch={handleSearch} />
        <Routes>
          <Route path='/' element={<Home searchtext={searchtext} />} />
          <Route path='/add' element={<Addpage />} />
          <Route path='/edit/:id' element={<Editpage />} />
          <Route path='/note/:id' element={<Mainnote />} />
          <Route path='*' element={<h1 className='text-center mt-5'>404 Page Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
