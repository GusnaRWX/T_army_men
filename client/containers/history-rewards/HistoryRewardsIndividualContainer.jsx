/* eslint-disable react-hooks/exhaustive-deps */
import HistoryRewardsIndividualComponent from '@/components/history-rewards/troops/indivudual/HistoryRewardsIndividualComponent'
import React, { useEffect, useState } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'
import { getHistoryIndividualRequest } from '@/store/reducers/slice/historyRewardsSlice'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
function HistoryRewardsIndividualContainer ({
  router
}) {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.historyRewards)
  const [query, setQuery] = useState({
    limit: 10,
    page: 1
  })

  const fetchData = () => {
    dispatch({
      type: getHistoryIndividualRequest.toString(),
      payload: {
        ...router.query,
        ...query
      }
    })
    setQuery({
      ...query,
      page: query.page + 1
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // * Waiting for router.isReady is true
  // useEffect(() => {
  //   // eslint-disable-next-line no-useless-return
  //   if (!router.isReady) return

  //   if (!selector?.historyIndividual?.detail) fetchData()
  // }, [router, dispatch])

  return (
    <HistoryRewardsIndividualComponent
      router={router}
      data={selector}
      query={query}
      fetching={fetchData}
    />
  )
}

HistoryRewardsIndividualContainer.propTypes = {
  router: PropTypes.object
}

export default withRouter(HistoryRewardsIndividualContainer)
