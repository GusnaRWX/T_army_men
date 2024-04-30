import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/react'
import dynamic from 'next/dynamic'
import { CHECKLIST_CIRCLE, LOADER } from '@/utils/IconConstant'
import Icon from './Icon'

const ModalContainer = dynamic(() => import('./Portal'), {
  ssr: false,
  loading: () => <div>...</div>
})

function ModalLoading ({
  open,
  isSuccess
}) {
  const ref = useRef(null)

  if (!open)
    return null
  return (
    <ClassNames>
      {({ css }) => (
        <ModalContainer
          el='div'
          className={
            css`
              height: 100vh;
              max-width: 450px;
              width: 100%;
              position: fixed;
              z-index: 999;
              background-color: rgb(0 0 0 / 40%);
              bottom: 0;
              margin: auto;
              left: 0;
              right: 0;
              transition: all ease 1s;
            `
          }
        >
          <div
            className={
              css`
             display: flex;
             justify-content: center;
             align-items: center;
             height: 100%;
             width: 100%
            `
            }
          >
            <div
              ref={ref}
              id='modal-listener'
              className={
                css`
                  width: 85%;
                  max-width: 300px;
                  height: 160px;
                  padding: 20px 12px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  flex-direction: column;
                  position: relative;
                  background-color: #fff;
                  position: relative;
                  border-radius: 6px;
                  transition: all 0.3s;
                `
              }
            >
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                opacity: isSuccess ? 1 : 0,
                visibility: isSuccess ? 'visible' : 'hidden',
                transition: isSuccess ? 'all 1s ease' : 'none'
              }}>
                <div
                  className={
                    css`
                      width: 100%;
                      height: 100%;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-direction: column;
                    `
                  }
                >
                  <p
                    className={
                      css`
                        margin-bottom: 24px;
                        font-size: 16px;
                        font-weight: 700;
                        text-align: center;
                      `
                    }
                  >
                    Berhasil Masuk!
                  </p>
                  <Icon
                    src={CHECKLIST_CIRCLE}
                    size={60}
                  />
                </div>
              </div>
              <div style={{
                opacity: isSuccess ? 0 : 1,
                visibility: isSuccess ? 'hidden' : 'visible',
                transition: isSuccess ? 'none' : 'all 1s ease'
              }}>
                <div
                  className={
                    css`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      flex-direction: column;
                    `
                  }
                >
                  <p
                    className={
                      css`
                        margin-bottom: 24px;
                        font-size: 16px;
                        font-weight: 700;
                        text-align: center;
                      `
                    }
                  >
                    Tunggu ya, kamu akan masuk <br /> sebentar lagi!
                  </p>
                  <div
                    className={
                      css`
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: rotation 2s infinite;
                      `
                    }
                  >
                    <Icon
                      src={LOADER}
                      size={60}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </ClassNames>
  )
}

ModalLoading.propTypes = {
  open: PropTypes.bool,
  clickAway: PropTypes.bool,
  onClose: PropTypes.func,
  isSuccess: PropTypes.bool
}

export default ModalLoading
