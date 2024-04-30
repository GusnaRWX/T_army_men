import React from 'react'
import styled from '@emotion/styled'
import Button from '@/components/_shared/Button'
import { useAppDispatch } from '@/hooks/index'
import { postOnBoardingRequest } from '@/store/reducers/slice/onboarding/onboardingTermsSlice'

const HomeButtonWrapper = styled.div`
  background: #FAF7EA;
  height: 62px;
  position: relative;
  top: 35px;
`

const ButtonWrapper = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 85%;
`

function HomeButtonComponent () {
  const dispatch = useAppDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: postOnBoardingRequest.toString()
    })
  }
  return (
    <HomeButtonWrapper>
      <ButtonWrapper>
        <Button
          type='button'
          variant='primary'
          className='fluid'
          onClick={(e) => handleSubmit(e)}
        >
          <span className='text-center'>
            GABUNG TREASURY ARMY
          </span>
        </Button>
      </ButtonWrapper>
    </HomeButtonWrapper>
  )
}

export default HomeButtonComponent
