import HistoryRewardsTroopsComponent from '@/components/history-rewards/troops/HistoryRewardsTroopsComponent'
import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { getDetailHistoryRewardsRequest } from '@/store/reducers/slice/historyRewardsSlice'

function HistoryRewardsTroopsContainer ({
  router
}) {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.historyRewards)
  // * Waiting for router.isReady is true
  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!router.isReady) return

    dispatch({
      type: getDetailHistoryRewardsRequest.toString(),
      payload: router.query

    })
  }, [router, dispatch])
  return (
    <HistoryRewardsTroopsComponent
      router={router}
      data={selector}
    />
  )
}

HistoryRewardsTroopsContainer.propTypes = {
  router: PropTypes.object
}

export default withRouter(HistoryRewardsTroopsContainer)
