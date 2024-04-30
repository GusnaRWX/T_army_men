import CodeReferralComponent from '@/components/onboarding/code-referral/CodeReferralComponent'
import React from 'react'
import { useAppDispatch, useAppSelectors } from '@/hooks/index'
import { postCodeReferralMentorRequest, postMentorSagaRequest } from '@/store/reducers/slice/onboarding/codeReferralMentorsSlice'

function CodeReferralContainer() {
  const dispatch = useAppDispatch()
  const selector = useAppSelectors((state) => state.codeReferralMentor)
  const response = useAppSelectors((state) => state.responser)
  const postReferralCodeMentor = (input) => {
    dispatch({
      type: postCodeReferralMentorRequest.toString(),
      payload: input
    })
  }

  const postFindMentor = (input) => {
    dispatch({
      type: postMentorSagaRequest.toString(),
      payload: input
    })
  }
  return (
    <CodeReferralComponent
      data={selector}
      response={response}
      postReferralCodeMentor={postReferralCodeMentor}
      postFindMentor={postFindMentor}
    />
  )
}

export default CodeReferralContainer
