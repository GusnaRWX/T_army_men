/* eslint-disable react-hooks/rules-of-hooks */
import QualifyContainer from '@/containers/onboarding/QualifyContainer'
import React, { useEffect } from 'react'
import { onBoardingProps } from '@/props/server/onBoardingProps'

function index () {
  useEffect(() => {
    onBoardingProps()
  }, [])
  return (
    <QualifyContainer />
  )
}

export default index
