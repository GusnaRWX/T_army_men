/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { ARROW_BOTTOM, CLOSE_BLACK } from '@/utils/IconConstant'
import Icon from './Icon'
import { FilterDateStyled, CloseWrapperStyled } from './filterDateStyled'
import BottomSheetComponent from './custom/BottomSheetComponent'
import RadioFilter from './form/RadioFilter'
import CustomDatePicker from './form/CustomDatePicker'
import Button from './Button'
import format from 'date-fns/format'

function FilterDate ({
  onFilter,
  type,
  startFrom,
  endTo,
  isDisable,
  handleType = () => { },
  handleStartFrom = () => { },
  handleEndTo = () => { },
  onClose = () => { }
}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    // onClose()
    setOpen(false)
  }

  const handleSubmit = () => {
    onFilter()
    setOpen(false)
  }

  return (
    <>
      <FilterDateStyled
        onClick={handleOpen}
      >
        {
          type === 'current_year' && (
            <p className='fs-14 grey'>Tahun Berjalan</p>
          )
        }
        {
          type === 'current_month' && (
            <p className='fs-14 grey'>Bulan Berjalan</p>
          )
        }
        {
          type === 'range' && (
            <p className='fs-14 grey' style={{
              width: '100px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>{(startFrom === null ? null : format(startFrom, 'dd-MM-yyyy')) + ' - ' + (endTo === null ? null : format(endTo, 'dd-MM-yyyy'))}</p>
          )
        }
        <Icon
          src={ARROW_BOTTOM}
          size={11}
        />
      </FilterDateStyled>
      <BottomSheetComponent
        sheetOpen={open}
        onDismiss={() => handleClose()}
        dynamic={true}
        inHeight={1}
        snapHeight={0.6}
        blocking={false}
      >
        <CloseWrapperStyled>
          <div style={{ cursor: 'pointer' }} onClick={handleClose}>
            <Icon
              src={CLOSE_BLACK}
              size={15}
            />
          </div>
        </CloseWrapperStyled>
        <h4>Pilih Period</h4>
        <RadioFilter
          value={type}
          onChange={handleType}
        />
        <div className='mb-1'>
          <CustomDatePicker
            start={startFrom}
            end={endTo}
            onChangeStart={handleStartFrom}
            onChangeEnd={handleEndTo}
            isDisable={isDisable}
          />
        </div>
        <Button
          type='button'
          variant='primary'
          className='mb-1'
          onClick={handleSubmit}
        >
          <span className='text-center'>Terapkan</span>
        </Button>
      </BottomSheetComponent>
    </>
  )
}

FilterDate.propTypes = {
  onFilter: PropTypes.func,
  type: PropTypes.any,
  startFrom: PropTypes.any,
  endTo: PropTypes.any,
  isDisable: PropTypes.any,
  handleType: PropTypes.func,
  handleStartFrom: PropTypes.func,
  handleEndTo: PropTypes.func,
  onClose: PropTypes.func
}

export default FilterDate
