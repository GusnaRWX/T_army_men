import { getStorage } from '@/utils/storage'
import Router from 'next/router'

export function onBoardingProps (ctx) {
  const onBoarding = getStorage('_is_onboarding')
  const army = getStorage('_is_army')

  if (onBoarding === 'false') {
    if (army === 'false') {
      const props = {
        isAuth: true,
        isArmy: false,
        isOnBoarding: true
      }
      Router.push('/onboarding')
      return { props }
    } else if (army === 'true') {
      const props = {
        isAuth: true,
        isArmy: true,
        isOnBoarding: true
      }
      return { props }
    }
  } else if (onBoarding === 'true') {
    if (army === 'false') {
      const props = {
        isAuth: true,
        isArmy: false,
        isOnBoarding: true
      }
      return { props }
    } else if (army === 'true') {
      const props = {
        isAuth: true,
        isArmy: true,
        isOnBoarding: true
      }
      Router.push('/')
      return { props }
    }
  }
}
