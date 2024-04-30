import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import {
  JAMIMAS,
  KNIGHT_HISTORY,
  BUY_GOLD,
  SELL_GOLD,
  HARVEST
} from '@/utils/IconConstant'

const initialState = {
  loading: false,
  historyRewards: [],
  detailHistory: [],
  historyIndividual: []
}

export const historyRewardsSlice = createSlice({
  name: 'historyRewards',
  initialState,
  reducers: {
    getHistoryRewardsRequest (state) {
      state.loading = true
    },
    getHistoryRewardsSuccess (state, action) {
      const payload = action?.payload
      state.loading = false
      state.historyRewards = payload
    },
    getHistoryRewardsFailed (state) {
      state.loading = false
    },
    getDetailHistoryRewardsRequest (state) {
      state.loading = true
    },
    getDetailHistoryRewardsSuccess (state, action) {
      const arr = [
        { name: 'new_knight', title: 'New Knight', path: KNIGHT_HISTORY },
        { name: 'gold_buy', title: 'Beli Emas', path: BUY_GOLD },
        { name: 'gold_staking', title: 'Panen Emas', path: HARVEST },
        { name: 'gold_normalization', title: 'Titip Emas', path: SELL_GOLD },
        { name: 'gold_pawn', title: 'Jamimas', path: JAMIMAS }
      ]

      const temp = []

      action?.payload?.details?.map((v) => {
        return arr.filter((x) => x.name === v.name ? temp.push({ path: x.path, title: x.title, name: v.name, point: v.point, sid: v.sharing_id }) : [])
      })
      state.loading = false
      state.detailHistory = temp
    },
    getDetailHistoryRewardsFailed (state) {
      state.loading = false
    },
    getHistoryIndividualRequest (state) {
      state.loading = true
    },
    getHistoryIndividualSuccess (state, action) {
      const payload = action?.payload
      state.loading = false
      state.historyIndividual = payload
    },
    getHistoryIndividualFailed (state) {
      state.loading = false
    },
    downloadSummaryArmyRequest (state, action) {
      state.loading = true
    },
    downloadSummaryArmySuccess (state) {
      state.loading = false
    },
    downloadSummaryArmyFailed (state) {
      state.loading = false
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action?.payload
      }
    }
  }
})

export const {
  getHistoryRewardsRequest,
  getHistoryRewardsSuccess,
  getHistoryRewardsFailed,
  getDetailHistoryRewardsRequest,
  getDetailHistoryRewardsSuccess,
  getDetailHistoryRewardsFailed,
  getHistoryIndividualRequest,
  getHistoryIndividualSuccess,
  getHistoryIndividualFailed,
  downloadSummaryArmyFailed,
  downloadSummaryArmyRequest,
  downloadSummaryArmySuccess
} = historyRewardsSlice.actions

export default historyRewardsSlice.reducer
