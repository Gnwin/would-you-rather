import React from 'react'
import { Route } from 'react-router-dom'
// import './App.css';

// import Login from './Login'
import Navigation from './Navigation'






class App extends React.Component {
  render(){
    return(

      <div>
        {/* <Route exact path='/'> */}
            {/* <Login/> */}
            <Navigation/>
        {/* </Route> */}


      </div>

    )
  }
}





export default App;
