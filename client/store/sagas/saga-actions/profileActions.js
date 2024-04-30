import { get, post } from '@/utils/interceptors'

/**
 *
 * Get Profile
 *
 * @param {*} payload
 * @returns
 */

export const getPofile = () => {
  return get('/profile')
}

/**
 *
 * Post Level Up
 *
 * @param {*} payload
 * @returns
 */

export const postLevelUp = (payload) => {
  return post('/promote-up', payload)
}

/**
 *
 * Get Promote Up
 *
 * @param {*} payload
 * @returns
 */

export const getPromoteUp = (payload) => {
  return get(`/tier/promote-mission?tier_id=${payload}`)
}
