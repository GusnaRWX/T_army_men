/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import ListArmyContainer from '@/containers/list-army/ListArmyContainer'
import { authProps } from '@/props/server/authProps'
import { postListArmyRequest } from '@/store/reducers/slice/listArmySlice'
import { useAppDispatch } from '@/hooks/index'

export default function index () {
  const dispatch = useAppDispatch()
  useEffect(() => {
    authProps()
    dispatch({
      type: postListArmyRequest.toString(),
      payload: {}
    })
  }, [])
  return (
    <ListArmyContainer />
  )
}
