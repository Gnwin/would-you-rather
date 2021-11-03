import React from 'react';
import { Link } from 'react-router-dom'

import './QuestionsList.css'
import  Question from './Question';



class QuestionsList extends React.Component {
	render(){
		return(
			<div className="questions-list">
				<div className="header">
					<div className='header-tag borderright'><Link to='' className='header-link'>Unanswered Questions</Link></div>
					<div className='header-tag'><Link to='' className='header-link'>Answered Questions</Link></div>
				</div>
				
				<div className='unansweredquestion'>
					<Question/>
					<Question/>
					<Question/>
					<Question/>
				</div>

				{/* <div className='answeredquestion'>
					<Question/>
					<Question/>
					<Question/>
					<Question/>
				</div> */}

			</div>
		)
	}
}

export default QuestionsList