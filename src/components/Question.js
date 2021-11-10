import React from 'react';
// import Link from "react-router-dom";


import '../stylesheets/Question.css'


class Question extends React.Component {
    render(){
      return(
				<div className='pad'>
					<p className='user border'>Sarah Edo Asks:</p>
					<div className="question-info">
						<div className="question-item avatar">Avatar</div>
						<div className="question-item question">
							<div className='spacer'>
								<p className='wyr'>Would you rather</p>
								<p className='wyrq'>...be telekinetic...</p>
								<button className='pollbutton'>View poll</button>
							</div>
						</div>
					</div>
				</div>
			)
    }
}


export default Question