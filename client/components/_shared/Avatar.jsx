import React from 'react'
import PropTypes from 'prop-types'
import {
  AvatarWrapper,
  AvatarContainer,
  AvatarImage,
  LevelImage
} from './avatarStyled'
import {
  KNIGHT,
  KNIGHT_LIEUTENANT,
  KNIGHT_CAPTAIN,
  KNIGHT_COMMANDER,
  CIVILLIAN
} from '@/utils/IconConstant'
import Icon from './Icon'

function Avatar ({
  avatarImage,
  status,
  name,
  level,
  width = 90,
  listArmy = false
}) {
  return (
    <>
      {
        listArmy && (
          <AvatarWrapper width={width}>
            <AvatarContainer>
              <AvatarImage avatarImage={avatarImage || '/images/person-default.png'} level={level}>
                <LevelImage>
                  {
                    level === 0 && (
                      <Icon
                        src={CIVILLIAN}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 1 && (
                      <Icon
                        src={KNIGHT}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 2 && (
                      <Icon
                        src={KNIGHT_LIEUTENANT}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 3 && (
                      <Icon
                        src={KNIGHT_CAPTAIN}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 4 && (
                      <Icon
                        src={KNIGHT_COMMANDER}
                        size={15}
                      />
                    )
                  }
                </LevelImage>
              </AvatarImage>
            </AvatarContainer>
            <p style={{
              width: `60px`,
              fontSize: '12px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>{name}</p>
            {
              level !== 0 && (
                <p style={{
                  color: '#606060',
                  width: '60px',
                  fontSize: '12px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>{status}</p>
              )
            }
            {
              level === 0 && (
                <p style={{
                  color: '#606060',
                  width: '60px',
                  fontSize: '12px'
                }} className='text-center'>{status}</p>
              )
            }
          </AvatarWrapper>
        )
      }
      {
        !listArmy && (
          <AvatarWrapper>
            <AvatarContainer>
              <AvatarImage avatarImage={avatarImage || '/images/person-default.png'} level={level}>
                <LevelImage>
                  {
                    level === 0 && (
                      <Icon
                        src={KNIGHT}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 1 && (
                      <Icon
                        src={KNIGHT_LIEUTENANT}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 2 && (
                      <Icon
                        src={KNIGHT_CAPTAIN}
                        size={15}
                      />
                    )
                  }
                  {
                    level === 3 && (
                      <Icon
                        src={KNIGHT_COMMANDER}
                        size={15}
                      />
                    )
                  }
                </LevelImage>
              </AvatarImage>
            </AvatarContainer>
            <p style={{
              fontSize: '12px'
            }}>{name}</p>

            <p style={{
              color: '#606060',
              fontSize: '12px'
            }}>{status}</p>
          </AvatarWrapper>
        )
      }
    </>

  )
}

Avatar.propTypes = {
  avatarImage: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.string,
  level: PropTypes.any,
  width: PropTypes.any,
  listArmy: PropTypes.bool
}

export default Avatar
