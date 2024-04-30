import React from 'react'
import PropTypes from 'prop-types'
import { CardInfoStyled } from './cardStyled'
import Icon from '../Icon'

function CardInfo ({
  image,
  title,
  subTitle
}) {
  return (
    <CardInfoStyled>
      <Icon
        src={image}
        size={40}
      />
      {
        subTitle !== '' && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <p
              style={{
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >{title}</p>
            <p
              style={{
                fontSize: '12px',
                color: '#606060'
              }}
            >
              {subTitle}
            </p>
          </div>
        )
      }
      {
        subTitle === '' && (
          <p
            style={{
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >{title}</p>
        )
      }
    </CardInfoStyled>
  )
}

CardInfo.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default CardInfo
