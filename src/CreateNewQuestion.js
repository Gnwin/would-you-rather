import React from 'react'

import './CreateNewQuestion.css'


class CreateNewQuestion extends React.Component {
	render(){
		return(
			<div className='pads'>
				<p className='userr border'>Create New Question</p>
				<div className="question-infoo">
					<div className="question-itemm question">
						<div className='spacerr'>
							<p className='wyr'>Complete the Question</p>
							<p className='wyrq'>Would you Rather...</p>
							<input className='wyr-input'/>
							<div className='or'>
								<div className='b-top'><hr className='hr'/></div>
								<div className='orr'><p className='o'>OR</p></div>
								<div className='b-top'><hr className='hr'/></div>
							
							</div>
							<input className='wyr-input'/>
							<input className='submitbuttonn' type='submit'/>
							<hr></hr>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default CreateNewQuestion