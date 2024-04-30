/* eslint-disable react-hooks/rules-of-hooks */
import CodeReferralContainer from '@/containers/onboarding/CodeReferralContainer'
import { onBoardingProps } from '@/props/server/onBoardingProps'
import React, { useEffect } from 'react'

function index () {
  useEffect(() => {
    onBoardingProps()
  }, [])
  return (
    <CodeReferralContainer />
  )
}

export default index
