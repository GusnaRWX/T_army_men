import React from 'react'
import LoginComponent from '@/components/auth/LoginComponent'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { authenticationRequest } from '@/store/reducers/slice/authSlice'

function LoginContainer () {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.auth)
  const responser = useAppSelectors((state) => state.responser)

  const handleSubmit = (input) => {
    dispatch({
      type: authenticationRequest.toString(),
      payload: input
    })
  }
  return (
    <LoginComponent
      data={selector}
      responser={responser}
      onSubmit={handleSubmit}
    />
  )
}

export default LoginContainer
