/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Base from '@/components/core/Base'
import Avatar from '@/components/_shared/Avatar'
import CardMission from '@/components/_shared/card/CardMission'
import CardLevel from '@/components/_shared/card/CardLevel'
import AddButton from '@/components/_shared/AddButton'
import { ALARM, ABOUT_US, ADD_FILL } from '@/utils/IconConstant'
import Icon from '@/components/_shared/Icon'
import Router from 'next/router'
import Menu from '../_shared/Menu'
import LevelUpComponent from './LevelUpComponent'
import ProfileChiefComponent from './ProfileChiefComponent'
import InviteArmyComponent from './InviteArmyComponent'
import PropTypes from 'prop-types'
import CardAddArmy from '../_shared/card/CardAddArmy'
import DetailListArmyComponent from '../list-army/DetailListArmyComponent'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { getArmyProfileRequest } from '@/store/reducers/slice/listArmySlice'

function HomeComponent ({
  data,
  onSubmitLevelUp,
  onCancelLevelUp,
  getMission
}) {
  // eslint-disable-next-line no-unused-vars
  const [levelUp, setLevelUp] = useState(false)
  const [btsLevelUp, setBtsLevelUp] = useState(false)
  const [modalProfile, setModalProfile] = useState(false)
  const [share, setShare] = useState(false)
  const [detail, setDetail] = useState(false)
  const dispatch = useAppDispatch()
  const listDetail = useAppSelectors(state => state.listArmy)

  const handleDetailFilter = (id, troop = '', day = '') => {
    dispatch({
      type: getArmyProfileRequest.toString(),
      payload: {
        userId: id,
        troops: troop,
        days: day
      }
    })
  }

  const handleDetailOpen = async (id) => {
    await handleDetailFilter(id)
    setDetail(true)
  }

  const handleDetailClose = () => {
    setDetail(false)
  }

  // eslint-disable-next-line no-unused-vars

  const profile = data?.profile
  const mentor = data?.mentor
  const armyList = data?.armyList
  const maintenance = data?.maintenance
  const promoteMission = data?.promoteMission
  const promote = data?.promote
  const promoteProgram = data?.isPromoteProgram
  const maintenanceProgram = data?.isMaintenanceProgram

  const submitLevelUp = () => {
    setLevelUp(true)
  }
  const cancelLevelUp = () => {
    setLevelUp(false)
  }
  const openBtsLevelUp = async () => {
    await getMission(parseInt(profile?.tierId))
    setBtsLevelUp(true)
  }
  const closeBtsLevelUp = () => {
    setBtsLevelUp(false)
  }
  const handleChiefOpen = () => {
    setModalProfile(true)
  }
  const handleChiefClose = () => {
    setModalProfile(false)
  }
  const handleShareOpen = () => {
    setShare(true)
  }
  const handleShareClose = () => {
    setShare(false)
  }
  return (
    <Base
      headerLess={true}
      parent={true}
      pageName='Treasury Army'
      logout={true}
    >
      <CardLevel
        level={profile?.tierId}
        title={profile?.tierName}
        point={profile?.totalMonthlyBenefit}
        mentor={mentor?.name}
        onClick={handleChiefOpen}
        changePage={() => Router.push('/history-rewards')}
      />
      <Menu
        className='mb-1'
        image={ABOUT_US}
        title='Tentang Treasury Army'
        subtitle='FAQ, Syarat & Ketentuan'
        isIcon={true}
        onClick={() => Router.push('/about-treasury')}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}
      >
        <p className='fs-16 bold'>
          ARMY
        </p>
        {
          armyList !== null && armyList.length > 0 && (
            <div
              style={{
                cursor: 'pointer',
                margin: '.5rem'
              }}
              onClick={() => { Router.push('/list-army') }}
            >
              <p className='fs-14 bold primary'>
                Lihat Semua
              </p>
            </div>
          )
        }
      </div>
      {
        armyList !== null && armyList.length > 0
          ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '12px',
                marginBottom: '2rem'
              }}
            >
              <div
                style={{
                  paddingBottom: '.3rem'
                }}
              >
                <AddButton
                  variant='primary'
                  type='button'
                  label='undang'
                  icon={ADD_FILL}
                  onClick={handleShareOpen}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '6px',
                  width: '380px',
                  overflowX: 'scroll'
                }}
              >
                {
                  armyList.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleDetailOpen(item?.user_id)}
                    >
                      <Avatar
                        avatarImage={item.user_img}
                        status={item.tier_name}
                        name={item.name}
                        level={item.tier_id}
                        width={70}
                        listArmy={true}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          )
          : (
            <CardAddArmy onClick={handleShareOpen} />
          )
      }
      {
        maintenanceProgram === true && (
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
              <p className='fs-16 bold'>
                Maintenance
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
                <p className='fs-12 blue'>
                  {maintenance?.duration?.timeLeft}
                </p>
              </div>
            </div>
            {
              maintenance?.detail.map((item, index) => (
                <CardMission
                  key={index}
                  title={item?.title}
                  subTitle={item?.description}
                  type={item?.type}
                  percentage={item?.progress}
                  total={item?.target}
                  progress={item?.progress}
                />
              ))
            }
          </>
        )
      }
      <LevelUpComponent
        levelUp={promoteProgram}
        promote={promote}
        profile={profile}
        promoteMission={promoteMission}
        submitLevelUp={submitLevelUp}
        cancelLevelUp={cancelLevelUp}
        btsLevelUp={btsLevelUp}
        openBtsLevelUp={openBtsLevelUp}
        closeBtsLevelUp={closeBtsLevelUp}
        onSubmitLevelUp={onSubmitLevelUp}
        onCancelLevelUp={onCancelLevelUp}
      />
      <ProfileChiefComponent
        open={modalProfile}
        onClose={handleChiefClose}
        profile={mentor}
      />
      <InviteArmyComponent
        open={share}
        onClose={handleShareClose}
        referral={profile?.referralCode}
        deepLink={profile?.referralCodeUrl}
      />
      <DetailListArmyComponent
        open={detail}
        onClose={handleDetailClose}
        onFilter={handleDetailFilter}
        detail={listDetail?.detail}
      />

    </Base>
  )
}

HomeComponent.propTypes = {
  data: PropTypes.any,
  onSubmitLevelUp: PropTypes.func,
  onCancelLevelUp: PropTypes.func,
  getMission: PropTypes.func
}

export default HomeComponent
