import React from 'react'
import PropTypes from 'prop-types'
import { CardStyled } from './cardStyled'

function Card ({
  children
}) {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
