import React from "react";



class Navigation extends React.Component{
	render(){
		return(
			<nav>
				<ul>
					<li>Home</li>
					<li>New Question</li>
					<li>Leaderboard</li>
					<li>
						<span>Hello, Tyler McGinnis</span>
						<span>Avatar</span>
					</li>
					<li>Logout</li>
				</ul>
			</nav>
		)
	}
}

export default Navigation