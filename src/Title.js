import './Title.css';
import React from 'react'

function Title() {
	return (
		<div className="Title">
			<div>
				<h1>SFPOPOS</h1>
				<div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
			</div>
		</div>
	)
}

export default Title 

// The JSX code above converts to the following: 

//function Title() {
//	return React.createElement("div", null, React.createElement("h1", null, "SFPOPOS"));
//  }