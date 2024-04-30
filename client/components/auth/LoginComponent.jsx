/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Base from '../core/Base'
import Image from 'next/image'
import Form from '../_shared/form/Form'
import Textfield from '../_shared/form/Textfield'
import { useForm } from '@/hooks/index'
import Button from '../_shared/Button'
import Router from 'next/router'
import { getStorage } from '@/utils/storage'
import ModalLoading from '../_shared/ModalLoading'

function LoginComponent ({
  data,
  responser,
  onSubmit
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [initialValue, setInitialValue] = useState({
    email: '',
    password: ''
  })

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }
    if ('email' in fieldOfValues)
      temp.email = fieldOfValues.email ? '' : 'Harap Masukan Email/Nomer Handphone'

    if ('password' in fieldOfValues)
      temp.password = fieldOfValues.password ? '' : 'Harap Masukan Password'

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
    resetForm,
    handleInputChange
  } = useForm(initialValue, true, validate)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validate()) {
      const payload = {
        email: values.email,
        password: values.password,
        client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        scope: process.env.NEXT_PUBLIC_SCOPE
      }
      setIsLoading(!isLoading)
      await onSubmit(payload)
      await resetForm()
      await setInitialValue({
        email: '',
        password: ''
      })
    }
  }

  useEffect(() => {
    const token = getStorage('_treasury_army_token')
    if (token) setIsSuccess(isSuccess => !isSuccess)
  }, [data])

  useEffect(() => {
    if (responser?.code === 400) setIsLoading(false)
  }, [responser])

  return (
    <>
      <Base
        headerLess={false}
      >
        <Image
          src='/images/Treasury.png'
          alt='logo'
          width={169}
          height={64}
        />
        <div
          className='mb-1'
        >
          <p
            style={{
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Log In untuk mendapatkan penghasilan tambahan bersama Treasury Army!
          </p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Textfield
            className='mb-1'
            name='email'
            type='text'
            value={values.email}
            placeholder='Masukan Email/Nomor Handphone'
            onChange={handleInputChange}
            error={errors?.email}
          />
          <br />
          <Textfield
            className='mb-1'
            name='password'
            type='password'
            value={values.password}
            placeholder='Masukan Password'
            onChange={handleInputChange}
            error={errors?.password}
          />
          <div
            className='mb-2'
            style={{
              color: '#D3B533',
              cursor: 'pointer'
            }}
            onClick={() => Router.push('/auth/forget-password')}
          >
            <p
              style={{
                fontSize: '12px',
                fontWeight: 'bold'
              }}
            >Lupa Kata Sandi?</p>
          </div>
          <Button
            type='submit'
            variant='primary'
          >
            <span className='text-center'>Masuk</span>
          </Button>
        </Form>
      </Base>
      <ModalLoading
        open={isLoading}
        isSuccess={isSuccess}
      />
    </>
  )
}

LoginComponent.propTypes = {
  data: PropTypes.object,
  responser: PropTypes.object,
  onSubmit: PropTypes.func
}

export default LoginComponent
