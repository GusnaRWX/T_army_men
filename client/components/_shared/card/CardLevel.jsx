import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  CardLevelKnightStyled,
  CardLevelLieutenantStyled,
  CardLevelCaptainStyled,
  CardLevelCommanderStyled,
  ContentItemLevelStyled,
  CardLevelCivilStyled
} from './cardStyled'
import Icon from '../Icon'
import { ARROW_RIGHT } from '@/utils/IconConstant'
import HomeSheetComponent from '@/components/onboarding/home/HomeSheetComponent'

function CardLevel ({
  title,
  level,
  point,
  mentor,
  changePage,
  onClick,
  ...otherProps
}) {
  const [open, setOpen] = useState({
    rewards: false
  })
  const handleOpen = () => {
    setOpen({
      rewards: true
    })
  }

  const handleClose = () => {
    setOpen({
      rewards: false
    })
  }
  return (
    <>
      {
        level === 0 && (
          <CardLevelCivilStyled>
            <h4
              className='mb-1'
            >
              {title}
            </h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
              }}
            >
              <ContentItemLevelStyled
                onClick={handleOpen}
              >
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
                  >Reward & Treasure</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
              <ContentItemLevelStyled
                onClick={onClick}
              >
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
                  >Profile Chief</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
            </div>
          </CardLevelCivilStyled>
        )
      }
      {
        level === 1 && (
          <CardLevelKnightStyled>
            <h4
              className='mb-1'
            >{title}</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
              }}>
              <ContentItemLevelStyled
                onClick={handleOpen}
              >
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
                  >Reward & Treasure</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
              <ContentItemLevelStyled
                onClick={onClick}
              >
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
                  >Profile Chief</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>

            </div>
          </CardLevelKnightStyled>
        )
      }
      {
        level === 2 && (
          <CardLevelLieutenantStyled>
            <h4
              className='mb-1'
            >{title}</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
              }}>
              <ContentItemLevelStyled
                onClick={changePage}
              >
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
                  >Rewards & Treasure</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
              <ContentItemLevelStyled
                onClick={onClick}
              >
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
                  >Profile Chief</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
            </div>
          </CardLevelLieutenantStyled>
        )
      }
      {
        level === 3 && (
          <CardLevelCaptainStyled>
            <h4
              className='mb-1'
            >{title}</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2rem'
              }}>
              <ContentItemLevelStyled
                onClick={changePage}
              >
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
                  >Rewards & Treasure</p>
                  <p
                    style={{
                      fontSize: '12px',
                      color: '#4E3B95',
                      fontWeight: 'bold'
                    }}
                  >{point}</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
              <ContentItemLevelStyled
                onClick={onClick}
              >
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
                  >Profile Chief</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
            </div>
          </CardLevelCaptainStyled>
        )
      }
      {
        level === 4 && (
          <CardLevelCommanderStyled>
            <h4
              className='mb-1'
            >{title}</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
              }}>
              <ContentItemLevelStyled
                onClick={changePage}
              >
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
                  >Rewards & Treasure</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>
              <ContentItemLevelStyled
                onClick={onClick}
              >
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
                  >Profile Chief</p>
                </div>
                <Icon
                  src={ARROW_RIGHT}
                  size={11}
                />
              </ContentItemLevelStyled>

            </div>
          </CardLevelCommanderStyled>
        )
      }
      <HomeSheetComponent
        openSheet={open}
        handleCloseSheet={handleClose}
        level={level || ''}
      />
    </>
  )
}

CardLevel.propTypes = {
  title: PropTypes.string,
  level: PropTypes.any,
  point: PropTypes.any,
  mentor: PropTypes.string,
  changePage: PropTypes.func,
  onClick: PropTypes.func
}

export default CardLevel
