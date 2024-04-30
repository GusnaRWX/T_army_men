import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  postListArmyFailed,
  postListArmySuccess,
  postListArmyRequest,
  getArmyProfileFailed,
  getArmyProfileSuccess,
  getArmyProfileRequest,
  downloadListArmyRequest,
  downloadListArmySuccess,
  downloadListArmyFailed
} from '../reducers/slice/listArmySlice'
import { setResponserMessage } from '../reducers/slice/responserSlice'
import { postListArmy, getArmyProfile, downloadListArmyAction } from './saga-actions/listArmyActions'
import { clearStorage } from '@/utils/storage'
import Router from 'next/router'
import { downloadFile } from '@/utils/helpers'

function* fetchPostListArmy(action) {
  try {
    const res = yield call(postListArmy, action?.payload)

    yield put({
      type: postListArmySuccess.toString(),
      payload: {
        list: res?.data?.data
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: postListArmyFailed.toString() })
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
    if (err?.data?.meta?.code === 401) {
      clearStorage(['_treasury_army_token', '_is_army'])
      Router.push('/auth/login')
    }
  }
}

function* fetchGetProfileArmy(action) {
  try {
    const res = yield call(getArmyProfile, action?.payload)
    const data = res?.data?.data

    yield put({
      type: getArmyProfileSuccess.toString(),
      payload: {
        totalTreasure: data?.total_treasure,
        profile: data?.profile,
        armyList: data?.army_list,
        maintenance: data?.maintenance_tab,
        promote: data?.promote_tab,
        isPromoteProgram: data?.is_promote_program,
        isMaintenanceProgram: data?.is_maintenance_program
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({ type: getArmyProfileFailed.toString() })
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

/**
 * Download List Army 
 * 
 * @param {*} action 
 * @returns
 */
function* downloadListArmySaga(action) {
  try {
    const res = yield call(downloadListArmyAction, action?.payload)
    downloadFile('List-Army', res?.data)
    yield put({
      type: downloadListArmySuccess.toString()
    })
    yield delay(1000, true)
    yield put({
      type: setResponserMessage.toString(),
      payload: {
        code: 200,
        message: 'File Berhasil Didownload!'
      }
    })
  } catch (err) {
    yield delay(2000, true)
    yield put({
      type: downloadListArmyFailed.toString()
    })
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

function* listArmySaga() {
  yield takeEvery(postListArmyRequest.toString(), fetchPostListArmy)
  yield takeEvery(getArmyProfileRequest.toString(), fetchGetProfileArmy)
  yield takeEvery(downloadListArmyRequest.toString(), downloadListArmySaga)
}

export default listArmySaga
