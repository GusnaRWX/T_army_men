import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { setStorages } from '@/utils/storage'

const initialState = {
  loading: false,
  terms: {},
  message: '',
  mentor: {},
  mentorModal: false,
  mentorLoading: false
}

export const onboardingTermsSlice = createSlice({
  name: 'onboardingTerms',
  initialState,
  reducers: {
    getTermsRequest (state) {
      state.loading = false
    },
    getTermsSuccess (state, action) {
      const payload = action?.payload
      state.loading = false
      state.terms = payload?.terms
      state.message = payload?.message
    },
    getTermsFailed (state) {
      state.loading = false
    },
    checkReferralCodeRequest (state) {
      state.loading = true
    },
    checkReferralCodeSuccess (state) {
      state.loading = false
    },
    checkReferralCodeFailed (state) {
      state.loading = false
    },
    postReferralCodeRequest (state) {
      state.loading = true
    },
    postReferralCodeSuccess (state, action) {
      state.loading = false
    },
    postReferralCodeFailed (state) {
      state.loading = false
    },
    postOnBoardingRequest (state) {
      state.loading = true
    },
    postOnBoardingSuccess (state, action) {
      state.loading = false
      setStorages([
        {
          name: '_is_onboarding', value: action?.payload?.is_onboarding
        }
      ])
    },
    postOnBoardingFailed (state) {
      state.loading = false
    },
    postConditionalRegisterRequest (state) {
      state.loading = true
      state.mentorLoading = true
    },
    postConditionalRegisterSuccess (state, action) {
      state.loading = false
      state.mentorLoading = false
      state.mentor = action?.payload?.mentor
      state.mentorModal = true
      setStorages([
        {
          name: '_is_army', value: action?.payload?.is_army
        }
      ])
    },
    postConditionalRegisterFailed (state) {
      state.loading = false
      state.mentorLoading = false
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
  getTermsRequest,
  getTermsSuccess,
  getTermsFailed,
  postReferralCodeRequest,
  postReferralCodeSuccess,
  postReferralCodeFailed,
  postOnBoardingFailed,
  postOnBoardingRequest,
  postOnBoardingSuccess,
  postConditionalRegisterRequest,
  postConditionalRegisterSuccess,
  postConditionalRegisterFailed,
  checkReferralCodeRequest,
  checkReferralCodeSuccess,
  checkReferralCodeFailed
} = onboardingTermsSlice.actions

export default onboardingTermsSlice.reducer
