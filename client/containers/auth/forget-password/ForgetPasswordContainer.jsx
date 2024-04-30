import React from 'react'
import ForgetPasswordComponent from '@/components/auth/forget-password/ForgetPasswordComponent'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { postForgetPasswordRequest } from '@/store/reducers/slice/authSlice'

function ForgetPasswordContainer () {
  const dispatch = useAppDispatch()
  const auth = useAppSelectors(state => state.auth)
  const handleSumbit = (payload) => {
    dispatch({
      type: postForgetPasswordRequest.toString(),
      payload
    })
  }
  return (
    <ForgetPasswordComponent
      data={auth}
      onSubmit={handleSumbit}
    />
  )
}

export default ForgetPasswordContainer
