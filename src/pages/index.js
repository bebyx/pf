import React from "react"
import Navbar from "../components/navbar"
import Layout from "../components/layout"

function Index() {
	return (
		<>
			<Navbar />
			<Layout>
				<h1>About</h1>
				<p>Small step for a great start</p>
			</Layout>
		</>
		);
}

export default Index;
