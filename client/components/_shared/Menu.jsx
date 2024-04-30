import React from 'react'
import PropTypes from 'prop-types'
import { MenuStyled } from './menuStyled'
import Icon from './Icon'
import { ARROW_RIGHT } from '@/utils/IconConstant'

function Menu ({
  image,
  title,
  subtitle,
  className,
  isIcon,
  onClick = () => { },
  otherStyle
}) {
  return (
    <MenuStyled
      // eslint-disable-next-line object-shorthand
      {...(className && { className: className })}
      onClick={onClick}
      style={otherStyle}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '10px'
        }}
      >
        <Icon
          src={image}
          size={52}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <div style={{ width: '250px' }}>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 'bolder'
              }}
            >{title}</p>
          </div>
          <div style={{ width: '250px' }}>
            <p
              style={{
                fontSize: '12px',
                color: '#606060'
              }}
            >{subtitle}</p>
          </div>
        </div>
      </div>
      {
        isIcon && (
          <Icon
            src={ARROW_RIGHT}
            size={12}
          />
        )
      }
    </MenuStyled>
  )
}

Menu.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  isIcon: PropTypes.bool,
  onClick: PropTypes.func,
  otherStyle: PropTypes.object
}

export default Menu
