import { post, get, postBlob } from '@/utils/interceptors'

/**
 *
 * post list army
 *
 * @param {*} payload
 * @returns
 */

export const postListArmy = (payload) => {
  return post('/army-list', payload)
}

/**
 *
 * get Detail
 *
 * @param {*} payload
 * @returns
 */

export const getArmyProfile = (payload) => {
  const { userId, troops, days } = payload
  const queryParams = `?user_id=${userId}&troop=${troops}&days=${days}`
  return get(`/army-profile${queryParams}`)
}

/**
 * Download List Army 
 * 
 * @param {*} payload 
 * @returns
 */
export const downloadListArmyAction = (payload) => {
  return postBlob(`/export/army-list`, payload)
}
