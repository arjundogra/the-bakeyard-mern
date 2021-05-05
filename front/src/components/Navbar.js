import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         token: false
    //     }
    // }
    state = {
        token: null
    }
    componentDidMount(){
        const tok = localStorage.getItem('token')
        if (tok){
            this.setState({token: tok},()=>console.log(this.state.token))
        }
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
                    <Link to="/login">{(this.state.token) ? "" : "Log In"}</Link>
                    <div>{this.state.token ? "Log Out" : ""}</div>
                    <div>Cart</div>
                </div>
            </div>
        )
    }
}

export default Navbar
