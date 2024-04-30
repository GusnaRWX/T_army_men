import { call, put, delay, takeEvery } from 'redux-saga/effects'
import {
  getHistoryRewardsRequest,
  getHistoryRewardsSuccess,
  getHistoryRewardsFailed,
  getDetailHistoryRewardsRequest,
  getDetailHistoryRewardsSuccess,
  getDetailHistoryRewardsFailed,
  getHistoryIndividualRequest,
  getHistoryIndividualSuccess,
  getHistoryIndividualFailed,
  downloadSummaryArmyFailed,
  downloadSummaryArmyRequest,
  downloadSummaryArmySuccess
} from '../reducers/slice/historyRewardsSlice'
import {
  getHistoryRewardsAction,
  getDetailHistoryRewardsAction,
  getDetailHistoryRewardsIndividualAction,
  getSummaryArmyFile
} from './saga-actions/historyRewardsAction'
import { setResponserMessage } from '../reducers/slice/responserSlice'
import { clearStorage } from '@/utils/storage'
import Router from 'next/router'
import { downloadFile } from '@/utils/helpers'
/**
 * Get History Rewards Saga Safa
 *
 * @param {*} action
 */

function* getHistoryRewardsSaga (action) {
  try {
    const res = yield call(getHistoryRewardsAction, action?.payload)

    yield put({
      type: getHistoryRewardsSuccess.toString(),
      payload: res?.data?.data
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
    yield put({ type: getHistoryRewardsFailed.toString() })
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

/**
 * Get Detail History Rewards Saga
 *
 * @param {*} action
 * @returns
 */
function* getDetailHistoryRewardsSaga (action) {
  try {
    const res = yield call(getDetailHistoryRewardsAction, action?.payload)

    yield put({
      type: getDetailHistoryRewardsSuccess.toString(),
      payload: res?.data?.data
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
    yield put({ type: getDetailHistoryRewardsFailed.toString() })
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

/**
 * Get History Individual Saga
 *
 * @param {*} action
 * @returns
 */
function* getDetailHistoryRewardsIndividualSaga (action) {
  try {
    const res = yield call(getDetailHistoryRewardsIndividualAction, action?.payload)

    yield put({
      type: getHistoryIndividualSuccess.toString(),
      payload: res?.data?.data
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
    yield put({ type: getHistoryIndividualFailed.toString() })
    yield delay({
      type: setResponserMessage.toString(),
      payload: {
        code: err?.data?.meta?.code,
        message: err?.data?.meta?.message
      }
    })
    yield delay(3000, true)
    yield delay({
      type: setResponserMessage.toString(),
      payload: {
        code: 0,
        message: null
      }
    })
  }
}

/**
 * Download File Summary Army
 *
 * @param {*} action
 * @returns
 */

function* fetchDownloadSummaryArmy (action) {
  try {
    const res = yield call(getSummaryArmyFile, action?.payload)

    downloadFile('Summary-Army', res?.data)

    if (res) {
      yield put({
        type: downloadSummaryArmySuccess.toString()
      })
      yield delay(1000, true)
      yield put({
        type: setResponserMessage.toString(),
        payload: {
          code: 200,
          message: 'File Berhasil Didownload!'
        }
      })
    }
  } catch (err) {
    yield delay(2000, true)
    yield put({
      type: downloadSummaryArmyFailed.toString()
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

function* historyRewardsSaga () {
  yield takeEvery(getHistoryRewardsRequest.toString(), getHistoryRewardsSaga)
  yield takeEvery(getDetailHistoryRewardsRequest.toString(), getDetailHistoryRewardsSaga)
  yield takeEvery(getHistoryIndividualRequest.toString(), getDetailHistoryRewardsIndividualSaga)
  yield takeEvery(downloadSummaryArmyRequest.toString(), fetchDownloadSummaryArmy)
}

export default historyRewardsSaga
