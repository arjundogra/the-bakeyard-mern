import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarLeft">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link> 
            </div>
            <div className="navbarCenter">
                <Link to="/"><img src="bakeyardLogo.jpg"/></Link>
            </div>
            <div className="navbarRight">
                <Link to="/login">Login</Link>
                <div>Logout</div>
                <div>Cart</div>
            </div>
        </div>
    )
}

export default Navbar
