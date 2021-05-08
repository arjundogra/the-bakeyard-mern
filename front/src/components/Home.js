import React from 'react'

function Home(props) {
    return (
        <div className="home">
            <div className="banner">
            {props.isLoggedIn ? <p>Welcome </p> : "Not Autherized"}
            </div>
        </div>
    )
}

export default Home
