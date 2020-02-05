import React from "react"
import { Link } from "gatsby"

function Navbar() { 
	return (<nav style={{float: `right`}}>
			   	<Link to="/">About</Link>&nbsp;
			   	<Link to="/skills">Skills</Link>&nbsp;
			   	<Link to="/contact">Contact</Link>
		    </nav>);
}

export default Navbar;