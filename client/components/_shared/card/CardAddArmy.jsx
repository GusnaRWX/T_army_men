import React from 'react'
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'
import { CardAddArmyStyled } from './cardStyled'
import Image from 'next/image'
import AddButton from '../AddButton'
import { ADD_ARMY, ADD_FILL } from '@/utils/IconConstant'

function CardAddArmy ({
  onClick
}) {
  return (
    <CardAddArmyStyled>
      <Image
        src={ADD_ARMY}
        alt='add-army'
        width={115}
        height={115}
        style={{
          borderRadius: '12px'
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AddButton
          variant='primary'
          type='button'
          label=''
          icon={ADD_FILL}
          onClick={onClick}
        />
        <p>
          Undang Army Pertama-Mu!
        </p>
      </div>
    </CardAddArmyStyled>
  )
}

CardAddArmy.propTypes = {
  onClick: PropTypes.func
}

export default CardAddArmy
