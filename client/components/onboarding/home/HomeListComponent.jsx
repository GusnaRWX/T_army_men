import React from 'react'
// eslint-disable-next-line no-unused-vars
import { LEVEL_UP_KNIGHT, TERMS, THUMB_UP_STAR } from '@/utils/IconConstant'
import Menu from '@/components/_shared/Menu'
import PropTypes from 'prop-types'

function HomeListComponent({
  handleOpenSheet = () => { }
}) {
  return (
    <div style={{
      marginTop: '24px'
    }}>
      <Menu
        className='mb-1'
        otherStyle={{ height: '96px' }}
        image={THUMB_UP_STAR}
        title='Cari Tahu Cara Mendapatkan Rewards'
        subtitle='Skema rewards yang menguntungkan semuanya!'
        onClick={() => { handleOpenSheet('rewards') }}
        isIcon
      />
      {/* <Menu
        className='mb-1'
        image={LEVEL_UP_KNIGHT}
        title='Langsung Didaftarkan Level Up'
        subtitle='Menjadi Knight Lieutenant'
        onClick={() => { handleOpenSheet('upLevel') }}
        isIcon
      /> */}
      <Menu
        className='mb-1'
        otherStyle={{ height: '96px' }}
        image={TERMS}
        title='Syarat Gabung Mudah'
        subtitle='Langsung bisa terdaftar'
        onClick={() => { handleOpenSheet('terms') }}
        isIcon
      />
    </div>
  )
}

HomeListComponent.propTypes = {
  handleOpenSheet: PropTypes.func
}

export default HomeListComponent
