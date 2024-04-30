import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import responserReducer from './slice/responserSlice'
import profileReducer from './slice/profileSlice'
import onboardingTermsSlice from './slice/onboarding/onboardingTermsSlice'
import codeReferralMentorsSlice from './slice/onboarding/codeReferralMentorsSlice'
import listArmySlice from './slice/listArmySlice'
import historyRewardsSlice from './slice/historyRewardsSlice'
import onboardingHomeSlice from './slice/onboarding/onboardingHomeSlice'

const reducers = combineReducers({
  auth: authReducer,
  responser: responserReducer,
  profile: profileReducer,
  onboardingTerms: onboardingTermsSlice,
  codeReferralMentor: codeReferralMentorsSlice,
  listArmy: listArmySlice,
  historyRewards: historyRewardsSlice,
  onboardingHome: onboardingHomeSlice
})

export default reducers
