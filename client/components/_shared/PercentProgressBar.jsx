import React from 'react'
import PropTypes from 'prop-types'
import { PercentProgressBarChild, PercentProgressBarParent } from './percentProgressBarStyled'

function PercentProgressBar ({
  percent,
  target
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '6px'
      }}
    >
      <PercentProgressBarParent>
        <PercentProgressBarChild percent={percent} target={target} />
      </PercentProgressBarParent>
      <p
        style={{
          color: '#606060'
        }}
      >{percent}%</p>
    </div>
  )
}

PercentProgressBar.propTypes = {
  percent: PropTypes.number,
  target: PropTypes.number
}

export default PercentProgressBar
