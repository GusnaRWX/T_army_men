import React from 'react'
import Modal from '@/components/_shared/Modal'
import PropTypes from 'prop-types'
import Button from '@/components/_shared/Button'

function ForgetPasswordModalComponent ({
  open,
  onClose = () => { },
  message
}) {
  return (
    <Modal
      open={open}
      clickAway={true}
      onClose={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p
          style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          {message}
        </p>
        <Button
          type='submit'
          variant='primary'
          onClick={onClose}
        >
          <span className='text-center'>Mengerti</span>
        </Button>
      </div>
    </Modal>
  )
}

ForgetPasswordModalComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  message: PropTypes.any
}

export default ForgetPasswordModalComponent
