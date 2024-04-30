import Button from '@/components/_shared/Button'
import React from 'react'
import PropTypes from 'prop-types'

function ForgetPasswordButtonComponent({
  isDisabled,
  onSubmit = () => { }
}) {
  return (
    <div style={{
      position: 'relative'
    }}>
      <Button
        type='submit'
        variant='primary'
        className={`mb-1 fluid ${isDisabled.length === 0 && 'disabled'}`}
        // disabled={true}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: '414px',
          width: '100%',
          display: 'block',
          margin: '10px auto'
        }}
        onClick={onSubmit}
      >
        <span className='text-center'>UBAH KATA SANDI</span>
      </Button>
    </div>
  )
}

ForgetPasswordButtonComponent.propTypes = {
  isDisabled: PropTypes.any,
  onSubmit: PropTypes.func
}

export default ForgetPasswordButtonComponent
