import { createSlice } from '@reduxjs/toolkit'
import { setStorages } from '@/utils/storage'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  loading: false,
  message: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticationRequest (state) {
      state.loading = true
    },
    authenticationSuccess (state, action) {
      state.loading = false
      setStorages([
        {
          name: '_treasury_army_token', value: action?.payload?.token
        },
        {
          name: '_is_army', value: action?.payload?.is_army
        },
        {
          name: '_is_onboarding', value: action?.payload?.is_onboarding
        },
        {
          name: '_is_have_mentor', value: action?.payload?.is_have_mentor
        },
        {
          name: '_is_new_user', value: action?.payload?.is_new_user
        }
      ])
    },
    authenticationFailed (state) {
      state.loading = false
    },
    postForgetPasswordRequest (state) {
      state.loading = true
    },
    postForgetPasswordSuccess (state, action) {
      state.loading = false
      state.message = action?.payload?.message
    },
    postForgetPasswordFailed (state) {
      state.loading = false
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth
      }
    }
  }
})

export const {
  authenticationRequest,
  authenticationSuccess,
  authenticationFailed,
  postForgetPasswordFailed,
  postForgetPasswordRequest,
  postForgetPasswordSuccess
} = authSlice.actions

export default authSlice.reducer
