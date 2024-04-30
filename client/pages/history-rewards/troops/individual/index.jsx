/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import HistoryRewardsIndividualContainer from '@/containers/history-rewards/HistoryRewardsIndividualContainer'
import { authProps } from '@/props/server/authProps'

function index() {
  useEffect(() => {
    authProps()
  }, [])
  return (
    <HistoryRewardsIndividualContainer />
  )
}

export default index
