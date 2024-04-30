import React, { useState, useEffect } from 'react'
import Base from '@/components/core/Base'
import HistoryRewardsToolbarComponent from './HistoryRewardsToolbarComponent'
import styled from '@emotion/styled'
import HistoryRewardsListComponent from './HistoryRewardsListComponent'
import PropTypes from 'prop-types'
import HistoryRewardsPoinComponent from './HistoryRewardsPoinComponent'
import format from 'date-fns/format'

const HistoryRewardsWrapper = styled.div`
  margin-top: 24px;
`

function HistoryRewardsComponent ({
  data,
  router,
  handleFilterDates = () => { },
  handleDownloadFile = () => { }
}) {
  const [type, setType] = useState('current_year')
  const [startFrom, setStartFrom] = useState(new Date())
  const [endTo, setEndTo] = useState(new Date())
  const [isDisable, setIsDisable] = useState(true)

  const handleChangePage = (payload) => {
    router.push({
      pathname: '/history-rewards/troops',
      query: { troops: payload.troops, dateType: type, startDate: type !== 'range' ? '' : format(startFrom, 'dd-MM-yyyy'), endDate: type !== 'range' ? '' : format(endTo, 'dd-MM-yyyy') }
    })
  }

  const handleFilterDate = () => {
    const payload = {
      dateType: type,
      startDate: startFrom === null ? '' : format(startFrom, 'dd-MM-yyyy'),
      endDate: endTo === null ? '' : format(endTo, 'dd-MM-yyyy')
    }
    handleFilterDates(payload)
  }

  const onDownloadFile = () => {
    const payload = {
      dateType: type,
      startDate: startFrom === null ? '' : format(startFrom, 'dd-MM-yyyy'),
      endDate: endTo === null ? '' : format(endTo, 'dd-MM-yyyy')
    }
    handleDownloadFile(payload)
  }

  // new function for improve filter
  const handleChangeType = (event) => {
    setType(event.target.value)
    setStartFrom(new Date())
    setEndTo(new Date())
  }

  const handleInputStartFrom = (newValue) => {
    setStartFrom(newValue)
  }

  const handleInputEndTo = (value) => {
    setEndTo(value)
  }

  const handleClose = () => {
    setStartFrom(new Date())
    setEndTo(new Date())
    setType('current_year')
  }

  useEffect(() => {
    function checkType () {
      if (type === 'range') {
        setIsDisable(false)
      } else {
        setIsDisable(true)
      }
    }
    checkType()
  }, [type])

  return (
    <Base
      headerLess={true}
      parent={false}
      pageName='Reward & Treasure'
      changePage={() => { router.back() }}
    >
      <HistoryRewardsWrapper>
        <HistoryRewardsToolbarComponent
          type={type}
          startFrom={startFrom}
          endTo={endTo}
          handleType={handleChangeType}
          handleStartFrom={handleInputStartFrom}
          handleEndTo={handleInputEndTo}
          handleClose={handleClose}
          isDisable={isDisable}
          handleFilterDate={handleFilterDate}
          handleDownload={onDownloadFile}
        />
        <HistoryRewardsPoinComponent
          historyRewards={data?.historyRewards}
        />
        <HistoryRewardsListComponent
          historyRewards={data?.historyRewards}
          handleChangePage={handleChangePage}
        />
      </HistoryRewardsWrapper>
    </Base>
  )
}

HistoryRewardsComponent.propTypes = {
  data: PropTypes.object,
  router: PropTypes.object,
  handleFilterDates: PropTypes.func,
  handleDownloadFile: PropTypes.func
}

export default HistoryRewardsComponent
