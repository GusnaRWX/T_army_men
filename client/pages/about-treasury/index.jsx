/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import AboutTreasuryComponent from '@/components/about-treasury/AboutTreasuryComponent'
// import { authProps } from '@/props/server/authProps'
import WithProtect from '@/components/_shared/WithProtect'

function index() {
  // useEffect(() => {
  //   authProps()
  // }, [])
  return (
    <AboutTreasuryComponent />
  )
}

export default WithProtect(index)
