import React from "react"
import { Route } from 'react-router-dom'

import QuestionsList from './QuestionsList';
import AskNewQuestion from './AskNewQuestion';
import AnsweredQuestion from './AnsweredQuestion';

class Home extends React.Component {
  render(){
		return(
			
			<div>
				<QuestionsList/>
				<AskNewQuestion/>
				<AnsweredQuestion/>
				{/* <Navigation/> */}

				{/* <Route path='/dashboard'> */}
					{/* <AskNewQuestion/> */}
				{/* </Route>  */}

				{/* <Route path='/dashboard'> */}
					{/* <AnsweredQuestion/> */}
				{/* </Route>  */}
			</div>

		)
	}
}




export default Home