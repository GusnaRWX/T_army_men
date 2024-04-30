import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './buttonStyled'

function Button({
  variant,
  type,
  className,
  disabled,
  children,
  ...otherProps
}) {
  return (
    <ButtonStyled
      {...((className || variant) && { className: variant !== 'inherit' ? variant + ' ' + className : className })}
      type={type}
      {...(disabled && { disabled: true })}
      {...otherProps}
    >
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'inherit', 'danger-outlined', 'text', 'text-width', 'error']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  width: PropTypes.number,
  className: PropTypes.any
}

export default Button
