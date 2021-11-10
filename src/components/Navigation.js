import React from "react";
import { Link } from 'react-router-dom'

import '../stylesheets/Navigation.css';
import LoggedUser from "./LoggedUser";


class Navigation extends React.Component{
	state = {
		navList : ['Home', 'New Question', 'LeaderBoard', 'Avatar', 'Logout']
	}

	render(){
		return(
			<nav className="nav-element">
				<ul className="nav-list">
					{this.state.navList.map((navItem)=>(
						<li className="nav-item"><Link to='' className="nav-link">{navItem === 'Avatar' ? <LoggedUser/> : navItem }</Link></li>
					))}
				</ul>
			</nav>
		)
	}
}

export default Navigation