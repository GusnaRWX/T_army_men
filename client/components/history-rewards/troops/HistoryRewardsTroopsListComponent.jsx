import React from 'react'
import CardHistoryDetail from '@/components/_shared/card/CardHistoryDetail'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const HistoryRewardsTroopsListStyle = styled.div`
  margin-top: 24px;
`

function HistoryRewardsTroopsListComponent ({
  detailHistory,
  handlePageChange = () => { }
}) {
  return (
    <>
      {
        detailHistory.length > 0 && (
          detailHistory?.map((v, i) => (
            <HistoryRewardsTroopsListStyle
              onClick={() => { handlePageChange(v.sid, v.title) }}
              key={i}
            >
              <CardHistoryDetail
                title={v.title}
                image={v.path}
                point={v.point}
              />
            </HistoryRewardsTroopsListStyle>
          ))
        )
      }
    </>
  )
}

HistoryRewardsTroopsListComponent.propTypes = {
  detailHistory: PropTypes.array,
  handlePageChange: PropTypes.func
}

export default HistoryRewardsTroopsListComponent
