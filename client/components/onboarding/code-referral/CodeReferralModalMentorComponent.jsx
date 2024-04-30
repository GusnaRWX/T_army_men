import React from 'react'
import Modal from '@/components/_shared/Modal'
import PropTypes from 'prop-types'
import Avatar from '@/components/_shared/Avatar'
import styled from '@emotion/styled'
import Icon from '@/components/_shared/Icon'
import { COPY } from '@/utils/IconConstant'
import Button from '@/components/_shared/Button'
import Router from 'next/router'
import { copy } from '@/utils/helpers'

const ParagraphInformation = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
`

const WrapperPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  gap: 0 5px;
`

function CodeReferralModalMentorComponent({
  data,
  open
}) {
  return (
    <Modal
      open={open}
      clickAway={false}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <ParagraphInformation>
          Selamat bergabung! Berikut ini adalah profil Chief-mu:
        </ParagraphInformation>
        <Avatar
          avatarImage={data?.mentor_image}
          status={data?.mentor_tier_name}
          level={data?.mentor_tier_id}
          name={data?.mentor_name}
        />
        <WrapperPhone>
          <div>
            <p
              style={{
                fontSize: '14px',
                color: '#606060'
              }}
            >
              {data?.mentor_phone}
            </p>
          </div>
          <div
            style={{
              cursor: 'pointer'
            }}
            onClick={() => { copy(data?.mentor_phone, 'Nomer HP Tersalin') }}
          >
            <Icon
              src={COPY}
              size={14}
            />
          </div>
        </WrapperPhone>
        <Button
          type='submit'
          variant='primary'
          className='mt-2 fluid'
          onClick={() => Router.push('/')}
        >
          <span className='text-center'>
            Lanjutkan
          </span>
        </Button>
      </div>
    </Modal>
  )
}

CodeReferralModalMentorComponent.propTypes = {
  data: PropTypes.object,
  open: PropTypes.bool
}

export default CodeReferralModalMentorComponent
