import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { CardAboutUsStyled } from './cardStyled'
import { ARROW_RIGHT } from '@/utils/IconConstant'

function CardAboutUs({
  title,
  onClick = () => { }
}) {
  return (
    <CardAboutUsStyled
      onClick={onClick}
    >
      <p
        style={{
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        {title}
      </p>
      <Icon
        src={ARROW_RIGHT}
        size={11}
      />
    </CardAboutUsStyled>
  )
}

CardAboutUs.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func
}

export default CardAboutUs
