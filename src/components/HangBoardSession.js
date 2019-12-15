import React, { Component, useState } from 'react';
import { sessionStyle } from '../styles'
import Timer from './Timer'
import StartButton from './StartButton'
import TimerCounts from './TimerCounts'
import HangForm from './HangForm'
import { Grid } from 'semantic-ui-react'

function HangBoardSession(){

  const [ totalSets, setTotalSets ] = useState(5);
  const [ totalReps, setTotalReps ] = useState(5);

  const [ repsRemaining, setRepsRemaining ] = useState(totalReps);
  const [ setsRemaining, setSetsRemaining ] = useState(totalSets);

  const [ hang, setHang ] = useState(false);

  const [ started, setStarted ] = useState(false);

  const handleStartStop = () => {
    setHang(!hang)
    setStarted(!started)
  }

  const handHangChange = () => {
    // Decrement totalReps

    console.log("RepsRemaining: " + repsRemaining)
    console.log("SetsRemaining: " + setsRemaining)

    if(repsRemaining > 0 && hang){

      setRepsRemaining(repsRemaining - 1);

    } else if (repsRemaining == 1){
      // Set the Set Rest

      setSetsRemaining(setsRemaining - 1);
      setRepsRemaining(totalReps);
    }

    setHang(!hang)
  }

  return (
    <Grid textAlign='center' celled style={sessionStyle} columns='equal'>
      <Grid.Row>
      {started
        ? <Timer
            hang={hang}
            handleHangChange={handHangChange}
            seconds={5}
           />
        : <div> Hello </div>}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TimerCounts
            remaining={repsRemaining}
            total={totalReps}
            type={"REPS"} />
        </Grid.Column>

        <Grid.Column>
          <TimerCounts
            remaining={setsRemaining}
            total={totalSets}
            type={"SETS"} />
        </Grid.Column>

        <Grid.Column>
          <StartButton handleStartStop={handleStartStop} />
        </Grid.Column>

      </Grid.Row>
    </Grid>
  )
}

export default HangBoardSession;
