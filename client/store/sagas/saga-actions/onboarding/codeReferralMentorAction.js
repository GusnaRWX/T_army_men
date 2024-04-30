import { post } from '@/utils/interceptors'

/**
 * Post Code Referral Mentor 
 * 
 * @param {*} payload 
 * @returns
 */
export const postCodeReferralMentorAction = (payload) => {
  return post('/register', payload)
}
