import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
  loading: false,
  profile: {
    tierId: '',
    tierName: '',
    totalMonthlyBenefit: '',
    referralCode: '',
    referralCodeUrl: ''
  },
  mentor: {
    name: '',
    tierId: '',
    tierName: '',
    phone: ''
  },
  armyList: [],
  maintenance: {
    detail: [],
    duration: {
      timeLeft: ''
    }
  },
  promote: {
    detail: [],
    duration: {
      timeLeft: '',
      endDate: ''
    }
  },
  promoteMission: {
    tierId: '',
    reward: {
      title: '',
      description: '',
      generationList: []
    },
    mission: {
      list: [],
      duration: {
        title: '',
        day: ''
      }
    }
  },
  isPromoteProgram: false,
  isMaintenanceProgram: false
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileRequest (state) {
      state.loading = true
    },
    getProfileSuccess (state, action) {
      const payload = action?.payload
      state.loading = false
      state.profile = {
        tierId: payload?.profile?.tierId,
        tierName: payload?.profile?.tierName,
        totalMonthlyBenefit: payload?.profile?.totalMonthlyBenefit,
        referralCode: payload?.profile?.referralCode,
        referralCodeUrl: payload?.profile?.referralCodeUrl
      }
      state.mentor = {
        name: payload?.mentor?.name,
        tierId: payload?.mentor?.tierId,
        tierName: payload?.mentor?.tierName,
        phone: payload?.mentor?.phone
      }
      state.armyList = payload?.armyList
      state.maintenance = {
        detail: payload?.maintenance?.detail,
        duration: {
          timeLeft: payload?.maintenance?.duration?.timeLeft
        }
      }
      state.promote = {
        detail: payload?.promote?.detail,
        duration: {
          timeLeft: payload?.promote?.duration?.timeLeft,
          endDate: payload?.promote?.duration?.endDate
        }
      }
      state.isPromoteProgram = payload?.isPromoteProgram
      state.isMaintenanceProgram = payload?.isMaintenanceProgram
    },
    getProfileFailed (state) {
      state.loading = false
    },
    postLevelUpRequest (state) {
      state.loading = true
    },
    postLevelUpSuccess (state) {
      state.loading = false
    },
    postLevelUpFailed (state) {
      state.loading = false
    },
    getPromoteUpRequest (state) {
      state.loading = true
    },
    getPromoteUpSuccess (state, action) {
      const payload = action?.payload
      state.loading = false
      state.promoteMission = {
        tierId: payload?.tierId,
        reward: {
          title: payload?.reward?.title,
          description: payload?.reward?.description,
          generationList: payload?.reward?.generationList
        },
        mission: {
          list: payload?.mission?.list,
          duration: {
            title: payload?.mission?.duration?.title,
            day: payload?.mission?.duration?.day
          }
        }
      }
    },
    getPromoteUpFailed (state) {
      state.loading = false
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const {
  getProfileRequest,
  getProfileSuccess,
  getProfileFailed,
  postLevelUpRequest,
  postLevelUpSuccess,
  postLevelUpFailed,
  getPromoteUpRequest,
  getPromoteUpSuccess,
  getPromoteUpFailed
} = profileSlice.actions

export default profileSlice.reducer
