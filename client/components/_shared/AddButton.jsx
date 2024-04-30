import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import { AddButtonStyled } from './addButtonStyled'

function AddButton ({
  variant,
  type,
  className,
  label,
  icon,
  ...otherProps
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '70px',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <AddButtonStyled
        {...((className || variant) && { className: variant !== 'inherit' ? variant + ' ' + className : className })}
        type={type}
        {...otherProps}
      >
        <Icon
          src={icon}
          size={20}
        />
      </AddButtonStyled>
      <p>{label}</p>
    </div>
  )
}

AddButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'inherit', 'danger']),
  type: PropTypes.oneOf(['button', 'submit']),
  label: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string
}

export default AddButton
