/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Base from '@/components/core/Base'
import styled from '@emotion/styled'
import HistoryRewardsIndividualListComponent from './HistoryRewardsIndividualListComponent'
import PropTypes from 'prop-types'
import Icon from '@/components/_shared/Icon'
import InfiniteScroll from 'react-infinite-scroll-component'

const HistoryRewardsWrapper = styled.div`
  margin-top: 14px;
  margin-bottom: 30px;
`

const HistoryRewardsNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

function HistoryRewardsIndividualComponent ({
  data,
  router,
  query,
  fetching = () => { }
}) {
  const troops = router?.query?.troops
  const title = router?.query?.title
  const [historyDataIndividual, setHistoryDataIndividual] = useState([])

  const fetchMoreData = async () => {
    if (data?.historyIndividual?.detail) await fetching()
  }

  useEffect(() => {
    if (data?.historyIndividual?.detail?.length > 0) {
      if (historyDataIndividual.length === 0) {
        setHistoryDataIndividual(data.historyIndividual.detail)
      } else {
        const newData = []

        // eslint-disable-next-line array-callback-return
        data?.historyIndividual?.detail?.map((d, i) => {
          const dataFilter = historyDataIndividual.filter((h) => h.date === d.date)
          const dataID = dataFilter.map((d) => d.list.map((l) => l.id))

          if (dataFilter.length > 0) {
            const list = [...dataFilter[0].list]

            // eslint-disable-next-line array-callback-return
            d.list.map((d) => {
              if (!dataID.includes(d.id)) {
                list.push(d)
              }
            })

            newData.push({
              date: d.date,
              list
            })
          } else {
            newData.push(d)
          }
        })

        const payload = historyDataIndividual.filter((h) => !newData.map((d) => d.date).includes(h.date)).concat(newData)
        setHistoryDataIndividual(payload)
      }
    }
  }, [data?.historyIndividual?.detail])

  return (
    <Base
      headerLess={true}
      parent={false}
      pageName={troops + ' - ' + title}
      changePage={() => { router.back() }}
    >
      {
        historyDataIndividual.length > 0
          ? (
            <InfiniteScroll
              dataLength={query.page * 10}
              next={fetchMoreData}
              hasMore={true}
              height={600}
            >
              {
                historyDataIndividual?.map((v, i) => (
                  <HistoryRewardsWrapper
                    key={i}
                  >
                    <p>{v.date}</p>
                    <HistoryRewardsIndividualListComponent
                      list={v.list}
                    />
                  </HistoryRewardsWrapper>
                ))
              }
            </InfiniteScroll>
          )
          : (
            <HistoryRewardsNotFound>
              <Icon
                size={200}
                src='/images/not-found.png'
              />
              <p className='mt-2'>Kamu belum menerima rewards di bulan ini </p>
            </HistoryRewardsNotFound>
          )
      }
    </Base>
  )
}

HistoryRewardsIndividualComponent.propTypes = {
  data: PropTypes.object,
  router: PropTypes.object,
  query: PropTypes.object,
  fetching: PropTypes.func
}

export default HistoryRewardsIndividualComponent
