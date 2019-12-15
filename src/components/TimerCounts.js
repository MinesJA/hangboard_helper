import React from 'react'
import { Statistic } from 'semantic-ui-react'


const TimerCounts = ({remaining, total, type}) => {

  return (
    <Statistic>
      <Statistic.Value>{remaining} / {total}</Statistic.Value>
      <Statistic.Label>{type}</Statistic.Label>
    </Statistic>
  )
}

export default TimerCounts
