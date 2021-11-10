import React from "react";

import '../stylesheets/LeaderBoardList.css'
import Leadboard from './Leadboard'



class LeaderBoardList extends React.Component {
  render(){
		return(
			<div className='leaderboardlist'>
				<Leadboard/>
				<Leadboard/>
				<Leadboard/>
			</div>
		)
  }
}


export default LeaderBoardList