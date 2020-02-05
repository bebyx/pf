import React from "react"

function Layout( {children} ) {
	return (
		<div style={{ margin: `0.1rem auto`, maxWidth: 1250, padding: `0 1rem` }}>
			{children}
		</div>
		);
}

export default Layout;
