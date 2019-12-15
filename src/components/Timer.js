import React, { useState, useEffect, useRef } from 'react'
import CountDown from './CountDown'
import { Grid } from 'semantic-ui-react'


function Timer({hang, handleHangChange, seconds}){

  const [ secLeft, setSecLeft ] = useState(seconds)

  useEffect(() => {
    let intervalId = null;

    if(secLeft > 0){
      intervalId = setInterval(() => setSecLeft(c => c - 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [hang])

  if(secLeft == 0){
    setSecLeft(5)
    handleHangChange()
  }

  return(
    <CountDown
      hang={hang}
      secLeft={secLeft}
      />
  )
}

export default Timer
