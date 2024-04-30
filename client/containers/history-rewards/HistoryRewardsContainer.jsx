/* eslint-disable no-unused-vars */
import HistoryRewardsComponent from '@/components/history-rewards/HistoryRewardsComponent'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import {
  getHistoryRewardsRequest,
  downloadSummaryArmyRequest
} from '@/store/reducers/slice/historyRewardsSlice'

function HistoryRewardsContainer ({
  router
}) {
  const [initState, setInitState] = useState({
    dateType: 'current_year',
    startDate: '',
    endDate: ''
  })

  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.historyRewards)

  const handleFilterDate = (value) => {
    dispatch({
      type: getHistoryRewardsRequest.toString(),
      payload: value
    })
  }

  useEffect(() => {
    dispatch({
      type: getHistoryRewardsRequest.toString(),
      payload: initState
    })
  }, [dispatch, initState])

  const handleDownloadFile = (payload) => {
    dispatch({
      type: downloadSummaryArmyRequest.toString(),
      payload
    })
  }

  return (
    <HistoryRewardsComponent
      router={router}
      data={selector}
      handleFilterDates={handleFilterDate}
      handleDownloadFile={handleDownloadFile}
    />
  )
}

HistoryRewardsContainer.propTypes = {
  router: PropTypes.object
}

export default withRouter(HistoryRewardsContainer)
