import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  postCodeReferralMentorRequest,
  postCodeReferralMentorSuccess,
  postCodeReferralMentorFailed,
  postMentorSagaRequest,
  postMentorSagaSuccess,
  postMentorSagaFailed
} from '@/store/reducers/slice/onboarding/codeReferralMentorsSlice'
import { postCodeReferralMentorAction } from '../saga-actions/onboarding/codeReferralMentorAction'
import { setResponserMessage } from '@/store/reducers/slice/responserSlice'
import Router from 'next/router'
import { clearStorage, setStorages } from '@/utils/storage'

function* postCodeReferralMentorSaga(action) {
  try {
    const res = yield call(postCodeReferralMentorAction, action?.payload)

    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: res?.data?.meta?.message
      }
    })
    yield delay(2000, true)
    yield put({
      type: postCodeReferralMentorSuccess.toString(),
      payload: res?.data?.data?.mentor,
      loading: false
    })
    yield setStorages([
      {
        name: '_is_army', value: res?.data?.data?.is_army
      }
    ])
    yield delay(1000, true)
    yield window.location.reload()
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postCodeReferralMentorFailed.toString() })
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

/**
 * Find Mentor Sagas 
 * 
 * @param {*} action 
 * @returns
 */
function* postMentorSaga(action) {
  try {
    const res = yield call(postCodeReferralMentorAction, action?.payload)
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: res?.data?.meta?.message
      }
    })
    yield delay(2000, true)
    yield put({
      type: postMentorSagaSuccess.toString(),
      payload: res?.data?.data?.mentor,
      loading: false
    })
    yield setStorages([
      {
        name: '_is_army', value: true
      }
    ])
  } catch (err) {
    yield delay(1000, true)
    yield put({ type: postMentorSagaFailed.toString() })
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

function* codeReferralMentorSaga() {
  yield takeEvery(postCodeReferralMentorRequest.toString(), postCodeReferralMentorSaga)
  yield takeEvery(postMentorSagaRequest.toString(), postMentorSaga)
}

export default codeReferralMentorSaga
