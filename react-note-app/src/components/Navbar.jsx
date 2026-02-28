import React from 'react'
import './Navbar.css'
import { FaPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = ({ searchtext, handleSearch }) => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid ">
            <Link to='/' className="navbar-brand">NOTIE</Link>
            <form className="d-flex" role="search" onSubmit={(e) => { e.preventDefault(); handleSearch(searchtext); }}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchtext} onChange={(e) => handleSearch(e.target.value)} />
              <button className="btn btn-outline-success" type="submit">Search</button>
             
            </form>

            <Link to='/add'><button type="button" className='btn btn-outline-primary'><FaPlusSquare /> Add Notes</button></Link>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
