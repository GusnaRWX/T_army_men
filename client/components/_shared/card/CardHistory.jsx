import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { CardHistoryStyled } from './cardStyled'
import { ARROW_RIGHT } from '@/utils/IconConstant'

function CardHistory({
  title,
  subTitle,
  point
}) {
  return (
    <CardHistoryStyled>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}
      >
        <p
          style={{
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: '12px'
          }}
        >
          {subTitle}
        </p>
        <p
          style={{
            fontSize: '14px',
            color: '#4E3B95',
            fontWeight: 'bold'
          }}
        >
          {point}
        </p>
      </div>
      <Icon
        src={ARROW_RIGHT}
        size={12}
      />
    </CardHistoryStyled>
  )
}

CardHistory.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  point: PropTypes.string
}

export default CardHistory
