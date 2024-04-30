/* eslint-disable react-hooks/rules-of-hooks */
import HistoryRewardsTroopsContainer from '@/containers/history-rewards/HistoryRewardsTroopsContainer'
import React, { useEffect } from 'react'
import { authProps } from '@/props/server/authProps'

function index() {
  useEffect(() => {
    authProps()
  }, [])

  return (
    <HistoryRewardsTroopsContainer />
  )
}

export default index
