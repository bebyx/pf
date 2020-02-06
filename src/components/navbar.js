import React from "react"
import { Link } from "gatsby"



function isActive( {isCurrent} ) {
	return isCurrent ? {className: "active"} : null
}

function ListLink(props) {
	return (
	  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
	    <Link to={props.to} getProps={isActive}>{props.children}</Link>
	  </li>
	)
}

function Navbar() { 
	return (
		<header>
			<nav style={{ display: `flex`}}>
				<ul style={{ listStyle: `none`, marginLeft: `auto`}}>
				   	<ListLink to="/">About</ListLink>
				   	<ListLink to="/skills">Skills</ListLink>
				   	<ListLink to="/contact">Contact</ListLink>
			   	</ul>
		    </nav>
		</header>
	);
}

export default Navbar;