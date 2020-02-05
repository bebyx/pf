import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

function Index() {
	return (
		<div>
			<Header pageTitle="About"/>
			<p>Small step for a great start</p>
			<Link to="/skills">Skills</Link>
		</div>
		);
}

export default Index;
