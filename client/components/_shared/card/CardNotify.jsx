import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { CardNotifyStyled } from './cardStyled'
import { DANGER_FILL } from '@/utils/IconConstant'

function CardNotify ({
  description
}) {
  return (
    <CardNotifyStyled>
      <Icon
        src={DANGER_FILL}
        size={20}
      />
      <p
        style={{
          fontSize: '12px',
          fontWeight: 'bold'
        }}
      >
        {description}
      </p>
    </CardNotifyStyled>
  )
}

CardNotify.propTypes = {
  description: PropTypes.string
}

export default CardNotify
