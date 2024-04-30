import React from 'react'
import Textfield from '@/components/_shared/form/Textfield'
import PropTypes from 'prop-types'

function ForgetPasswordFormComponent({
  values,
  errors,
  onChange = () => { }
}) {
  return (
    <Textfield
      placeholder='Email'
      name='email'
      value={values.email}
      error={errors.email}
      onChange={onChange}
    />
  )
}

ForgetPasswordFormComponent.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func
}

export default ForgetPasswordFormComponent
