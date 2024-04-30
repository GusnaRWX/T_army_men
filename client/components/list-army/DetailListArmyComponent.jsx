/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import BottomSheetComponent from '../_shared/custom/BottomSheetComponent'
import {
  DetailArmyHeader,
  DetailArmyHeaderItemStyled,
  TreasureCardStyled,
  TreasureCardValueStyled,
  LabelValueStyled,
  ChipsStyled,
  ChipsWrapperStyled,
  TitleLabelStyled,
  TierTextWrapperStyled,
  TierItemBoxStyled,
  TierWrapperStyled
} from './listArmyStyled'
import Avatar from '../_shared/Avatar'
import Icon from '../_shared/Icon'
import { COPY, ALARM } from '@/utils/IconConstant'
import Select from '../_shared/form/Select'
import { itemTier } from '@/utils/siteSetting'
import CardMission from '../_shared/card/CardMission'
import { copy } from '@/utils/helpers'

function DetailListArmyComponent ({
  open,
  onClose,
  detail,
  onFilter
}) {
  const profile = detail?.profile
  const totalTreasure = detail?.totalTreasure
  const armyList = detail?.armyList
  const [filter, setFilter] = useState('30')
  const [validate, setValidate] = useState(false)
  const [generation, setGeneration] = useState('swordsman')
  const options = [
    { value: '30', label: '30 Hari' },
    { value: '90', label: '90 Hari' },
    { value: '180', label: '180 Hari' }
  ]

  const generations = [
    { value: 'swordsman', label: 'Swordsman' },
    { value: 'pikesman', label: 'Pikesman' },
    { value: 'archer', label: 'Archer' }
  ]

  const handleChange = (event) => {
    setFilter(event.value)
    setValidate(true)
  }
  const handleChangeGeneration = (value) => {
    setGeneration(value)
    setValidate(true)
  }

  const isActive = (item) => {
    const found = generations.find((el) => el.value === item.value)

    if (found?.value === generation) {
      return true
    } else {
      return false
    }
  }

  const handleBottomSheetClose = () => {
    setGeneration('swordsman')
    setFilter('30')
    setValidate(false)
    onClose()
  }

  useEffect(() => {
    function handleSubmit () {
      if (validate === true) {
        onFilter(profile?.user_id, generation, filter)
      }
    }
    handleSubmit()
  }, [generation, filter])

  return (
    <BottomSheetComponent
      sheetOpen={open}
      onDismiss={handleBottomSheetClose}
    >
      <DetailArmyHeader>
        <Avatar
          avatarImage={profile?.user_img}
          level={profile?.tier_id}
        />
        <DetailArmyHeaderItemStyled>
          <p className='fs-14 grey'>
            {profile?.name}
          </p>
          <p className='fs-14 grey'>
            {profile?.tier_name}
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px'
            }}
          >
            <p className='fs-12 grey'>
              {profile?.phone}
            </p>
            <div
              style={{
                cursor: 'pointer'
              }}
              onClick={() => copy(profile?.phone, 'Nomor HP tersalin')}
            >
              <Icon
                src={COPY}
                size={12}
              />
            </div>
          </div>
        </DetailArmyHeaderItemStyled>
      </DetailArmyHeader>
      <TreasureCardStyled>
        <TreasureCardValueStyled>
          <p>Total Treasure</p>
          <LabelValueStyled>
            RP. {totalTreasure}
          </LabelValueStyled>
        </TreasureCardValueStyled>
        <Select
          name='filter'
          value={filter}
          onChange={e => { handleChange(e) }}
          options={options}
        />
      </TreasureCardStyled>
      <div className='mb-1'>
        <TitleLabelStyled>
          Army
        </TitleLabelStyled>
      </div>
      <ChipsWrapperStyled>
        {
          generations.map((item, index) => (
            <ChipsStyled key={index} className={`${isActive(item) ? 'active' : ''}`} onClick={() => handleChangeGeneration(item.value)}>
              <span>{item.label}</span>
            </ChipsStyled>
          ))
        }
      </ChipsWrapperStyled>
      <TierWrapperStyled>
        {
          armyList.length > 0 && (
            armyList.map((item, index) => (
              <TierItemBoxStyled
                key={index}
                tierId={item?.tier_id}
              >
                <Icon
                  src={itemTier[index]?.icon}
                  size={25}
                />
                <TierTextWrapperStyled>
                  <p className='fs-12'>{item?.tier_name}</p>
                  <p className='fs-12 grey'>{item?.total} Army</p>
                </TierTextWrapperStyled>
              </TierItemBoxStyled>
            ))
          )
        }
      </TierWrapperStyled>
      {
        detail?.isMaintenanceProgram === true && (
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
                <p className='fs-14 blue'>
                  {detail?.maintenance?.duration?.time_left}
                </p>
              </div>
            </div>
            {
              typeof detail?.maintenance?.detail !== 'undefined' && (
                detail?.maintenance?.detail.map((item, index) => (
                  <CardMission
                    key={index}
                    title={item?.title}
                    subTitle={item?.description}
                    type={item?.type}
                    percentage={item?.progress}
                    progress={item?.progress}
                    total={item?.target}
                  />
                ))
              )
            }
          </>
        )
      }
      {
        detail?.isPromoteProgram === true && (
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
                <p className='fs-12 blue'>
                  {detail?.promote?.duration?.time_left}
                </p>
              </div>
            </div>
            {
              typeof detail?.promote?.detail !== 'undefined' && (
                detail?.promote?.detail.map((item, index) => (
                  <CardMission
                    key={index}
                    title={item?.title}
                    subTitle={item?.description}
                    type={item?.type}
                    progress={item?.progress}
                    percentage={item?.progress}
                    total={item?.target}
                  />
                ))
              )
            }
          </>
        )
      }

    </BottomSheetComponent>
  )
}

DetailListArmyComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  detail: PropTypes.any,
  onFilter: PropTypes.func
}

export default DetailListArmyComponent
