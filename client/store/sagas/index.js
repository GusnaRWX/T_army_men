import { all } from '@redux-saga/core/effects'
import authSaga from './authSaga'
import profileSaga from './profileSaga'
import onboardingTerms from './onboarding/onboardingTermsSaga'
import codeReferralMentorSaga from './onboarding/codeReferralMentorSaga'
import listArmySaga from './listArmySaga'
import historyRewardsSaga from './historyRewardsSaga'
import onboardingHomeSaga from './onboarding/onboardingHomeSaga'

export default function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    onboardingTerms(),
    listArmySaga(),
    codeReferralMentorSaga(),
    historyRewardsSaga(),
    listArmySaga(),
    onboardingHomeSaga()
  ])
}
