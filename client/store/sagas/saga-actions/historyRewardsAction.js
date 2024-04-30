import { get, getBlob } from '@/utils/interceptors'

/**
 * Get History Rewards Action
 *
 * @returns
 */

export const getHistoryRewardsAction = (payload) => {
  const { dateType, startDate, endDate } = payload
  return get(`/history/rewards?date_type=${dateType}&start_date=${startDate}&end_date=${endDate}`)
}

/**
 * Get Detail History Rewards Action
 *
 * @param {*} payload
 * @returns
 */
export const getDetailHistoryRewardsAction = (payload) => {
  const params = `troop=${payload.troops}&date_type=${payload.dateType}&start_date=${payload.startDate}&end_date=${payload.endDate}`
  return get(`/history/reward?${params}`)
}

/**
 * Get Detail History Rewards Individual Action
 *
 * @param {*} payload
 * @returns
 */
export const getDetailHistoryRewardsIndividualAction = (payload) => {
  const { troops, dateType, startDate, endDate, page, limit, sid } = payload
  return get(`/history/individual?troops=${troops}&date_type=${dateType}&page=${page}&per_page=${limit}&start_date=${startDate}&end_date=${endDate}&shared_id=${sid}`)
}

/**
 * Get Download Summary ArmyAction
 *
 * @param {*} payload
 * @returns
 */

export const getSummaryArmyFile = (payload) => {
  const { dateType, startDate, endDate } = payload
  return getBlob(`/export/benefit?date_type=${dateType}&start_date=${startDate}&end_date=${endDate}`)
}
