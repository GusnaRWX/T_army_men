import React, { useState } from 'react'
import Base from '../core/Base'
import useRouter from 'next/router'
import Textfield from '../_shared/form/Textfield'
import Filter from '../_shared/Filter'
import PropTypes from 'prop-types'
import CardListArmy from '../_shared/card/CardListArmy'
import DetailListArmyComponent from './DetailListArmyComponent'
import Image from 'next/image'
// import { getMonth } from '@/utils/helpers'
import { useAppDispatch } from '@/hooks/index'
import { getArmyProfileRequest } from '@/store/reducers/slice/listArmySlice'
import { DOWNLOAD, SEARCH_FILL } from '@/utils/IconConstant'
import Icon from '../_shared/Icon'

function ListArmyComponent({
  data,
  handleFilter,
  handleDownloadFile = () => { }
}) {
  const router = useRouter
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')
  const [troopsOrLevel, setTroopsOrLevel] = useState({
    troops: [],
    level: []
  })
  // eslint-disable-next-line no-unused-vars
  const [detail, setDetail] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [additionalText, setAdditionalText] = useState('')

  const handleSearch = (event) => {
    setSearch(event.target.value)
    handleFilter({
      search: event.target.value
    })
    setAdditionalText(`dengan nama ${event.target.value}`)
  }
  const handleBack = () => {
    router.push('/')
  }
  const handleDetailFilter = (id, troop = '', day = '') => {
    dispatch({
      type: getArmyProfileRequest.toString(),
      payload: {
        userId: id,
        troops: troop,
        days: day
      }
    })
  }
  const handleDetailOpen = async (id) => {
    await handleDetailFilter(id)
    setDetail(true)
  }
  const handleDetailClose = () => {
    setDetail(false)
  }
  const handleSubmit = (payload) => {
    setTroopsOrLevel({
      level: payload?.level,
      troops: payload?.troops
    })
    handleFilter(payload)
    setAdditionalText('dengan filter yang digunakan')
  }
  const handleResetText = () => {
    setAdditionalText('')
  }

  const handleOnDownload = () => {
    const payload = {
      // eslint-disable-next-line object-shorthand
      search: search,
      level: troopsOrLevel.level,
      troops: troopsOrLevel.troops
    }
    handleDownloadFile(payload)
  }
  return (
    <Base
      headerLess={true}
      parent={false}
      pageName='List ARMY'
      changePage={handleBack}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1rem'
        }}
      >
        {/* Search */}
        <div
          style={{
            width: '50%'
          }}
        >
          <Textfield
            name='search'
            value={search}
            placeholder='Search'
            type='text'
            appendIcon={true}
            image={SEARCH_FILL}
            onChange={handleSearch}
          />
        </div>
        {/* Filter */}
        <div
          style={{
            paddingBottom: '10px'
          }}
        >
          <Filter
            handleFilter={handleSubmit}
            onReset={handleResetText}
          />
        </div>
        {/* Download */}
        <div
          style={{
            marginBottom: '10px',
            cursor: 'pointer'
          }}
          onClick={handleOnDownload}
        >
          <div
            style={{
              border: '1px solid #EEEEEE',
              padding: '12px 10px',
              borderRadius: '8px',
              height: '41px',
              display: 'flex'
            }}
          >
            <div>
              <Icon
                size={18}
                src={DOWNLOAD}
              />
            </div>
            <p>List Army</p>
          </div>

        </div>
      </div>
      {
        data?.lists[0]?.list.length > 0 || data?.lists[1]?.list.length > 0 || data?.lists[2]?.list.length > 0
          ? (
            data?.lists.map((item, index) => (
              <div
                key={index}
              >
                <div
                  className='mb-1'
                >
                  {item?.name}
                </div>
                {
                  item?.list.length > 0
                    ? (
                      item?.list.map((v, i) => (
                        <CardListArmy
                          key={i}
                          image={v?.user_img}
                          name={v?.name}
                          level={v?.tier_id}
                          status={v?.tier_name}
                          onClick={() => handleDetailOpen(v?.user_id)}
                        />
                      ))
                    )
                    : (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '1rem'
                        }}
                      >
                        <span className='text-center fs-14 grey'>Maaf, Army belum ada untuk generasi ini</span>
                      </div>
                    )
                }
              </div>
            ))
          )
          : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.5rem',
                marginTop: '5rem'
              }}
            >
              <Image
                src='/images/goldie-speaker.png'
                alt='goldie'
                width={250}
                height={250}
              />
              <span className='text-center fs-14 grey'>Maaf, Kami tidak menemukan army {additionalText}</span>
              <span></span>
            </div>
          )
      }
      <DetailListArmyComponent
        open={detail}
        onClose={handleDetailClose}
        onFilter={handleDetailFilter}
        detail={data?.detail}
      />
    </Base>
  )
}

ListArmyComponent.propTypes = {
  data: PropTypes.any,
  handleFilter: PropTypes.func,
  handleDownloadFile: PropTypes.func
}

export default ListArmyComponent
