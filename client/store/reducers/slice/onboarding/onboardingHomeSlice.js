import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  loading: false,
  requirements: []
}

export const onboardingHomeSlice = createSlice({
  name: 'onboardingHome',
  initialState,
  reducers: {
    getCopytextRequest(state) {
      state.loading = true
    },
    getCopytextSuccess(state, action) {
      const payload = action?.payload
      state.loading = false
      state.requirements = payload
    },
    getCopytextFailed(state) {
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
  getCopytextRequest,
  getCopytextSuccess,
  getCopytextFailed
} = onboardingHomeSlice.actions

export default onboardingHomeSlice.reducer
