import CardPoint from '@/components/_shared/card/CardPoint'
import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HistoryRewardsIndividualListStyle = styled.div`
  margin-top: 24px;
`

function HistoryRewardsIndividualListComponent ({
  list
}) {
  console.log(list)
  return (
    <>
      {
        list.length > 0 && (
          list?.map((v, i) => (
            <HistoryRewardsIndividualListStyle
              key={i}
            >
              <CardPoint
                avatarImage='/images/person-default.png'
                level={v.tier_name.toLowerCase()}
                name={v.name}
                levelId={v.tier_id}
                point={v.point}
                bonusIdr={v.idr}
              />
            </HistoryRewardsIndividualListStyle>
          ))
        )
      }
    </>
  )
}

HistoryRewardsIndividualListComponent.propTypes = {
  list: PropTypes.array
}

export default HistoryRewardsIndividualListComponent
