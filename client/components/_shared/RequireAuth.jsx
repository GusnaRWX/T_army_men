import React from 'react'
import PropTypes from 'prop-types'
import { getStorage } from '@/utils/storage'
import Router from 'next/router'

function RequireAuth ({
  children
}) {
  const token = JSON.parse(getStorage('_treasury_army_token'))
  const isArmy = JSON.parse(getStorage('_is_army'))

  if (token === null || typeof token === 'undefined') {
    Router.push('/auth/login')
  }

  if (isArmy === null || typeof token === 'undefined') {
    Router.push('/auth/login')
  } else if (isArmy === false) {
    Router.push('/onboarding')
  } else {
    Router.push('/')
  }
  return (
    <>
      {children}
    </>
  )
}

RequireAuth.propTypes = {
  children: PropTypes.node
}

export default RequireAuth
