import React from 'react'
import { Route } from 'react-router-dom'


import '../stylesheets/App.css'
import Navigation from './Navigation'
import Home from './Home'
import CreateNewQuestion from './CreateNewQuestion';
import AskNewQuestion from './AskNewQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import LeaderBoardList from './LeaderBoardList';


class App extends React.Component {
  render(){
    return(


      <div>

        <Navigation/>

        <div className='size'>
          {/* <Route exact path='/'> */}
            {/* <QuestionsList/> */}
            {/* <CreateNewQuestion/> */}
            {/* <AskNewQuestion/> */}
            {/* <AnsweredQuestion/> */}
            {/* <LeaderBoardList/>  */}
          {/* </Route> */}

          {/* <Route path='/dashboard'> */}
            <Home/>
          {/* </Route>  */}


          {/* <Route path='/newquestion> */}
            {/* <LeaderBoard/> */}
          {/* </Route>  */}


          {/* <Route path='/leaderboard'> */}
            {/* <LeaderBoard/> */}
          {/* </Route>  */}
        </div>
      </div>

    )
  }
}





export default App;
