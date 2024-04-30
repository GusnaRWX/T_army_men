import React from 'react'
import PropTypes from 'prop-types'
import { CardListArmyStyled, CardListArmyItemStyled } from './cardStyled'
import Icon from '../Icon'
import Avatar from '../Avatar'
import { ARROW_RIGHT } from '@/utils/IconConstant'

function CardListArmy ({
  image,
  level,
  name,
  status,
  onClick
}) {
  return (
    <CardListArmyStyled
      onClick={onClick}
    >
      <CardListArmyItemStyled>
        <Avatar
          avatarImage={image}
          level={level}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: 'bold'
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontSize: '12px',
              color: '#606060'
            }}
          >
            {status}
          </p>
        </div>
      </CardListArmyItemStyled>
      <Icon
        src={ARROW_RIGHT}
        size={12}
      />
    </CardListArmyStyled>
  )
}

CardListArmy.propTypes = {
  image: PropTypes.string,
  level: PropTypes.any,
  name: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func
}

export default CardListArmy
