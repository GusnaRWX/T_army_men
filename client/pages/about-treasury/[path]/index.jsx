/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { withRouter } from 'next/router'
import AboutTreasuryMenuComponent from '@/components/about-treasury/menu/AboutTreasuryMenuComponent'
// import { authProps } from '@/props/server/authProps'
import WithProtect from '@/components/_shared/WithProtect'
function index({
  router
}) {
  // useEffect(() => {
  //   authProps()
  // }, [])

  return (
    <AboutTreasuryMenuComponent
      router={router}
    />
  )
}

export default WithProtect(withRouter(index))
