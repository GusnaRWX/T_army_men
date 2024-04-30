/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/_shared/Button'
import styled from '@emotion/styled'
import Checkbox from '@/components/_shared/form/Checkbox'
import { useDetectVirtualKeyboard } from '@/hooks/index'

const HomeButtonWrapper = styled.div`
  background-color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  width: 90%;
  left: 50%;
  bottom: -40px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  max-width: 440px;
`

const ButtonWrapperBack = styled.div`
  position: absolute;
  width: 90%;
  left: 50%;
  bottom: -15px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  max-width: 440px;
`

function QualifySubmitComponent ({
  checked,
  checkStatus,
  error,
  response,
  statusButton,
  isWhiteSpace,
  handleChecked = () => { },
  onSubmit = () => { },
  handleBack = () => { }
}) {
  const keyboard = useDetectVirtualKeyboard()
  return (
    <>
      {
        !keyboard && (
          <HomeButtonWrapper>
            {
              // eslint-disable-next-line multiline-ternary
              checkStatus === true ? (
                <ButtonWrapper>
                  <div style={{
                    marginBottom: '20px'
                  }}>
                    <Checkbox
                      checked={checked}
                      label='Dengan ini saya'
                      onChange={handleChecked}
                    />
                  </div>
                  <Button
                    type='submit'
                    variant={checked && !error && statusButton === false && isWhiteSpace.status === false ? 'primary' : 'disabled'}
                    className='fluid'
                    onClick={onSubmit}
                    disabled={!(response?.code === 200 && statusButton === false)}
                  >
                    <span
                      className='text-center'
                    >
                      LANJUTKAN
                    </span>
                  </Button>
                </ButtonWrapper>
              ) : (
                <ButtonWrapperBack>
                  <Button
                    type='submit'
                    variant='primary'
                    onClick={handleBack}
                  >
                    <span
                      className='text-center'
                    >
                      MENGERTI
                    </span>
                  </Button>
                </ButtonWrapperBack>
              )
            }
          </HomeButtonWrapper>
        )
      }
    </>
  )
}

QualifySubmitComponent.propTypes = {
  checked: PropTypes.bool,
  checkStatus: PropTypes.object,
  handleChecked: PropTypes.func,
  response: PropTypes.object,
  isWhiteSpace: PropTypes.any,
  onSubmit: PropTypes.func,
  statusButton: PropTypes.bool,
  handleBack: PropTypes.func,
  error: PropTypes.any
}

export default QualifySubmitComponent
