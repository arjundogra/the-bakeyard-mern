import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
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
                    <Link to="/login">{(this.props.isLoggedIn) ? "" : "Log In"}</Link>
                    <div>{this.props.isLoggedIn ? "Log Out" : ""}</div>
                    <div>Cart</div>
                </div>
            </div>
        )
    }
}

export default Navbar
