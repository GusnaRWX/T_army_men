/* eslint-disable react-hooks/rules-of-hooks */
import OnboardingHomeContainer from '@/containers/onboarding/OnboardingHomeContainer'
import React, { useEffect } from 'react'
import { onBoardingProps } from '@/props/server/onBoardingProps'
import { authProps } from '@/props/server/authProps'

function index () {
  useEffect(() => {
    authProps()
    onBoardingProps()
  }, [])
  return (
    <OnboardingHomeContainer />
  )
}

export default index
