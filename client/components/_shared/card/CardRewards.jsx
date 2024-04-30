import React from 'react'
import PropTypes from 'prop-types'
import { CardRewardStyled } from './cardStyled'
import { THUMB_UP_STAR, TREASURE_BOX } from '@/utils/IconConstant'
import Icon from '../Icon'

function CardRewards ({
  name,
  title,
  poin
}) {
  return (
    <CardRewardStyled style={{ backgroundColor: name === 'rewards' ? '#ECEBF3' : '#FAEBEA' }}>
      <Icon
        size={30}
        src={name === 'rewards' ? THUMB_UP_STAR : TREASURE_BOX}
      />
      <p style={{
        fontSize: '12px',
        fontWeight: 700,
        margin: '4px 0'
      }}>
        {title}
      </p>
      <p style={{
        fontSize: '18px',
        fontWeight: 700,
        color: '#4E3B95'
      }}>
        {poin}
      </p>
    </CardRewardStyled>
  )
}

CardRewards.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  poin: PropTypes.string
}

export default CardRewards
