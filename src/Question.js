import React from 'react';
// import Link from "react-router-dom";


import './Question.css'


class Question extends React.Component {
    render(){
      return(
				<div className='pad'>
					<p className='border'>Sarah Edo Asks:</p>
					<div className="question-info">
						<div className="question-item avatar">Avatar</div>
						<div className="question-item question">
							<div className='spacer'>
								<p>Would you rather</p>
								<p>...be telekinetic...</p>
								<button>View poll</button>
							</div>
						</div>
					</div>
				</div>
			)
    }
}


export default Question