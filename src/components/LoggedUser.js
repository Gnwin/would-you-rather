import React from "react"

import '../stylesheets/LoggedUser.css'

class LoggedUser extends React.Component {
	render(){
		return(
			<div>
				<span>Hello, Tyler McGinnis</span>
				<span>Avatar</span>
			</div>
		)
	}
}

export default LoggedUser