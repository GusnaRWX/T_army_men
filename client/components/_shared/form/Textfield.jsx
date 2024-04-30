import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormGroupStyled } from '../formGroupStyled'
import { TextfieldStyled, TextfieldErrorMessage, TextfieldWrapperStyled, TextfieldIconStyled, TextFieldAppendIcon, TextFieldAppendText } from './textfieldStyled'
import Icon from '../Icon'
import { SHOW_EYE, HIDE_EYE } from '@/utils/IconConstant'

function Textfield ({
  name,
  type,
  value,
  placeholder,
  dense,
  error,
  className,
  image,
  appendIcon = false,
  appendText = false,
  appendTextContent,
  onChange,
  ...otherProps
}) {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <FormGroupStyled
      {...dense && { dense }}
    >
      <TextfieldWrapperStyled
        className={error ? 'error' : ''}
      >
        {
          appendIcon && (
            <TextFieldAppendIcon>
              <Icon
                src={image}
                size={11}
              />
            </TextFieldAppendIcon>
          )
        }
        {
          appendText && (
            <TextFieldAppendText>
              <p style={{
                fontSize: '12px',
                color: '#909090',
                letterSpacing: 'normal',
                wordSpacing: 'normal',
                fontFamily: 'sans-serif'
              }}>{appendTextContent}</p>
            </TextFieldAppendText>
          )
        }
        <TextfieldStyled
          name={name}
          type={show ? 'text' : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          {...otherProps}
          {...(appendIcon && { appendIcon })}
          {...(appendText && { appendText })}
        />
        {
          type === 'password' && !show && (
            <TextfieldIconStyled
              onClick={handleClick}
            >
              <Icon
                src={SHOW_EYE}
                size={15}
              />
            </TextfieldIconStyled>
          )
        }
        {
          type === 'password' && show && (
            <TextfieldIconStyled
              onClick={handleClick}
            >
              <Icon
                src={HIDE_EYE}
                size={15}
              />
            </TextfieldIconStyled>
          )
        }
      </TextfieldWrapperStyled>
      {
        error && (
          <TextfieldErrorMessage>
            {error}
          </TextfieldErrorMessage>
        )
      }
    </FormGroupStyled>
  )
}

Textfield.propTypes = {
  name: PropTypes.string,
  type: PropTypes.any,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  dense: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  appendIcon: PropTypes.bool,
  appendText: PropTypes.bool,
  appendTextContent: PropTypes.string,
  image: PropTypes.string
}

export default Textfield
