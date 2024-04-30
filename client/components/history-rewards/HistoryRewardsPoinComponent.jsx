import styled from '@emotion/styled'
import React from 'react'
import CardRewards from '../_shared/card/CardRewards'
import PropTypes from 'prop-types'

const HistoryRewardsPointStyle = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 8px;
`

function HistoryRewardsPoinComponent ({
  historyRewards
}) {
  return (
    <HistoryRewardsPointStyle>
      <CardRewards
        name={'rewards'}
        title={historyRewards?.total_rewards?.name}
        poin={historyRewards?.total_rewards?.value}
      />
      <CardRewards
        name={'treasure'}
        title={historyRewards?.total_treasure_group?.name}
        poin={historyRewards?.total_treasure_group?.value}
      />
    </HistoryRewardsPointStyle>
  )
}

HistoryRewardsPoinComponent.propTypes = {
  historyRewards: PropTypes.any
}

export default HistoryRewardsPoinComponent
