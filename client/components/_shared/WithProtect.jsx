/* eslint-disable react/display-name */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useRouter } from 'next/router'
import { getStorage } from '@/utils/storage'

const WithProtect = (Wrapped) => {
  return (props) => {
    if (typeof window !== 'undefined') {
      const router = useRouter()

      const accessToken = getStorage('_treasury_army_token')

      if (!accessToken) {
        router.push('/auth/login')
        return null
      }

      return <Wrapped {...props} />
    }

    return null
  }
}

export default WithProtect
