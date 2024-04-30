import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  getProfileFailed,
  getProfileRequest,
  getProfileSuccess,
  postLevelUpRequest,
  postLevelUpFailed,
  postLevelUpSuccess,
  getPromoteUpRequest,
  getPromoteUpFailed,
  getPromoteUpSuccess
} from '../reducers/slice/profileSlice'
import { setResponserMessage } from '../reducers/slice/responserSlice'
import { getPofile, postLevelUp, getPromoteUp } from './saga-actions/profileActions'
import { clearStorage } from '@/utils/storage'
import Router from 'next/router'

function* fetchGetProfile (action) {
  try {
    const res = yield call(getPofile, action?.payload)
    const data = res?.data?.data

    yield put({
      type: getProfileSuccess.toString(),
      payload: {
        profile: {
          tierId: data?.profile?.tier_id,
          tierName: data?.profile?.tier_name,
          totalMonthlyBenefit: data?.profile?.total_monthly_benefit,
          referralCode: data?.profile?.referral_code,
          referralCodeUrl: data?.profile?.referral_code_url
        },
        mentor: {
          name: data?.mentor?.name,
          tierId: data?.mentor?.tier_id,
          tierName: data?.mentor?.tier_name,
          phone: data?.mentor?.phone
        },
        armyList: data?.army_list,
        maintenance: {
          detail: data?.maintenance_tab?.detail,
          duration: {
            timeLeft: data?.maintenance_tab?.duration?.time_left
          }
        },
        promote: {
          detail: data?.promote_tab?.detail,
          duration: {
            timeLeft: data?.promote_tab?.duration?.time_left,
            endDate: data?.promote_tab?.duration?.end_date
          }
        },
        isPromoteProgram: data?.is_promote_program,
        isMaintenanceProgram: data?.is_maintenance_program
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: getProfileFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data.meta?.message
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
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    }
  }
}

function* fetchPostLevelUp (action) {
  try {
    const res = yield call(postLevelUp, action?.payload)

    yield put({ type: postLevelUpSuccess.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: res?.data?.meta?.code,
        message: res?.data?.meta?.message
      }
    })
    delay(3000, true)
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: 0,
        message: null
      }
    })
    delay(2000, true)
    yield put({ type: getProfileRequest.toString() })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postLevelUpFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data.meta?.message
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

function* fetchGetPromoteUp (action) {
  try {
    const res = yield call(getPromoteUp, action?.payload)
    const data = res?.data?.data

    yield put({
      type: getPromoteUpSuccess.toString(),
      payload: {
        tierId: data?.tier_id,
        reward: {
          title: data?.reward?.title,
          description: data?.reward?.description,
          generationList: data?.reward?.generation_list
        },
        mission: {
          list: data?.mission?.list,
          duration: {
            title: data?.mission?.duration?.title,
            day: data?.mission?.duration?.day
          }
        }
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: getPromoteUpFailed.toString() })
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data.meta?.message
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

function* profileSaga () {
  yield takeEvery(getProfileRequest.toString(), fetchGetProfile)
  yield takeEvery(postLevelUpRequest.toString(), fetchPostLevelUp)
  yield takeEvery(getPromoteUpRequest.toString(), fetchGetPromoteUp)
}

export default profileSaga
