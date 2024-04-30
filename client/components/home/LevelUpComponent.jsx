import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../_shared/Icon'
import Button from '../_shared/Button'
import {
  KNIGHT,
  KNIGHT_LIEUTENANT,
  KNIGHT_CAPTAIN,
  KNIGHT_COMMANDER,
  BADGE_STAR,
  KNIGHT_LEGION,
  TREASURE_BOX,
  // DOUBLE_SHIELD,
  ALARM,
  LEVEL_UP_CIVILLIAN,
  LEVEL_UP_LIEUTENANT,
  LEVEL_UP_COMMANDER,
  LEVEL_UP_KNIGHT
} from '@/utils/IconConstant'
import CardNotify from '../_shared/card/CardNotify'
import CardMission from '../_shared/card/CardMission'
import BottomSheetComponent from '../_shared/custom/BottomSheetComponent'
import { LevelUpHeaderStyled, LevelUpInfoWrapper } from './homeStyled'
import Menu from '../_shared/Menu'
import CardInfo from '../_shared/card/CardInfo'
import Modal from '../_shared/Modal'
import HomeSheetComponent from '../onboarding/home/HomeSheetComponent'

function LevelUpComponent ({
  levelUp,
  promote,
  profile,
  promoteMission,
  submitLevelUp,
  cancelLevelUp,
  btsLevelUp,
  openBtsLevelUp,
  closeBtsLevelUp,
  onSubmitLevelUp,
  onCancelLevelUp
}) {
  const [modalOpen, setModalOpen] = useState(false)
  const [homeSheet, setHomeSheet] = useState({
    rewards: false
  })
  const handleOpenHomeSheet = () => {
    setHomeSheet({ rewards: true })
  }
  const handleCloseHomeSheet = () => {
    setHomeSheet({ rewards: false })
  }
  const handleOpen = () => {
    setModalOpen(true)
  }
  const handleClose = () => {
    setModalOpen(false)
  }
  const handleCancelLevel = async () => {
    await onCancelLevelUp()
    closeBtsLevelUp()
    cancelLevelUp()
    handleClose()
  }
  return (
    <>
      {
        !levelUp && profile?.tierId !== 4 && (
          <>
            <div
              style={{
                marginTop: '1rem',
                marginBottom: '1rem'
              }}
            >
              <p className='fs-16 bold'>
                Level Up
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem',
                border: '1px solid #DDDDDD',
                borderRadius: '6px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '12px',
                  marginBottom: '1rem'
                }}
              >
                {
                  profile?.tierId === 0 && (
                    <Icon
                      src={KNIGHT}
                      alt='level-up'
                      size={30}
                    />
                  )
                }
                {
                  profile?.tierId === 1 && (
                    <Icon
                      src={KNIGHT_LIEUTENANT}
                      alt='level-up'
                      size={30}
                    />
                  )
                }
                {
                  profile?.tierId === 2 && (
                    <Icon
                      src={KNIGHT_CAPTAIN}
                      alt='level-up'
                      size={30}
                    />
                  )
                }
                {
                  profile?.tierId === 3 && (
                    <Icon
                      src={KNIGHT_COMMANDER}
                      alt='level-up'
                      size={30}
                    />
                  )
                }
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <p className='fs-14 bold'>
                    Daftar Level Up
                  </p>
                  {
                    profile?.tierId === 0 && (
                      <p className='fs-14 bold'>
                        Menjadi Knight
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 1 && (
                      <p className='fs-14 bold'>
                        Menjadi Knight Lieutenant
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 2 && (
                      <p className='fs-14 bold'>
                        Menjadi Knight Captain
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 3 && (
                      <p className='fs-14 bold'>
                        Menjadi Knight Commander
                      </p>
                    )
                  }
                </div>
              </div>
              <Button
                type='button'
                variant='primary'
                onClick={openBtsLevelUp}
              >
                <span className='text-center'>Baca Selengkapnya</span>
              </Button>
            </div>
            <BottomSheetComponent
              sheetOpen={btsLevelUp}
              onDismiss={closeBtsLevelUp}
            >
              <LevelUpHeaderStyled>
                {
                  profile?.tierId === 0 && (
                    <Icon
                      src={LEVEL_UP_CIVILLIAN}
                      size={60}
                    />
                  )
                }
                {
                  profile?.tierId === 1 && (
                    <Icon
                      src={LEVEL_UP_KNIGHT}
                      size={60}
                    />
                  )
                }
                {
                  profile?.tierId === 2 && (
                    <Icon
                      src={LEVEL_UP_LIEUTENANT}
                      size={60}
                    />
                  )
                }
                {
                  profile?.tierId === 3 && (
                    <Icon
                      src={LEVEL_UP_COMMANDER}
                      size={60}
                    />
                  )
                }
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <p className='fs-20'>
                    Level Up Menjadi
                  </p>
                  {
                    profile?.tierId === 0 && (
                      <p className='fs-20 bold'>
                        Knight
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 1 && (
                      <p className='fs-20 bold'>
                        Knight Lieutenant
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 2 && (
                      <p className='fs-20 bold'>
                        Knight Captain
                      </p>
                    )
                  }
                  {
                    profile?.tierId === 3 && (
                      <p className='fs-20 bold'>
                        Knight Commander
                      </p>
                    )
                  }
                </div>
              </LevelUpHeaderStyled>
              <div
                className='mb-1'
              >
                <p className='fs-16'>
                  Rewards yang kamu dapat kalau menjadi {
                    profile?.tierId === 0
                      ? (
                        <strong>Knight</strong>
                      )
                      : (
                        profile?.tierId === 1
                          ? (
                            <strong>Knight Lieutenant</strong>
                          )
                          : (
                            profile?.tierId === 2
                              ? (
                                <strong>Knight Captain</strong>
                              )
                              : (
                                profile?.tierId === 3
                                  ? (
                                    <strong>Knight Commander</strong>
                                  )
                                  : null
                              )
                          )
                      )
                  }:
                </p>
              </div>
              <Menu
                className='mb-3'
                image={BADGE_STAR}
                title={promoteMission?.reward?.title}
                subtitle={promoteMission?.reward?.description}
                isIcon={true}
                onClick={handleOpenHomeSheet}
              />
              <div
                className='mb-1'
              >
                <p className='fs-16 bold'>
                  Dalam kurun waktu {promoteMission?.mission?.duration?.title}, kamu harus memenuhi mission berikut ini:
                </p>
              </div>
              <LevelUpInfoWrapper>
                {
                  promoteMission?.mission?.list.length > 0 && (
                    promoteMission?.mission?.list.map((item, index) => (
                      <CardInfo
                        key={index}
                        image={
                          item?.name === 'total_treasure'
                            ? TREASURE_BOX
                            : (item?.name === 'min_knight'
                              ? KNIGHT_LEGION
                              : (profile?.tierId === 0
                                ? null
                                : (profile?.tierId === 1
                                  ? LEVEL_UP_CIVILLIAN
                                  : (profile?.tierId === 2
                                    ? LEVEL_UP_KNIGHT
                                    : (profile?.tierId === 3
                                      ? LEVEL_UP_LIEUTENANT
                                      : LEVEL_UP_COMMANDER)))))
                        }
                        title={item?.details?.title}
                        subTitle={item?.details?.description}
                        isSubtitle={item?.details?.description === null ? 'false' : 'true'}
                      />
                    ))
                  )
                }
              </LevelUpInfoWrapper>
              <Button
                type='button'
                variant='primary'
                onClick={() => onSubmitLevelUp()}
              >
                <span className='text-center'>DAFTAR LEVEL UP</span>
              </Button>
            </BottomSheetComponent>
            <HomeSheetComponent
              openSheet={homeSheet}
              handleCloseSheet={handleCloseHomeSheet}
            />
          </>
        )
      }
      {
        levelUp && profile?.tierId !== 4 && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                Level Up
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  margin: '.5rem'
                }}
              >
                <Icon
                  src={ALARM}
                  alt='alarm'
                  size={13}
                />
                <p
                  style={{
                    fontSize: '12px',
                    color: '#4E3B95'
                  }}
                >
                  {promote?.duration?.timeLeft}
                </p>
              </div>
            </div>
            <div
              className='mb-2'
            >
              <CardNotify
                description={`Kamu mempunyai waktu sampai ${promote?.duration?.endDate}, untuk memenuhi mission Level Up`}
              />
            </div>
            {
              promote?.detail.map((item, index) => (
                <CardMission
                  key={index}
                  title={item.title}
                  subTitle={item.description}
                  type={item.type}
                  percentage={item.progress}
                  progress={item.progress}
                  total={item.target}
                />
              ))
            }
            {
              profile?.tierId !== 0 && (
                <Button
                  type='button'
                  variant='danger-outlined'
                  className='mb-1'
                  onClick={handleOpen}
                >
                  <span className='text-center'>Batalkan Level Up</span>
                </Button>
              )
            }
            <Modal
              open={modalOpen}
              clickAway={false}
            >
              <div
                className='mb-2'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span className='text-center'>Apakah kamu yakin akan membatalkan Level Up? Pencapaian Level Up kamu akan hilang jika dibatalkan. </span>
              </div>
              <Button
                type='button'
                variant='error'
                className='mb-1'
                onClick={handleCancelLevel}
              >
                <span className='text-center'>Yakin, Batalkan Level Up</span>
              </Button>
              <Button
                type='button'
                variant='text'
                onClick={() => handleClose()}
              >
                <span className='text-center'>Tidak, Jangan Batalkan</span>
              </Button>
            </Modal>
          </>
        )
      }
    </>
  )
}

LevelUpComponent.propTypes = {
  levelUp: PropTypes.bool,
  btsLevelUp: PropTypes.bool,
  submitLevelUp: PropTypes.func,
  cancelLevelUp: PropTypes.func,
  openBtsLevelUp: PropTypes.func,
  closeBtsLevelUp: PropTypes.func,
  promote: PropTypes.any,
  profile: PropTypes.any,
  promoteMission: PropTypes.any,
  onSubmitLevelUp: PropTypes.func,
  onCancelLevelUp: PropTypes.func
}

export default LevelUpComponent
