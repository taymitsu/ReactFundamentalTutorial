import React from 'react'
import './Title.css';
import House from './House'
import { NavLink } from 'react-router-dom'

function Title() {
	return (
		<div className="Title">
			<header>
				<House/>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

        <div>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/">List</NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about">About</NavLink>
        </div>

      </header>
    </div>
  )
}

export default Title 

// The JSX code above converts to the following: 

//function Title() {
//	return React.createElement("div", null, React.createElement("h1", null, "SFPOPOS"));
//  }