import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/react'
import { useClickAwayListener } from '@/hooks'
import dynamic from 'next/dynamic'

const ModalContainer = dynamic(() => import('./Portal'), {
  ssr: false,
  loading: () => <div>...</div>
})

function Modal({
  open,
  clickAway = false,
  onClose,
  children
}) {
  const ref = useRef(null)

  useClickAwayListener(ref, onClose, clickAway)
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
                 background-color: rgb(0 0 0 / 60%);
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
               background-color: #fff;
               width: 100%;
               max-width: 400px;
               padding: 1rem;
               position: relative;
               border-radius: 6px;
               transition: all 0.3s;
              `
              }
            >
              <div className='modal-content'>
                {children}
              </div>
            </div>
          </div>
        </ModalContainer>
      )}
    </ClassNames>
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  clickAway: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}

export default Modal
