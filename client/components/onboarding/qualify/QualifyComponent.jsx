/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Base from '@/components/core/Base'
import QualifyFormComponent from './QualifyFormComponent'
import { useForm } from '@/hooks/index'
import QualifyInformationComponent from './QualifyInformationComponent'
import QualifySubmitComponent from './QualifySubmitComponent'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { removeWhiteSpace } from '@/utils/helpers'
import { getStorage } from '@/utils/storage'
import Modal from '@/components/_shared/Modal'
import LoadingComponent from '@/components/_shared/LoadingComponent'
import CodeReferralModalMentorComponent from '../code-referral/CodeReferralModalMentorComponent'
import CodeReferralModalComponent from '../code-referral/CodeReferralModalComponent'

function QualifyComponent ({
  data,
  response,
  postReferralCode = () => { },
  postConditionalRegister = () => { },
  checkReferralCode = () => { }
}) {
  const [initialValues, setInitialValues] = useState({
    code: ''
  })

  const [haveMentor, setHaveMentor] = useState('')
  const [checked, setChecked] = useState(false)
  const [validateError, setValidateError] = useState(true)
  const [iswhiteSpace, setIsWhiteSpace] = useState({
    status: false,
    message: ''
  })
  const [mounted, setMounted] = useState(false)
  const [statusButton, setStatusButton] = useState(false)

  const checkStatus = data?.terms.status === true

  const router = useRouter()

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('code' in fieldOfValues)
      temp.code = fieldOfValues.code ? '' : 'Kode referral tidak boleh kosong'

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  useEffect(() => {
    function getHaveMentor () {
      const isMentor = getStorage('_is_have_mentor')
      setHaveMentor(isMentor)
    }
    getHaveMentor()
  }, [])

  const {
    values,
    errors,
    setErrors,
    handleInputChange
  } = useForm(initialValues, true, validate)

  useEffect(() => {
    function hitReferralCode () {
      if (values.code !== '') {
        checkReferralCode({ referral_code: `army-${values.code}` })
        if (response?.code === 200) {
          setStatusButton(false)
        } else {
          setStatusButton(true)
        }
      }
    }
    hitReferralCode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  // * Watch whitespace in referral code
  useEffect(() => {
    function watchWhiteSpace () {
      if (removeWhiteSpace(values.code)) {
        setIsWhiteSpace({
          status: true,
          message: 'Kode referral tidak boleh mengandung spasi'
        })
      } else {
        setIsWhiteSpace({
          status: false,
          message: ''
        })
      }
    }

    watchWhiteSpace()
  }, [values.code])

  const handleChecked = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    function checkResponse () {
      if (response?.code === 200) {
        setValidateError(false)
      } else {
        setValidateError(true)
      }
    }
    checkResponse()
  }, [response])

  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 3000)
  }, [])

  const handleSubmit = () => {
    if (validate() && statusButton === false && checked === true && iswhiteSpace.status === false) {
      const payload = {
        referral_code: `army-${values.code}`
      }
      postReferralCode(payload)
      if (response.code === 200) {
        if (haveMentor === 'true') {
          postConditionalRegister(payload)
        } else {
          setTimeout(() => {
            router.push({
              pathname: '/onboarding/code-referral/',
              query: { code: values.code }
            })
          }, 3000)
        }
      }
    }
  }
  const handleBack = () => {
    router.back()
  }
  return (
    <Base
      headerLess={true}
      parent={true}
      pageName='Treasury Army'
    >
      {
        mounted === true && (
          <>
            <QualifyInformationComponent
              data={data?.terms}
              message={data?.message}
            />
            {
              checkStatus === true && (
                <QualifyFormComponent
                  values={values}
                  errors={errors}
                  response={response}
                  onChange={handleInputChange}
                  isWhiteSpace={iswhiteSpace}
                />
              )
            }
            <QualifySubmitComponent
              checked={checked}
              error={validateError}
              statusButton={statusButton}
              response={response}
              handleChecked={handleChecked}
              onSubmit={handleSubmit}
              checkStatus={checkStatus}
              handleBack={handleBack}
              isWhiteSpace={iswhiteSpace}
            />
            {
              data?.mentorLoading === false
                ? <CodeReferralModalMentorComponent
                  data={data?.mentor}
                  open={data?.mentorModal}
                />
                : <CodeReferralModalComponent
                  open={data?.mentorLoading}
                />
            }
          </>
        )
      }
    </Base>
  )
}

QualifyComponent.propTypes = {
  data: PropTypes.object,
  response: PropTypes.object,
  postReferralCode: PropTypes.func,
  postConditionalRegister: PropTypes.func,
  checkReferralCode: PropTypes.func
}

export default QualifyComponent
