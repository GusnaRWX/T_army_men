/* eslint-disable no-unused-vars */
import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  BODY_SHIELD,
  BLUE_SHIELD,
  RED_SHIELD,
  COMMANDER,
  FILTER_FILL
} from '@/utils/IconConstant'
import Icon from './Icon'
import {
  FilterStyled,
  TroopsStyled,
  TroopsItemStyled,
  LevelStyled,
  LevelItemStyled
} from './filterStyled'
import BottomSheetComponent from './custom/BottomSheetComponent'
import Button from './Button'

function Filter ({
  handleFilter,
  onReset
}) {
  const [open, setOpen] = useState(false)
  const [troops, setTroops] = useState([])
  const [level, setLevel] = useState([])
  const [itemTroops, setItemTroops] = useState([
    {
      text: 'Swordsman',
      value: 'swordsman'
    },
    {
      text: 'Pikesman',
      value: 'pikesman'
    },
    {
      text: 'Archer',
      value: 'archer'
    }
  ])
  const [itemLevel, setItemLevel] = useState([
    {
      text: 'Knight',
      value: 0,
      icon: BODY_SHIELD
    },
    {
      text: 'Knight Lieutenant',
      value: 1,
      icon: BLUE_SHIELD
    },
    {
      text: 'Knight Captain',
      value: 2,
      icon: RED_SHIELD
    },
    {
      text: 'Knight Commander',
      value: 3,
      icon: COMMANDER
    }
  ])
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleClickTroops = (item) => {
    const found = troops.filter((el) => el.value === item.value)

    if (found.length === 0) {
      setTroops(prevState => [...prevState, item])
    } else {
      setTroops(prevState => prevState.filter((el) => el?.value !== item.value))
    }
  }
  const isActiveTroops = (item) => {
    const found = troops.filter((el) => el?.value === item.value)

    if (found.length === 0) {
      return false
    } else {
      return true
    }
  }
  const handleClickLevel = (item) => {
    const found = level.filter((el) => el.value === item.value)

    if (found.length === 0) {
      setLevel(prevState => [...prevState, item])
    } else {
      setLevel(prevState => prevState.filter((el) => el?.value !== item.value))
    }
  }
  const isActiveLevel = (item) => {
    const found = level.filter((el) => el?.value === item.value)

    if (found.length === 0) {
      return false
    } else {
      return true
    }
  }
  const handleReset = () => {
    setLevel([])
    setTroops([])
    onReset()
    handleFilter('')
  }
  const handleSubmit = () => {
    const payloadLevel = []
    const payloadTroops = []

    if (troops.length > 0) {
      for (let i = 0; i < troops.length; i++) {
        payloadTroops.push(troops[i].value)
      }
    }

    if (level.length > 0) {
      for (let i = 0; i < level.length; i++) {
        payloadLevel.push(level[i].value)
      }
    }

    handleFilter({
      level: payloadLevel,
      troops: payloadTroops
    })
  }
  return (
    <Fragment>
      <FilterStyled
        onClick={handleOpen}
      >
        <Icon
          src={FILTER_FILL}
          size={12}
        />
        <p style={{
          fontSize: '14px',
          color: '#606060'
        }}>Filter</p>
      </FilterStyled>
      <BottomSheetComponent
        sheetOpen={open}
        onDismiss={handleClose}
        dynamic={true}
        inHeight={2}
        snapHeight={0.6}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '0'
          }}
        >
          <p
            style={{
              fontSize: '16px'
            }}
          >
            Filter
          </p>
          <Button
            type='button'
            variant='text-width'
            onClick={handleReset}
          >
            <span className='text-center'>Reset</span>
          </Button>
        </div>
        <p
          className='mb-1'
          style={{
            fontSize: '14px',
            color: '#606060'
          }}
        >
          Troops
        </p>
        <TroopsStyled
          className='mb-1'
        >
          {
            itemTroops.map((item, index) => (
              <TroopsItemStyled
                key={index}
                className={`${isActiveTroops(item) ? 'active' : ''}`}
                onClick={() => handleClickTroops(item)}
              >
                <span className='text-center' style={{ fontSize: '12px' }}>{item.text}</span>
              </TroopsItemStyled>
            ))
          }
        </TroopsStyled>
        <p
          className='mb-1'
          style={{
            fontSize: '14px',
            color: '#606060'
          }}
        >
          Level
        </p>
        <LevelStyled
        >
          {
            itemLevel.map((item, index) => (
              <LevelItemStyled
                key={index}
                className={`${isActiveLevel(item) ? 'active' : ''}`}
                onClick={() => handleClickLevel(item)}
              >
                <Icon
                  src={item.icon}
                  size={12}
                />
                <span style={{ fontSize: '12px' }}>{item.text}</span>
              </LevelItemStyled>
            ))
          }
        </LevelStyled>
        <Button
          variant='primary'
          type='button'
          onClick={handleSubmit}
        >
          <span className='text-center'>Terapkan</span>
        </Button>
      </BottomSheetComponent>
    </Fragment>
  )
}

Filter.propTypes = {
  handleFilter: PropTypes.func,
  onReset: PropTypes.func
}

export default Filter
