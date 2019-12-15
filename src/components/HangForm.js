import React, { Component  } from 'react';
import { Button, Form } from 'semantic-ui-react'


class SessionInput extends Component {

  state = {
    numReps: 0,
    hangTime: 0,  
    restTime: 0,
    numSets: 0,
    restTimeSets: 0,
    started: false
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({[name]: value}, () => console.log(this.state))
  }

  handleClick = () => {

  }




  render(){
    const { numReps, hangTime, restTime, numSets, restTimeSets, started } = this.state

    return (
      <Form>
        <Form.Group>
          <Form.Input
            id='form-input-control-num-reps'
            label='Number of Reps'
            type='number'
            placeholder='Number of Reps'
            value={this.state.numReps}
            name="numReps"
            onChange={this.handleChange}
          />
          <Form.Input
            id='form-input-control-hang-time'
            label='Hang Time'
            type='number'
            placeholder='Seconds'
            value={hangTime}
            name="hangTime"
            onChange={this.handleChange}
          />
          <Form.Input
            id='form-input-control-rest-time'
            label='Rest Time'
            type='number'
            placeholder='Seconds'
            value={restTime}
            name="restTime"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            id='form-input-control-num-sets'
            label='Number of Sets'
            type='number'
            placeholder='Number of Sets'
            value={numSets}
            name="numSets"
            onChange={this.handleChange}
          />
          <Form.Input
            id='form-input-control-time-set-rest'
            label='Time between sets'
            type='number'
            placeholder='Seconds'
            value={restTimeSets}
            name="restTimeSets"
            onChange={this.handleChange}
          />
        </Form.Group>
        {
          !started
            ? <Button positive onClick={this.handleClick}>START</Button>
            : <Button negative onClick={this.handleClick}>STOP</Button>
        }
      </Form>
    )
  }
}

export default SessionInput;
