import React from 'react'
import PropTypes from 'prop-types'
import { TextField as Input } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'

function CustomDatePicker ({
  start,
  end,
  onChangeStart,
  onChangeEnd,
  isDisable = false
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px'
      }}>
        <MobileDatePicker
          label='Dari'
          inputFormat='dd-MM-yyyy'
          value={start}
          disabled={isDisable === true}
          onChange={onChangeStart}
          renderInput={(params) =>
            <Input
              size='small'
              {...params}
              sx={{
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#D3B533'
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#D3B533'
                  }
                }
              }}
            />
          }
        />
        <MobileDatePicker
          label='Sampai'
          inputFormat='dd-MM-yyyy'
          minDate={start}
          value={end}
          disabled={start === null || isDisable === true}
          onChange={onChangeEnd}
          renderInput={(params) =>
            <Input
              size='small'
              {...params}
              sx={{
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#D3B533'
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#D3B533'
                  }
                }
              }}
            />
          }
        />
      </div>
    </LocalizationProvider>
  )
}

CustomDatePicker.propTypes = {
  start: PropTypes.any,
  end: PropTypes.any,
  onChangeStart: PropTypes.func,
  onChangeEnd: PropTypes.func,
  isDisable: PropTypes.any
}

export default CustomDatePicker
