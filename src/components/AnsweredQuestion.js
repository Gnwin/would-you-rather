import React from "react"


import '../stylesheets/AnsweredQuestion.css'


class AnsweredQuestion extends React.Component{
	render(){
		return (
			<div className='padsp'>
			<p className='userrp borderp'>Asked by Tyler McGinnis:</p>
				<div className="question-infoopp">
					<div className="question-itemmppp avatar">Avatar</div>
					<div className='spacerrp'>
						<p className='wyrqqp'>Result:</p>

						<div className='chbox'>
							<p>Would you be a frontend engineer</p>
							<input className='q-input' type='checkbox'/>
							<span className='inputcontent'>be a frontend engineer</span>
							<p>1 out of 2 votes</p>
						</div>

						<div className='chbox'>
							<p>Would you be a backend engineer</p>
							<input className='q-input' type='checkbox'/>
							<span className='inputcontent'>be a backend engineer</span>
							<p>1 out of 2 votes</p>
						</div>

						<input className='submitbuttonnp' type='submit'/>
					</div>
				</div>

			</div>
		)
	}
}




export default AnsweredQuestion