import React from 'react'

function Home(props) {
    return (
        <div className="home">
            <div className="banner">
            {props.user ? <p>Welcome {props.user.name}</p> : "Not Autherized"}
            </div>
        </div>
    )
}

export default Home
