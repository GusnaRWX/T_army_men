/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import HomeContainer from '@/containers/home/HomeContainer'
import { authProps } from '@/props/server/authProps'
import { useAppDispatch } from '@/hooks/index'
import { getProfileRequest } from '@/store/reducers/slice/profileSlice'
// export async function getServerSideProps (ctx) {
//   return await authProps(ctx)
// }

function index() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    authProps()
    dispatch({ type: getProfileRequest.toString() })
  }, [])
  return (
    <HomeContainer />
  )
}

export default index
