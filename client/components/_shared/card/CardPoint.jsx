import React from 'react'
import PropTypes from 'prop-types'
import {
  AvatarContainer,
  AvatarImage,
  LevelImage
} from '../avatarStyled'
import {
  KNIGHT,
  KNIGHT_LIEUTENANT,
  KNIGHT_CAPTAIN,
  KNIGHT_COMMANDER,
  CIVILLIAN
} from '@/utils/IconConstant'
import Icon from '../Icon'
import { CardPointStyled, CardPointContentStyled } from './cardStyled'

function CardPoint ({
  level,
  avatarImage,
  name,
  levelId,
  point,
  bonusIdr
}) {
  return (
    <CardPointStyled>
      <CardPointContentStyled>
        <AvatarContainer>
          <AvatarImage avatarImage={avatarImage} level={levelId}>
            <LevelImage>
              {
                levelId === 0 && (
                  <Icon
                    src={CIVILLIAN}
                    size={15}
                  />
                )
              }
              {
                levelId === 1 && (
                  <Icon
                    src={KNIGHT}
                    size={15}
                  />
                )
              }
              {
                levelId === 2 && (
                  <Icon
                    src={KNIGHT_LIEUTENANT}
                    size={15}
                  />
                )
              }
              {
                levelId === 3 && (
                  <Icon
                    src={KNIGHT_CAPTAIN}
                    size={15}
                  />
                )
              }
              {
                levelId === 4 && (
                  <Icon
                    src={KNIGHT_COMMANDER}
                    size={15}
                  />
                )
              }
            </LevelImage>
          </AvatarImage>
        </AvatarContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            {name}
          </p>
          {
            levelId === 0 && (
              <p
                style={{
                  color: '#606060',
                  fontSize: '16px'
                }}
              >
                Civilian
              </p>
            )
          }
          {
            levelId === 1 && (
              <p
                style={{
                  color: '#606060',
                  fontSize: '16px'
                }}
              >
                Knight
              </p>
            )
          }
          {
            levelId === 2 && (
              <p
                style={{
                  color: '#606060',
                  fontSize: '16px'
                }}
              >
                Knight Lieutenant
              </p>
            )
          }
          {
            levelId === 3 && (
              <p
                style={{
                  color: '#606060',
                  fontSize: '16px'
                }}
              >
                Knight Captain
              </p>
            )
          }
          {
            levelId === 4 && (
              <p
                style={{
                  color: '#606060',
                  fontSize: '16px'
                }}
              >
                Knight Commander
              </p>
            )
          }
        </div>
      </CardPointContentStyled>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <p
          style={{
            fontSize: '16px',
            color: '#4E3B95',
            fontWeight: 'bold'
          }}
        >
          + {point} Poin
        </p>
        <p
          style={{
            fontSize: '16px',
            color: '#4E3B95'
          }}
        >
          {bonusIdr}
        </p>
      </div>
    </CardPointStyled>
  )
}

CardPoint.propTypes = {
  level: PropTypes.string,
  name: PropTypes.string,
  avatarImage: PropTypes.string,
  point: PropTypes.any,
  levelId: PropTypes.any,
  bonusIdr: PropTypes.any
}

export default CardPoint
