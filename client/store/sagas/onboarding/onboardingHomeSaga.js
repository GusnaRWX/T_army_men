import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  getCopytextRequest,
  getCopytextSuccess,
  getCopytextFailed
} from '@/store/reducers/slice/onboarding/onboardingHomeSlice'
import { getRequirements } from '../saga-actions/onboarding/onboardingHome'
import { setResponserMessage } from '@/store/reducers/slice/responserSlice'
import { clearStorage } from '@/utils/storage'
import Router from 'next/router'

function* getRequirementsSaga(action) {
  try {
    const res = yield call(getRequirements, action?.payload)
    yield delay(2000, true)
    yield put({
      type: getCopytextSuccess.toString(),
      payload: res?.data?.data
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: getCopytextFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield delay(3000, true)
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: 0,
        message: null
      }
    })
    yield delay(3000, true)
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    }
  }
}

function* onboardingHomeSaga() {
  yield takeEvery(getCopytextRequest.toString(), getRequirementsSaga)
}

export default onboardingHomeSaga
