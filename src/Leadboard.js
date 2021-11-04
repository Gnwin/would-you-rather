import  React from "react";

import './Leadboard.css'

class Leadboard extends React.Component {
  render(){
		return (
			<div className='padss'>
			<div className="question-infoss">
				<div className="question-itemss avatarss">Avatar</div>
				<div className="question-itemss questionss">
					<div className='spacerss'>
						<p className='wyrss'>Sarah Edo</p>
						<div className='wyrqss'>
							<div className='answeredquestions'>
								<p>Answered questions<span className='aq'>7</span></p>
							</div>
							<div className='createdquestions'>
								<p>Created questions<span className='cq'>3</span></p>
							</div>
						</div>
					</div>
				</div>
				<div className='board'>
					<div className='sp'>
						<p className='lead'>Score</p>
						<p className='score'><span className='bc'>10</span></p>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Leadboard