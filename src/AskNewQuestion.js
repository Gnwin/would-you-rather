import React from "react";


import './AskNewQuestion.css'

class AskNewQuestion extends React.Component {
  render(){
		return (
			<div className='padsp'>
			<p className='userrp borderp'>Tyler McGinnis asks:</p>
				<div className="question-infoopp">
					<div className="question-itemmppp avatar">Avatar</div>
					<div className='spacerrp'>
						<p className='wyrqqp'>Would you Rather...</p>
						<div className='chbox'>
							<input className='q-input' type='checkbox'/>
							<span className='inputcontent'>be a frontend engineer</span>
						</div>
						<div className='chbox'>
							<input className='q-input' type='checkbox'/>
							<span className='inputcontent'>be a backend engineer</span>
						</div>
						<input className='submitbuttonnp' type='submit'/>
					</div>
				</div>

			</div>

		)
	}
}


export default AskNewQuestion