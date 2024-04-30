import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { WHATSAPP, COPY } from '@/utils/IconConstant'
import BottomSheetComponent from '../_shared/custom/BottomSheetComponent'
import AddButton from '../_shared/AddButton'
import { InviteArmyStyled, ButtonWrapperStyled, ReferralBoxStyled } from './homeStyled'
import Icon from '@/components/_shared/Icon'
import { copy } from '@/utils/helpers'
import Button from '../_shared/Button'

function InviteArmyComponent ({
  open,
  onClose,
  referral,
  deepLink
}) {
  const [show, setShow] = useState(true)
  const handleReset = () => {
    onClose()
    setShow(true)
  }
  const handleShow = () => {
    setShow(true)
  }
  const handleDeeplink = () => {
    copy(deepLink, 'Tautan Undangan Tersalin')
  }
  return (
    <BottomSheetComponent
      sheetOpen={open}
      onDismiss={handleReset}
      dynamic={true}
      inHeight={1}
      snapHeight={0.42}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <p className='fs-16 bold'>
          Undang Army
        </p>
      </div>
      {
        !show && (
          <>
            <InviteArmyStyled>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2rem',
                  marginBottom: '2rem',
                  gap: '3px'
                }}
              >
                <span className='text-center' style={{ color: '#606060' }}>
                  Daftar Treasury Army menggunakan referral code:
                </span>
                <span className='text-center' style={{ color: '#606060' }}>
                  {referral}
                </span>
              </div>
              <ButtonWrapperStyled>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: '12px'
                  }}
                >
                  <Icon
                    src={WHATSAPP}
                    size={67}
                    style={{
                      margin: '0'
                    }}
                  />
                  <p>
                    Whatsapp
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    gap: '9px',
                    paddingTop: '.5rem'
                  }}
                  onClick={handleShow}
                >
                  <AddButton
                    variant='primary'
                    type='button'
                    icon={COPY}
                    label=''
                  />
                  <p>
                    Salin Tautan
                  </p>
                </div>
              </ButtonWrapperStyled>
            </InviteArmyStyled>
          </>
        )
      }
      {
        show && (
          <>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '2rem',
                marginBottom: '1rem',
                gap: '1rem',
                paddingBottom: '1rem'
              }}
            >
              <span style={{ color: '#606060' }}>
                Bagikan referral code untuk menjadi Chief Army
              </span>
              <ReferralBoxStyled>
                <span style={{ color: '#4E3B95', fontWeight: 'bold' }}>{referral}</span>
                <div
                  style={{
                    cursor: 'pointer'
                  }}
                  onClick={() => copy(referral, 'Kode Referral Tersalin')}
                >
                  <Icon
                    src={COPY}
                    size={11}
                  />
                </div>
              </ReferralBoxStyled>
              <div className='mb-1'>
                <Button
                  variant='primary'
                  type='button'
                  onClick={handleDeeplink}
                >
                  Salin Tautan Undangan
                </Button>
              </div>
            </div>
          </>
        )
      }
    </BottomSheetComponent>
  )
}

InviteArmyComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  referral: PropTypes.string,
  deepLink: PropTypes.string
}

export default InviteArmyComponent
