import { get, post } from '@/utils/interceptors'

/**
 * onboarding Terms Action
 *
 * @param {*} payload
 * @returns
 */

export const onboardingTermsAction = () => {
  return get('/check')
}

/**
 * Post Referral Code
 *
 * @param {*} payload
 * @returns
 */
export const postReferralCodeAction = (payload) => {
  return post('/check-referral', payload)
}

export const checkReferralCode = (payload) => {
  return post('/check-referral', payload)
}

export const postOnBoarding = () => {
  return post('/user/onboarding')
}

export const postConditionalRegister = (payload) => {
  return post('/conditional/register', payload)
}
