import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home';
// import NewQuestion from './QuestionsList';
// import LeaderBoard from './QuestionsList';


class App extends React.Component {
  render(){
    return(

      <div>
        <Route exact path='/'>
          <Home/>
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
