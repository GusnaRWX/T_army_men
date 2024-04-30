import React from 'react'
import PropTypes from 'prop-types'
import PercentProgressBar from '@/components/_shared/PercentProgressBar'
import NumberProgressBar from '@/components/_shared/NumberProgressBar'
import { CardMissionStyled } from './cardStyled'

function CardMission ({
  title,
  subTitle,
  type,
  percentage,
  total,
  progress
}) {
  return (
    <CardMissionStyled>
      <p
        style={{
          fontSize: '14px'
        }}
      >{title}</p>
      <p
        style={{
          fontSize: '12px',
          color: '#606060'
        }}
      >{subTitle}</p>
      {
        type === 'percent' && (
          <PercentProgressBar
            percent={percentage}
            target={total}
          />
        )
      }
      {
        type === 'fixed' && (
          <NumberProgressBar
            progress={progress}
            total={total}
          />
        )
      }
    </CardMissionStyled>
  )
}

CardMission.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  type: PropTypes.string,
  percentage: PropTypes.number,
  total: PropTypes.number,
  progress: PropTypes.number
}

export default CardMission
