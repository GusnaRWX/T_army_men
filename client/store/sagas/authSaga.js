import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  authenticationFailed,
  authenticationRequest,
  authenticationSuccess,
  postForgetPasswordFailed,
  postForgetPasswordRequest,
  postForgetPasswordSuccess
} from '../reducers/slice/authSlice'
import { setResponserMessage } from '../reducers/slice/responserSlice'
import { login, postForgetPassword } from './saga-actions/authActions'
import Router from 'next/router'

function* fetchAuthentication (action) {
  try {
    const res = yield call(login, action?.payload)

    yield put({
      type: authenticationSuccess.toString(),
      payload: {
        token: res?.data?.data?.token,
        is_army: res?.data?.data?.is_army,
        is_onboarding: res?.data?.data?.is_onboarding,
        is_have_mentor: res?.data?.data?.is_have_mentor,
        is_new_user: res?.data?.data?.is_new_user
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
    if (res?.data?.data?.is_army === false) {
      if (res?.data?.data?.is_onboarding === true) {
        yield Router.push('/onboarding/qualify')
      } else {
        yield Router.push('/onboarding')
      }
    } else {
      yield Router.push('/')
    }
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: authenticationFailed.toString() })
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

function* fetchForgetPassword (action) {
  try {
    const res = yield call(postForgetPassword, action?.payload)

    if (res?.data?.meta?.code === 200) {
      yield put({
        type: postForgetPasswordSuccess.toString(),
        payload: {
          message: res?.data?.meta?.message
        }
      })
    }
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postForgetPasswordFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: 400,
        message: 'Akses ditolak hubungi kami untuk info lebih lanjut'
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

function* authSaga () {
  yield takeEvery(authenticationRequest.toString(), fetchAuthentication)
  yield takeEvery(postForgetPasswordRequest.toString(), fetchForgetPassword)
}

export default authSaga
