import React from 'react'
import { Icon, Button } from 'semantic-ui-react'

const StartButton = ( { handleStartStop } ) => (
  <Button icon='play' size='massive' onClick={handleStartStop} basic/>
)

export default StartButton
