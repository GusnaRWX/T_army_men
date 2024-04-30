import HomeComponent from '@/components/onboarding/home/HomeComponent'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { getCopytextRequest } from '@/store/reducers/slice/onboarding/onboardingHomeSlice'

function OnboardingHomeContainer() {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.onboardingHome)

  useEffect(() => {
    dispatch({
      type: getCopytextRequest.toString()
    })
  }, [dispatch])

  return (
    <HomeComponent
      data={selector}
    />
  )
}

export default OnboardingHomeContainer
