import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  loading: false,
  mentor: [],
  modal: {
    findMentor: false,
    foundMentor: false
  }
}

export const codeReferralMentorSlice = createSlice({
  name: 'codeReferralMentor',
  initialState,
  reducers: {
    postCodeReferralMentorRequest(state) {
      state.loading = true
    },
    postCodeReferralMentorSuccess(state, action) {
      const payload = action?.payload
      state.loading = action?.loading
      state.mentor = payload
    },
    postCodeReferralMentorFailed(state) {
      state.loading = false
    },
    postMentorSagaRequest(state) {
      state.loading = true
      state.modal.findMentor = true
      state.modal.foundMentor = false
    },
    postMentorSagaSuccess(state, action) {
      const payload = action?.payload
      state.loading = action?.loading
      state.mentor = payload
      state.modal.findMentor = false
      state.modal.foundMentor = true
    },
    postMentorSagaFailed(state) {
      state.loading = false
      state.modal.findMentor = false
      state.modal.foundMentor = false
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
  postCodeReferralMentorRequest,
  postCodeReferralMentorSuccess,
  postCodeReferralMentorFailed,
  postMentorSagaRequest,
  postMentorSagaSuccess,
  postMentorSagaFailed
} = codeReferralMentorSlice.actions

export default codeReferralMentorSlice.reducer
