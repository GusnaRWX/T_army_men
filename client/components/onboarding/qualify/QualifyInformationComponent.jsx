import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
// import { CHECKLIST, CLOSE } from '@/utils/IconConstant'
// import Icon from '@/components/_shared/Icon'
import PropTypes from 'prop-types'

const QualifyWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
`

// const QualifyTermsStyle = styled.div`
//   margin-top: 22px;
//   display: flex;
//   flex-direction: column;
//   padding-right: 20px;
//   padding-left: 20px;
// `

function QualifyInformationComponent({
  data,
  message
}) {
  return (
    <QualifyWrapper>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        {
          data?.status === true
            ? (
              <div style={{
                margin: '0 auto'
              }}>
                <Image
                  src='/images/treasury-mascot.png'
                  alt='treasury'
                  width={175}
                  height={175}
                />
              </div>
            )
            : (
              <>
                <div style={{
                  margin: '0 auto'
                }}>
                  <Image
                    src='/images/goldie-cry.png'
                    alt='failed'
                    width={175}
                    height={175}
                  />
                </div>
                <div
                  style={{
                    marginTop: '40px'
                  }}
                >
                  <h4
                    style={{
                      color: '#3B353C'
                    }}
                  >
                    Maaf, kamu belum memenuhi syarat pendaftaran Treasury Army, dikarenakan kamu tergabung di program referral lainnya.
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#606060',
                    fontWeight: '400',
                    marginTop: '10px'
                  }}>{data?.description}</p>
                </div>
              </>
            )
        }
      </div>
      {/* {
          data[0]?.status === false || data[1]?.status === false || data[2]?.status === false
            ? (

              <Image
                src='/images/goldie-cry.png'
                alt='failed'
                width={175}
                height={175}
              />
            )
            : (
              <Image
                src='/images/treasury-mascot.png'
                alt='treasury'
                width={175}
                height={175}
              />
            )
        } */}
      {/* <QualifyTermsStyle>
        {
          data.map((val, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'row',
                // gap: '20px',
                marginBottom: '20px',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '20%'
              }}>
                {
                  val.status === true
                    ? (
                      <Icon
                        src={CHECKLIST}
                        size={20}
                      />
                    )
                    : (
                      <Icon
                        src={CLOSE}
                        size={30}
                      />
                    )
                }

              </div>
              {
                val?.description === null && (
                  <div style={{
                    width: '80%'
                  }}>
                    <p>{val.name}</p>
                  </div>
                )
              }
              {
                val?.description !== null && (
                  <div
                    style={{
                      width: '80%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    <p className='fs-14'>{val?.name}</p>
                    <p className='fs-12 grey'>{val?.description}</p>
                  </div>
                )
              }
            </div>
          ))
        }
      </QualifyTermsStyle> */}
    </QualifyWrapper>
  )
}

QualifyInformationComponent.propTypes = {
  data: PropTypes.array,
  message: PropTypes.string
}

export default QualifyInformationComponent
