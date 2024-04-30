import React from 'react'
import PropTypes from 'prop-types'
import Modal from '@/components/_shared/Modal'
import Button from '@/components/_shared/Button'
import styled from '@emotion/styled'

const ConfirmWrapperStyled = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

const LabelHeader = styled.p`
 font-size: 18px;
 font-weight: 500;
`

const ContentLabel = styled.p`
 font-size: 14px;
 font-weight: 400;
 color: #606060;
`

function ModalConfirmMentorComponent ({
  open,
  onSubmit = () => { },
  onCancel = () => { }
}) {
  return (
    <Modal
      open={open}
      clickAway={false}
    >
      <ConfirmWrapperStyled>
        <LabelHeader>
          Apakah kamu yakin tidak mempunyai
        </LabelHeader>
        <LabelHeader>
          kode referral chief?
        </LabelHeader>
        <ContentLabel>
          Jika kamu mempunyai kode referral Chief, pilih
        </ContentLabel>
        <div style={{
          fontSize: '14px',
          fontWeight: '400',
          color: '#606060'
        }}>
          <q>Batalkan</q> dan isi kode referral Chief di kolom
        </div>
        <ContentLabel className='mb-2'>
          yang sudah disediakan
        </ContentLabel>
        <Button
          variant='primary'
          type='button'
          style={{
            marginBottom: '.5rem'
          }}
          onClick={onSubmit}
        >
          <span className='text-center'>Ya, Pilihkan Aku Chief</span>
        </Button>
        <Button
          variant='text'
          type='button'
          onClick={onCancel}
        >
          <span className='text-center'>Batalkan</span>
        </Button>
      </ConfirmWrapperStyled>
    </Modal>
  )
}

ModalConfirmMentorComponent.propTypes = {
  open: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
}

export default ModalConfirmMentorComponent
