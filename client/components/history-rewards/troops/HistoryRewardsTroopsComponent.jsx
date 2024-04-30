import React, { useEffect, useState } from 'react'
import Base from '@/components/core/Base'
import styled from '@emotion/styled'
import HistoryRewardsTroopsListComponent from './HistoryRewardsTroopsListComponent'
import PropTypes from 'prop-types'

const HistoryRewardsWrapper = styled.div`
  margin-top: 14px;
`

function HistoryRewardsTroopsComponent ({
  data,
  router
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    function isMounted () {
      setTimeout(() => {
        setMounted(true)
      }, 3000)
    }
    isMounted()
  }, [])

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!router.isReady) return
  }, [router])

  const dateType = router?.query?.dateType
  const troops = router?.query?.troops
  const startDate = router?.query?.startDate
  const endDate = router?.query?.endDate

  const handlePageChange = (sid, title) => {
    router.push({
      pathname: '/history-rewards/troops/individual',
      query: { troops: router?.query?.troops, dateType: router?.query?.dateType, startDate: router?.query?.startDate, endDate: router?.query?.endDate, sid, title }
    })
  }
  return (
    <Base
      headerLess={true}
      parent={false}
      pageName={troops}
      changePage={() => { router.back() }}
    >
      {
        mounted === true && (
          <HistoryRewardsWrapper>
            {
              dateType !== 'range' && (
                <p>{dateType === 'current_year' ? 'Tahun Berjalan' : 'Bulan Berjalan'}</p>
              )
            }
            {
              dateType === 'range' && (
                <p>{startDate + ' - ' + endDate}</p>
              )
            }
            <HistoryRewardsTroopsListComponent
              detailHistory={data?.detailHistory}
              handlePageChange={handlePageChange}
            />
          </HistoryRewardsWrapper>
        )
      }
    </Base>
  )
}

HistoryRewardsTroopsComponent.propTypes = {
  data: PropTypes.object,
  router: PropTypes.object
}

export default HistoryRewardsTroopsComponent
