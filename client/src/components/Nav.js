import React from 'react';
import { Link } from 'react-router-dom';



export default function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }  

  return (
    <div className="nav">
  	  <header className='header'>
        <h1>ONE PIECE</h1>
        <p>Summary of every Chapter</p>
	    </header>
    	<nav>
        <ul>
          <Link style={navStyle} to="/" >
          <li>Home</li>
          </Link>
          <Link style={navStyle}to="/chapters" >
        	<li>Chapters</li>
          </Link>
          <Link style={navStyle}to="/covers" >
        	<li>Covers</li>
          </Link>
      	</ul>
    	</nav>    
  </div>
  )

}
