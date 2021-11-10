import React from 'react'
import { Route } from 'react-router-dom'

import './stylesheets/Login.css'

class Login extends React.Component {
  render(){
    return(
			<div className="login">
        <h1>Login</h1>
				<form method="post">
					<input type="text" name="u" placeholder="Username" required="required" />
					<input type="password" name="p" placeholder="Password" required="required" />
					<button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
        </form>
      </div>
		)
	}
}


export default Login