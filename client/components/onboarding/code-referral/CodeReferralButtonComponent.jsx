import React from 'react'
import PropTypes from 'prop-types'
import Button from '@/components/_shared/Button'
import { useDetectVirtualKeyboard } from '@/hooks/index'

function CodeReferralButtonComponent ({
  code,
  isWhiteSpace,
  onSubmit = () => { },
  handleChooseMentor = () => { }
}) {
  const keyboard = useDetectVirtualKeyboard()
  return (
    <>
      {
        !keyboard && (
          <div
            style={{
              position: 'relative'
            }}
          >
            <div style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              maxWidth: '414px',
              width: '100%',
              display: 'block',
              margin: '20px auto'
            }}>
              <Button
                type='submit'
                variant={`${code.length >= 1 && isWhiteSpace.status === false ? 'primary' : 'disabled'}`}
                className='mb-1 fluid'
                onClick={onSubmit}
              >
                <span
                  className='text-center'
                >
                  LANJUTKAN
                </span>
              </Button>
              <Button
                className='text-center'
                variant='text'
                onClick={handleChooseMentor}
              >
                Pilihkan Aku Chief
              </Button>
            </div>
          </div>
        )
      }
    </>
  )
}

CodeReferralButtonComponent.propTypes = {
  code: PropTypes.string,
  isWhiteSpace: PropTypes.object,
  onSubmit: PropTypes.func,
  handleChooseMentor: PropTypes.func
}

export default CodeReferralButtonComponent
