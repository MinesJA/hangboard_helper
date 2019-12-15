import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import HangBoardSession from './components/HangBoardSession'
import HangForm from './components/HangForm'
import { Grid, Navbar } from 'semantic-ui-react'

class App extends Component {


  // Main Page
  // Pick from hang workouts
  // Create new workout
  

  render(){
    return (
      <div className="App">
        <Navbar>
          <Route path="/" exact component={HomeContainer} />
          <Route exact path="/tools/new" component={AddToolContainer} />
          <Route exact path="/tools" component={SavedTools} />
          <HangForm />
          <HangBoardSession />
        </Navbar>
      </div>
    )
  }
}

export default App;
