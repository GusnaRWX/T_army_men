import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../_shared/Modal'
import { ProfileChiefWrapperStyled } from './homeStyled'
import Avatar from '../_shared/Avatar'
import Icon from '../_shared/Icon'
import { COPY } from '@/utils/IconConstant'
import Button from '../_shared/Button'
import { copy } from '@/utils/helpers'

function ProfileChiefComponent ({
  open,
  onClose,
  profile
}) {
  return (
    <>
      <Modal
        open={open}
        clickAway={false}
      >
        <ProfileChiefWrapperStyled>
          <div
            className='mb-1'
          >
            <p className='fs-16 bold'>Profile Chief</p>
          </div>
          <Avatar
            avatarImage='/images/person-default.png'
            status={profile.tierName}
            name={profile.name}
            level={profile.tierId}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '6px',
              marginBottom: '1rem'
            }}
          >
            <p className='fs-12 grey'>
              {profile.phone}
            </p>
            <div
              style={{
                cursor: 'pointer'
              }}
              onClick={() => copy(profile?.phone, 'Nomor HP Tersalin')}
            >
              <Icon
                src={COPY}
                size={11}
              />
            </div>
          </div>
          <Button
            variant='primary'
            type='button'
            onClick={onClose}
          >
            <span className='text-center'>Tutup</span>
          </Button>
        </ProfileChiefWrapperStyled>
      </Modal>
    </>
  )
}

ProfileChiefComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  profile: PropTypes.any
}

export default ProfileChiefComponent
