import React, { Fragment } from 'react'
import { Statistic } from 'semantic-ui-react'
import { formatTime } from '../NumberUtils'

const CountDown = ({ hang, secLeft }) => (
    <Fragment>
      <Statistic color={hang ? 'green' : 'red'} size='large'>
        <Statistic.Value>{hang ? "HANG" : "REST"}</Statistic.Value>
      </Statistic>
      <Statistic color={hang ? 'green' : 'red'} size='large'>
        <Statistic.Value>{formatTime(secLeft)}</Statistic.Value>
      </Statistic>
    </Fragment>
)

export default CountDown
