import React from 'react'
import styled from '@emotion/styled'
import FilterDate from '../_shared/FilterDate'
import Icon from '../_shared/Icon'
import { DOWNLOAD } from '@/utils/IconConstant'
import PropTypes from 'prop-types'

const HistoryRewardsToolbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`

const DownloadSummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #EEEEEE;
  border-radius: 6px;
`

function HistoryRewardsToolbarComponent ({
  type,
  startFrom,
  endTo,
  isDisable,
  handleType = () => { },
  handleStartFrom = () => { },
  handleEndTo = () => { },
  handleClose = () => { },
  handleFilterDate = () => { },
  handleDownload = () => { }
}) {
  return (
    <HistoryRewardsToolbarStyle>
      <div>
        <FilterDate
          type={type}
          startFrom={startFrom}
          endTo={endTo}
          isDisable={isDisable}
          handleType={handleType}
          handleStartFrom={handleStartFrom}
          handleEndTo={handleEndTo}
          onClose={handleClose}
          onFilter={handleFilterDate}
        />
      </div>
      <DownloadSummaryWrapper
        onClick={handleDownload}
      >
        <div>
          <Icon
            size={16}
            src={DOWNLOAD}
          />
        </div>
        <p className='fs-14'>
          Laporan Rewards
        </p>
      </DownloadSummaryWrapper>
    </HistoryRewardsToolbarStyle>
  )
}

HistoryRewardsToolbarComponent.propTypes = {
  type: PropTypes.any,
  startFrom: PropTypes.any,
  endTo: PropTypes.any,
  isDisable: PropTypes.any,
  handleType: PropTypes.func,
  handleStartFrom: PropTypes.func,
  handleEndTo: PropTypes.func,
  handleClose: PropTypes.func,
  handleFilterDate: PropTypes.func,
  handleDownload: PropTypes.func
}

export default HistoryRewardsToolbarComponent
