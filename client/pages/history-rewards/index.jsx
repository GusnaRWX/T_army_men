/* eslint-disable react-hooks/rules-of-hooks */
import HistoryRewardsContainer from '@/containers/history-rewards/HistoryRewardsContainer'
import React, { useEffect } from 'react'
import { authProps } from '@/props/server/authProps'

function index() {
  useEffect(() => {
    authProps()
  }, [])

  return (
    <HistoryRewardsContainer />
  )
}

export default index
