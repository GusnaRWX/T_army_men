import React from 'react'
import PropTypes from 'prop-types'
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material'
import styled from '@emotion/styled'

const FormRadioGroup = styled(RadioGroup)`
  width: 100%;

  &>.MuiFormControlLabel-root {
    justify-content: space-between;
    margin: 0;
  }
`

function RadioFilter ({
  value,
  onChange
}) {
  return (
    <FormControl
      sx={{
        width: '100%'
      }}
    >
      <FormRadioGroup value={value} onChange={onChange}>
        <FormControlLabel
          value='current_year'
          control={
            <Radio sx={{
              color: '#D3B533',
              '&.Mui-checked': {
                color: '#D3B533'
              }
            }} />
          }
          label='Tahun Berjalan'
          labelPlacement='start'

        />
        <FormControlLabel
          value='current_month'
          control={
            <Radio sx={{
              color: '#D3B533',
              '&.Mui-checked': {
                color: '#D3B533'
              }
            }} />
          }
          label='Bulan Berjalan'
          labelPlacement='start'
        />
        <FormControlLabel
          value='range'
          control={
            <Radio sx={{
              color: '#D3B533',
              '&.Mui-checked': {
                color: '#D3B533'
              }
            }} />
          }
          label='Pilih Periode Manual'
          labelPlacement='start'
        />
      </FormRadioGroup>
    </FormControl >
  )
}

RadioFilter.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func
}

export default RadioFilter
