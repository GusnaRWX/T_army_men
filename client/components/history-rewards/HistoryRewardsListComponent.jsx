import React from 'react'
import CardHistory from '../_shared/card/CardHistory'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HistoryRewardListStyle = styled.div`
  margin-top: 24px;
`

function HistoryRewardsListComponent ({
  historyRewards,
  handleChangePage = () => { }
}) {
  return (
    <>
      {
        historyRewards?.details && historyRewards?.details?.map((v, i) => (
          <HistoryRewardListStyle
            key={i}
            onClick={() => { handleChangePage({ troops: v.name }) }}
          >
            <CardHistory
              title={v?.name}
              subTitle={v?.description}
              point={v.point}
            />
          </HistoryRewardListStyle>
        ))
      }
    </>
  )
}

HistoryRewardsListComponent.propTypes = {
  historyRewards: PropTypes.any,
  handleChangePage: PropTypes.func
}

export default HistoryRewardsListComponent
