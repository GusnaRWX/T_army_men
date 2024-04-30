import React from 'react'
import PropTypes from 'prop-types'
import Textfield from '@/components/_shared/form/Textfield'

function CodeReferralFormComponent({
  values,
  errors,
  isWhiteSpace,
  onChange = () => { }
}) {
  return (
    <Textfield
      name='code'
      value={values.code}
      error={errors?.code || isWhiteSpace.message}
      onChange={onChange}
      appendTextContent={'Army-'}
      appendText={true}
    />
  )
}

CodeReferralFormComponent.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  isWhiteSpace: PropTypes.object,
  onChange: PropTypes.func
}

export default CodeReferralFormComponent
