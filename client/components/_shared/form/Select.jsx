import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import ReactSelect from 'react-select'

function Select ({
  name,
  value,
  options,
  onChange,
  className,
  dense,
  placeholder
}) {
  const customStyle = {
    control: (styles, { isFocused }) => ({
      borderBottom: isFocused ? '1px solid #D3B533' : '1px solid #DDDDDD',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      boxShadow: '#D3B533',
      backgroundColor: '#FFFFFF'
    }),
    option: (styles, { isDisable }) => {
      return {
        ...styles,
        backgroundColor: isDisable ? '#4E3B95' : '',
        color: 'black',
        cursor: isDisable ? 'not-allowed' : 'default',
        ':hover': {
          backgroundColor: '#4E3B95',
          color: '#FFFFFF'
        }
      }
    },
    dropdownIndicator: base => ({
      ...base,
      color: '#D3B533',
      ':hover': {
        color: '#D3B533'
      }
    })
  }
  return (
    <ReactSelect
      styles={customStyle}
      name={name}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      isSearchable={false}
      {...(className && { className })}
      value={options.filter(e => e.value === value)}
    />
  )
}

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
  dense: PropTypes.bool,
  placeholder: PropTypes.string
}

export default Select
