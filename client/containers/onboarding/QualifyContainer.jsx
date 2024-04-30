/* eslint-disable react-hooks/exhaustive-deps */
import QualifyComponent from '@/components/onboarding/qualify/QualifyComponent'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { getTermsRequest, postReferralCodeRequest, postConditionalRegisterRequest, checkReferralCodeRequest } from '@/store/reducers/slice/onboarding/onboardingTermsSlice'

function QualifyContainer () {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.onboardingTerms)
  const response = useAppSelectors((state) => state.responser)

  const postReferralCode = (input) => {
    dispatch({
      type: postReferralCodeRequest.toString(),
      payload: input
    })
  }

  const checkReferralCode = (input) => {
    dispatch({
      type: checkReferralCodeRequest.toString(),
      payload: input
    })
  }

  const postConditionalRegister = (input) => {
    dispatch({
      type: postConditionalRegisterRequest.toString(),
      payload: input
    })
  }

  useEffect(() => {
    dispatch({ type: getTermsRequest.toString() })
  }, [])

  return (
    <QualifyComponent
      data={selector}
      response={response}
      postReferralCode={postReferralCode}
      postConditionalRegister={postConditionalRegister}
      checkReferralCode={checkReferralCode}
    />
  )
}

export default QualifyContainer
