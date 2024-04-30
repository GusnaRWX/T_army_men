import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Base from '@/components/core/Base'
import styled from '@emotion/styled'
import ForgetPasswordFormComponent from './ForgetPasswordFormComponent'
import { useForm } from '@/hooks/index'
import ForgetPasswordModalComponent from './ForgetPasswordModalComponent'
import ForgetPasswordButtonComponent from './ForgetPasswordButtonComponent'
import { useRouter } from 'next/router'

const WrapperForgetPassword = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`

function ForgetPasswordComponent ({
  data,
  onSubmit
}) {
  const router = useRouter()
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = useState({
    email: ''
  })

  const [openModal, setOpenModal] = useState(false)

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('email' in fieldOfValues) {
      temp.email = fieldOfValues.email.length === 0
        ? 'Email tidak boleh kosong'
        : ''
    }

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues, true, validate)

  const handleSubmit = async (e) => {
    // e.preventDefault()
    if (validate()) {
      const payload = {
        email: values.email
      }
      await onSubmit(payload)
      setOpenModal(true)
    }
  }

  return (
    <Base
      headerLess={true}
      parent={false}
      pageName='Lupa Kata Sandi'
      changePage={() => router.push('/auth/login')}
    >
      <WrapperForgetPassword>
        <p style={{
          fontWeight: '700',
          margin: '24px 0'
        }}>
          Kami membutuhkan email yang sudah kamu daftarkan sebelumnya untuk mengirimkan instruksi perubahan kata sandi
        </p>
        <ForgetPasswordFormComponent
          values={values}
          errors={errors}
          onChange={handleInputChange}
        />
        <ForgetPasswordButtonComponent
          onSubmit={handleSubmit}
          isDisabled={values.email}
        />
        {
          data?.message !== '' && (
            <ForgetPasswordModalComponent
              onClose={() => { setOpenModal(false) }}
              open={openModal}
              message={data?.message}
            />
          )
        }
      </WrapperForgetPassword>
    </Base>
  )
}

ForgetPasswordComponent.propTypes = {
  data: PropTypes.any,
  onSubmit: PropTypes.func
}

export default ForgetPasswordComponent
