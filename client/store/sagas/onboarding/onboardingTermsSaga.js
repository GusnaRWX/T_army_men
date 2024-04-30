import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  getTermsRequest,
  getTermsSuccess,
  getTermsFailed,
  postReferralCodeRequest,
  postReferralCodeSuccess,
  postReferralCodeFailed,
  postOnBoardingFailed,
  postOnBoardingSuccess,
  postOnBoardingRequest,
  postConditionalRegisterRequest,
  postConditionalRegisterSuccess,
  postConditionalRegisterFailed,
  checkReferralCodeRequest,
  checkReferralCodeSuccess,
  checkReferralCodeFailed
} from '@/store/reducers/slice/onboarding/onboardingTermsSlice'
import { setResponserMessage } from '@/store/reducers/slice/responserSlice'
import {
  onboardingTermsAction,
  postReferralCodeAction,
  postOnBoarding,
  postConditionalRegister,
  checkReferralCode
} from '../saga-actions/onboarding/onboardingTermsAction'
import Router from 'next/router'
import { clearStorage } from '@/utils/storage'

function* fetchCheckTerms (action) {
  try {
    const res = yield call(onboardingTermsAction, action?.payload)
    yield delay(3000, true)
    yield put({
      type: getTermsSuccess.toString(),
      payload: {
        terms: res?.data?.data?.details,
        message: null
      }
    })
    yield delay(3000, true)
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: null
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: getTermsFailed.toString() })
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
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
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
 * Function Post Referral Code
 *
 * @param {*} action
 * @returns
 */
function* postReferralCode (action) {
  try {
    const res = yield call(postReferralCodeAction, action?.payload)

    yield put({
      type: postReferralCodeSuccess.toString()
    })

    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: null
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postReferralCodeFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield delay(3000, true)
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    } else if (err?.data?.meta?.code === 400) {
      Router.push('/onboarding/qualify')
    }
  }
}

function* fetchCheckReferralCode (action) {
  try {
    const res = yield call(checkReferralCode, action?.payload)

    yield put({
      type: checkReferralCodeSuccess.toString()
    })

    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: null
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: checkReferralCodeFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    // yield put({
    //   type: setResponserMessage.toString(),
    //   payload: {
    //     code: err?.data?.meta?.code,
    //     message: err?.data?.meta?.message
    //   }
    // })
    yield delay(3000, true)
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    } else if (err?.data?.meta?.code === 400) {
      Router.push('/onboarding/qualify')
    }
  }
}

function* fetchPostOnBoarding (action) {
  try {
    const res = yield call(postOnBoarding, action?.payload)

    yield put({
      type: postOnBoardingSuccess.toString(),
      payload: {
        is_onboarding: res?.data?.data?.is_onboarding
      }
    })
    Router.push('/onboarding/qualify')
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postOnBoardingFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield delay(3000, true)
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    }
  }
}

function* fetchPostConditionalRegister (action) {
  try {
    const res = yield call(postConditionalRegister, action?.payload)
    yield put({
      type: postConditionalRegisterSuccess.toString(),
      payload: {
        mentor: res?.data?.data?.mentor,
        is_army: res?.data?.data?.is_army
      }
    })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: res?.data?.meta?.message
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postConditionalRegisterFailed.toString() })
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
  }
}

function* onboardingTerms () {
  yield takeEvery(getTermsRequest.toString(), fetchCheckTerms)
  yield takeEvery(postReferralCodeRequest.toString(), postReferralCode)
  yield takeEvery(postOnBoardingRequest.toString(), fetchPostOnBoarding)
  yield takeEvery(postConditionalRegisterRequest.toString(), fetchPostConditionalRegister)
  yield takeEvery(checkReferralCodeRequest.toString(), fetchCheckReferralCode)
}

export default onboardingTerms
