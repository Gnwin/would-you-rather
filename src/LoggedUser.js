import React from "react"
import Link from 'react-router-dom'



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