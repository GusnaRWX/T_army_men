import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  loading: false,
  lists: [],
  detail: {
    profile: {},
    totalTreasure: '',
    armyList: [],
    maintenance: [],
    promote: [],
    isPromoteProgram: false,
    isMaintenanceProgram: false
  }
}

export const listArmySlice = createSlice({
  name: 'listArmy',
  initialState,
  reducers: {
    postListArmyRequest(state) {
      state.loading = true
    },
    postListArmySuccess(state, action) {
      state.loading = false
      state.lists = action?.payload?.list
    },
    postListArmyFailed(state) {
      state.loading = false
    },
    getArmyProfileRequest(state) {
      state.loading = true
    },
    getArmyProfileSuccess(state, action) {
      const payload = action?.payload
      state.loading = false
      state.detail = {
        profile: payload?.profile,
        maintenance: payload?.maintenance,
        promote: payload?.promote,
        armyList: payload?.armyList,
        totalTreasure: payload?.totalTreasure,
        isPromoteProgram: payload?.isPromoteProgram,
        isMaintenanceProgram: payload?.isMaintenanceProgram
      }
    },
    getArmyProfileFailed(state) {
      state.loading = false
    },
    downloadListArmyRequest(state) {
      state.loading = true
    },
    downloadListArmySuccess(state, action) {
      state.loading = false
    },
    downloadListArmyFailed(state) {
      state.loading = false
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.list
      }
    }
  }
})

export const {
  postListArmyFailed,
  postListArmyRequest,
  postListArmySuccess,
  getArmyProfileRequest,
  getArmyProfileFailed,
  getArmyProfileSuccess,
  downloadListArmyRequest,
  downloadListArmySuccess,
  downloadListArmyFailed
} = listArmySlice.actions

export default listArmySlice.reducer
