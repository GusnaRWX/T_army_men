/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Base from '@/components/core/Base'
import Button from '@/components/_shared/Button'
import Menu from '@/components/_shared/Menu'
import PercentProgressBar from '@/components/_shared/PercentProgressBar'
import { THUMBS_UP, LEVEL_UP, COIN, JAMIMAS } from '@/utils/IconConstant'
import NumberProgressBar from '@/components/_shared/NumberProgressBar'
import Modal from '@/components/_shared/Modal'
import BottomSheetComponent from '@/components/_shared/custom/BottomSheetComponent'
import Avatar from '@/components/_shared/Avatar'
import CardMission from '@/components/_shared/card/CardMission'
import CardLevel from '@/components/_shared/card/CardLevel'
import AddButton from '@/components/_shared/AddButton'
import CardInfo from '@/components/_shared/card/CardInfo'
import CardNotify from '@/components/_shared/card/CardNotify'
import Table from '@/components/_shared/Table'
import { headersGlosarium, itemGlosarium, itemTroops, itemLevel, itemEmblem } from '@/utils/siteSetting'
import Filter from '@/components/_shared/Filter'
import CardHistory from '@/components/_shared/card/CardHistory'
import CardHistoryDetail from '@/components/_shared/card/CardHistoryDetail'
import CardPoint from '@/components/_shared/card/CardPoint'
import CardAboutUs from '@/components/_shared/card/CardAboutUs'
import Emblem from '@/components/_shared/Emblem'
import CardAddArmy from '@/components/_shared/card/CardAddArmy'
import LoadingComponent from '@/components/_shared/LoadingComponent'
import Select from '@/components/_shared/form/Select'
import Checkbox from '@/components/_shared/form/Checkbox'
import Snackbar from '@/components/_shared/Snackbar'
import FilterDate from '@/components/_shared/FilterDate'
import Textfield from '@/components/_shared/form/Textfield'
import { useForm } from '@/hooks/index'
import CustomDatePicker from '@/components/_shared/form/CustomDatePicker'
import RadioFilter from '@/components/_shared/form/RadioFilter'

function example () {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const [sheet, setSheet] = useState(false)
  const [checked, setChecked] = useState(false)
  const [snackbar, setSnackbar] = useState(false)
  const [startFrom, setStartFrom] = useState(null)
  const [endTo, setEndTo] = useState(null)
  const [type, setType] = useState('current_year')

  const handleChangeType = (event) => {
    setType(event.target.value)
  }

  const handleInputStartFrom = (newValue) => {
    setStartFrom(newValue)
  }
  const handleInputEndTo = (newValue) => {
    setEndTo(newValue)
  }
  const handleClick = () => {
    setSheet(true)
  }

  const handleCheckbox = () => {
    setChecked(!checked)
  }

  function onDismiss () {
    setSheet(false)
  }

  const handleChangePage = () => {

  }

  const handleOpenSnackbar = () => {
    setSnackbar(true)
    setTimeout(() => {
      setSnackbar(false)
    }, 3000)
  }

  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState('')
  const options = [
    { value: '', label: 'Select...' },
    { value: '30', label: '30 Hari' },
    { value: '90', label: '90 Hari' },
    { value: '180', label: '180 Hari' }
  ]

  const handleChange = (event) => {
    setFilter(event.value)
  }

  const handleFilter = (value) => {
  }

  // eslint-disable-next-line no-unused-vars
  const [initialValue, setInitialValue] = useState({
    name: ''
  })
  const space = /^.+\s.+$/g
  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }
    if ('name' in fieldOfValues)
      temp.name = fieldOfValues.name === '' ? 'tidak boleh kosong' : (values.name.match(space) ? 'tidak boleh ada spasi' : '')

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValue, true, validate)

  return (
    <Base
      headerLess={true}
      parent={true}
      pageName='Treasury Army'
      changePage={handleChangePage}
    >
      <Checkbox
        label='dengan ini saya '
        onChange={handleCheckbox}
        checked={checked}
      />
      <br />
      <br />
      <FilterDate
        onFilter={handleFilter}
      />
      <br />
      <br />
      <RadioFilter
        value={type}
        onChange={handleChangeType}
      />
      <br />
      <br />
      <CustomDatePicker
        start={startFrom}
        end={endTo}
        onChangeStart={handleInputStartFrom}
        onChangeEnd={handleInputEndTo}
        isDisable={false}
      />
      <br />
      <Textfield
        name='name'
        type='text'
        value={values.name}
        onChange={handleInputChange}
        error={errors?.name}
        appendText={true}
        appendTextContent='army-'
      />

      <div>TREASURY x ARMY</div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <p>
            RP. 21.000.000
          </p>
        </div>
        <Select
          name='filter'
          value={filter}
          onChange={e => { handleChange(e) }}
          options={options}
        />
      </div>
      <br />
      <Button
        type='button'
        variant='primary'
        className='mb-1'
        onClick={handleOpenSnackbar}
      >
        <span className='text-center'>Testing Snackbar</span>
      </Button>
      <Button
        type='button'
        variant='error'
        className='mb-1'
      >
        <span className='text-center'>Reset</span>
      </Button>
      {
        snackbar && (
          <Snackbar text='Testing Snackbar' />
        )
      }
      <br />
      <Menu
        className='mb-1'
        image={THUMBS_UP}
        title='Dapat Banyak Rewards'
        subtitle='Skema rewards yang bikin semua senang'
      />
      <Menu
        className='mb-1'
        image={LEVEL_UP}
        title='Langsung Didaftarkan Level'
        subtitle='Menjadi Knight Lieutenant'
      />
      <Menu
        className='mb-1'
        image={COIN}
        title='Syarat Gabung Mudah'
        subtitle='Cukup bertransaksi Rp 500.000*'
      />
      <PercentProgressBar percent={30} />
      <br />
      <NumberProgressBar progress={4} total={4} />
      <br />
      <a onClick={handleOpen}>Click Modal</a>
      <Modal
        open={open}
        clickAway={true}
        onClose={() => { setOpen(false) }}

      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <p>Tunggu sebentar ya, kami sedang memilih mentor terbaik untukmu</p>
          <LoadingComponent />
        </div>
      </Modal>
      <br />
      <a onClick={handleClick}>Click BottomSheet</a>
      <br />
      <Avatar
        avatarImage='/images/person-default.png'
        status='Knight'
        name='Gusna'
        level='commander'
      />
      <br />
      <CardMission
        title='Ajak Teman Jadi Knight'
        subTitle='Mendapatkan 2 Knight'
        type='fixed'
        progress={2}
        total={2}
      />
      <br />
      <CardMission
        title='Total Treasure'
        subTitle='Percentase Treasure'
        type='percentage'
        percentage={60}
      />
      <br />
      <CardLevel
        level='knight'
        title='KNIGHT'
        poin={1000}
        mentor='JOKOWI'
      />
      <br />
      <CardLevel
        level='lieutenant'
        title='KNIGHT LIEUTENANT'
        poin={500}
        mentor='SURYA'
      />
      <br />
      <CardLevel
        level='captain'
        title='KNIGHT CAPTAIN'
        poin={800}
        mentor='RIDWAN'
      />
      <br />
      <CardLevel
        level='commander'
        title='KNIGHT COMMANDER'
        poin={1000}
        mentor='INDRA'
      />
      <br />
      <AddButton
        variant='primary'
        type='button'
        label='Undang'
      />
      <br />
      <div
        style={{
          display: 'flex',
          width: '100%',
          minWidth: '360px',
          overflowX: 'auto',
          gap: '10px'
        }}
      >
        <CardInfo
          image={COIN}
          title='Total Treasure 500JT'
          subTitle='Ekuivalen 600 Gram Emas'
        />
        <CardInfo
          image={LEVEL_UP}
          title='Level Up'
          subTitle='Tingkatkan Terus Level Anda'
        />
      </div>
      <br />
      <CardNotify
        description='Kamu mempunyai waktu sampai 24 September 2022, untuk memenuhi mission Level Up'
      />
      <br />
      <Button
        type='button'
        variant='danger-outlined'
        className='mb-1'
      >
        <span className='text-center'>Hentikan Level Up</span>
      </Button>
      <br />
      <Button
        type='button'
        variant='error'
        className='mb-1'
      >
        <span className='text-center'>Yakin, Batalkan Level Up</span>
      </Button>
      <br />
      <Table
        header={headersGlosarium}
        item={itemGlosarium}
      />
      <br />
      <Filter
        troops={itemTroops}
        level={itemLevel}
      />
      <br />
      <CardHistory
        title='Swordsman'
        subTitle='Total Rewards'
        point={1000}
      />
      <br />
      <CardHistoryDetail
        title='Jamimas'
        image={JAMIMAS}
        point={10000}
      />
      <br />
      <CardPoint
        avatarImage='/images/person-default.png'
        level='knight'
        name='Gusna'
        point={1000}
      />
      <br />
      <CardAboutUs
        title='Apa yang paling penting buat kamu?'
      />
      <br />
      <Emblem
        items={itemEmblem}
      />
      <br />
      <CardAddArmy />
      <br />
      <br />
      <BottomSheetComponent
        sheetOpen={sheet}
        onDismiss={onDismiss}
      >
        <br />
        <br />
        <Button
          type='button'
          variant='primary'
          className='mb-1'
        >
          <span className='text-center'>Treasury Army</span>
        </Button>
        <br />
        <Menu
          className='mb-1'
          image={THUMBS_UP}
          title='Dapat Banyak Rewards'
          subtitle='Skema rewards yang bikin semua senang'
        />
        <Menu
          className='mb-1'
          image={LEVEL_UP}
          title='Langsung Didaftarkan Level'
          subtitle='Menjadi Knight Lieutenant'
        />
        <Menu
          className='mb-1'
          image={COIN}
          title='Syarat Gabung Mudah'
          subtitle='Cukup bertransaksi Rp 500.000*'
        />
        <PercentProgressBar percent={30} />
        <br />
        <NumberProgressBar progress={4} total={4} />
        <Menu
          className='mb-1'
          image={THUMBS_UP}
          title='Dapat Banyak Rewards'
          subtitle='Skema rewards yang bikin semua senang'
        />
        <Menu
          className='mb-1'
          image={LEVEL_UP}
          title='Langsung Didaftarkan Level'
          subtitle='Menjadi Knight Lieutenant'
        />
        <Menu
          className='mb-1'
          image={COIN}
          title='Syarat Gabung Mudah'
          subtitle='Cukup bertransaksi Rp 500.000*'
        />
        <PercentProgressBar percent={30} />
        <br />
        <NumberProgressBar progress={4} total={4} />
      </BottomSheetComponent>
    </Base>
  )
}

export default example
