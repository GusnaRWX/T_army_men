import React from 'react'
import HomeComponent from '@/components/home/HomeComponent'
import { useAppSelectors, useAppDispatch } from '@/hooks/index'
import { postLevelUpRequest, getPromoteUpRequest } from '@/store/reducers/slice/profileSlice'

function HomeContainer () {
  const profile = useAppSelectors(state => state.profile)
  const dispatch = useAppDispatch()
  const submitLevelUp = () => {
    dispatch({
      type: postLevelUpRequest.toString(),
      payload: {
        status: 1
      }
    })
  }
  const cancelLevelUp = () => {
    dispatch({
      type: postLevelUpRequest.toString(),
      payload: {
        status: 2
      }
    })
  }

  const getMission = (payload) => {
    dispatch({
      type: getPromoteUpRequest.toString(),
      payload
    })
  }
  return (
    <HomeComponent
      data={profile}
      onSubmitLevelUp={submitLevelUp}
      onCancelLevelUp={cancelLevelUp}
      getMission={getMission}
    />
  )
}

export default HomeContainer
