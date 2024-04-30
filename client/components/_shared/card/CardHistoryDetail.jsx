import React from 'react'
import PropTypes from 'prop-types'
import { HistoryContentDetail, HistoryHeadDetail } from './cardStyled'
import { ARROW_RIGHT } from '@/utils/IconConstant'
import Icon from '../Icon'
import Image from 'next/image'

function CardHistoryDetail ({
  title,
  point,
  image
}) {
  return (
    <>
      <HistoryHeadDetail>
        <p
          style={{
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {title}
        </p>
        <Image
          src={image}
          alt='picture'
          width={120}
          height={50}
        />
      </HistoryHeadDetail>
      <HistoryContentDetail>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <p
            style={{
              fontSize: '12px'
            }}
          >
            Total Reward
          </p>
          <p
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#4E3B95'
            }}
          >
            {point}
          </p>
        </div>
        <Icon
          src={ARROW_RIGHT}
          size={11}
        />
      </HistoryContentDetail>
    </>
  )
}

CardHistoryDetail.propTypes = {
  title: PropTypes.string,
  point: PropTypes.string,
  image: PropTypes.string
}

export default CardHistoryDetail
