import React from 'react'
import PropTypes from 'prop-types'
import { NumberProgressBarParent, NumberProgressBarChild } from './numberProgressBarStyled'

function NumberProgressBar ({
  progress,
  total
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
      <NumberProgressBarParent>
        <NumberProgressBarChild
          progress={progress}
          total={total} />
      </NumberProgressBarParent>
      <p
        style={{
          color: '#606060'
        }}
      >
        {progress}/{total}
      </p>
    </div>
  )
}

NumberProgressBar.propTypes = {
  progress: PropTypes.number,
  total: PropTypes.number
}

export default NumberProgressBar
