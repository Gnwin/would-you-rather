import React from 'react'
import { Route } from 'react-router-dom'


import './App.css'
import QuestionsList from './QuestionsList';
import CreateNewQuestion from './CreateNewQuestion';
import AskNewQuestion from './AskNewQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import LeaderBoardList from './LeaderBoardList';


class App extends React.Component {
  render(){
    return(

      <div className='size'>
        <Route exact path='/'>
          <QuestionsList/>
          <CreateNewQuestion/>
          <AskNewQuestion/>
          <AnsweredQuestion/>
          <LeaderBoardList/>
        </Route>

        {/* <Route path='/newquestion'> */}
          {/* <NewQuestion/> */}
        {/* </Route>  */}


        {/* <Route path='/leaderboard'> */}
          {/* <LeaderBoard/> */}
        {/* </Route>  */}
      </div>

    )
  }
}





export default App;
