/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Base from '@/components/core/Base'
import styled from '@emotion/styled'
import CodeReferralFormComponent from './CodeReferralFormComponent'
import { useForm } from '@/hooks/index'
import CodeReferralButtonComponent from './CodeReferralButtonComponent'
import CodeReferralModalComponent from './CodeReferralModalComponent'
import CodeReferralModalMentorComponent from './CodeReferralModalMentorComponent'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import LoadingComponent from '@/components/_shared/LoadingComponent'
import Modal from '../../_shared/Modal'
import { removeWhiteSpace } from '@/utils/helpers'
import ModalConfirmMentorComponent from './ModalConfirmMentorComponent'

const WrapperCode = styled.div`
  padding-right: 10px;
  padding-left: 10px;
  margin: 24px 0;
`

const WrapperCodeInformation = styled.div`
  margin-bottom: 24px;
`

function CodeReferralComponent ({
  data,
  response,
  postReferralCodeMentor = () => { },
  postFindMentor = () => { }
}) {
  // eslint-disable-next-line no-unused-vars
  const [confirm, setConfirm] = useState(false)
  const [initialValues, setInitialValues] = useState({
    code: ''
  })

  const [isWhiteSpace, setIsWhiteSpace] = useState({
    status: false,
    message: ''
  })

  const router = useRouter()

  const validate = (fieldOfValues = values) => {
    const temp = { ...errors }

    if ('code' in fieldOfValues)
      temp.code = fieldOfValues.code && ''

    setErrors({
      ...temp
    })

    if (fieldOfValues === values)
      return Object.values(temp).every(x => x === '')
  }

  const {
    values,
    errors,
    setErrors,
    resetForm,
    handleInputChange
  } = useForm(initialValues, true, validate)

  // * watch spacing in code
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

  const handleSubmit = () => {
    if (validate() && values.code.length >= 1 && isWhiteSpace.status === false) {
      const payload = new FormData()
      payload.append('referral_code', `army-${router.query.code}`)
      payload.append('mentor_referral_code', `army-${values.code}`)
      postFindMentor(payload)
      resetForm()
    }
  }

  // eslint-disable-next-line no-unused-vars
  const handleChooseMentor = () => {
    const payload = new FormData()
    payload.append('referral_code', `army-${router.query.code}`)
    payload.append('mentor_referral_code', `army-`)
    postFindMentor(payload)
    setConfirm(false)
  }

  return (
    <Base
      headerLess={true}
      parent={false}
      pageName='Treasury Army'
      changePage={() => { router.back() }}
    >
      {
        data?.loading === false &&
        (
          <WrapperCode>
            <WrapperCodeInformation>
              <h6
                style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  marginBottom: '20px'
                }}
              >
                Masukan Kode Referral Chief
              </h6>
              <p style={{
                lineHeight: '1.2'
              }}>
                Jangan khawatir, jika kamu tidak mempunyai
                kode referral Chief, Treasury akan mendelegasikan
                Chief terbaik untuk kamu!
              </p>
            </WrapperCodeInformation>
            <CodeReferralFormComponent
              values={values}
              errors={errors}
              onChange={handleInputChange}
              isWhiteSpace={isWhiteSpace}
            />
            <CodeReferralButtonComponent
              code={values.code}
              onSubmit={handleSubmit}
              handleChooseMentor={() => setConfirm(true)}
              isWhiteSpace={isWhiteSpace}
            />
            <CodeReferralModalComponent
              open={data.modal.findMentor}
            />
            <CodeReferralModalMentorComponent
              data={data.mentor}
              open={data.modal.foundMentor}
            />
            <ModalConfirmMentorComponent
              open={confirm}
              onCancel={() => setConfirm(false)}
              onSubmit={handleChooseMentor}
            />
          </WrapperCode>
        )
      }
      {
        data?.loading === true && (
          <Modal
            open={data?.loading}
            clickAway={false}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <p>Tunggu Sebentar...</p>
              <LoadingComponent />
            </div>
          </Modal>
        )
      }
    </Base>
  )
}

CodeReferralComponent.propTypes = {
  data: PropTypes.object,
  response: PropTypes.object,
  postReferralCodeMentor: PropTypes.func,
  postFindMentor: PropTypes.func
}

export default CodeReferralComponent
