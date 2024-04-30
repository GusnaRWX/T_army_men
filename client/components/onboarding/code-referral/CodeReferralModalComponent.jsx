import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/_shared/Modal'
import LoadingComponent from '@/components/_shared/LoadingComponent'

function CodeReferralModalComponent({
  open
  // onClose = () => { }
}) {
  return (
    <Modal
      open={open}
      clickAway={false}
    // onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          Tunggu sebentar ya, kami sedang memilih Chief terbaik untukmu
        </p>
        <LoadingComponent />
      </div>
    </Modal>
  )
}

CodeReferralModalComponent.propTypes = {
  open: PropTypes.bool
  // onClose: PropTypes.func
}

export default CodeReferralModalComponent
