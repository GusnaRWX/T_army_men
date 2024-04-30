import React from 'react'
import ListArmyComponent from '@/components/list-army/ListArmyComponent'
import { useAppSelectors, useAppDispatch } from '@/hooks/index'
import { postListArmyRequest, downloadListArmyRequest } from '@/store/reducers/slice/listArmySlice'

function ListArmyContainer() {
  const dispatch = useAppDispatch()
  const data = useAppSelectors(state => state.listArmy)
  const handleFilter = (payload) => {
    dispatch({
      type: postListArmyRequest.toString(),
      payload
    })
  }
  const handleDownloadFile = (payload) => {
    dispatch({
      type: downloadListArmyRequest.toString(),
      payload
    })
  }
  return (
    <ListArmyComponent
      data={data}
      handleFilter={handleFilter}
      handleDownloadFile={handleDownloadFile}
    />
  )
}

export default ListArmyContainer
