import React from 'react'
import PropTypes from 'prop-types'
import Textfield from '@/components/_shared/form/Textfield'
import styled from '@emotion/styled'

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
`

function QualifyFormComponent ({
  values,
  errors,
  response,
  isWhiteSpace,
  onChange = () => { }
}) {
  return (
    <WrapperForm>
      <div>
        <div style={{
          marginBottom: '20px'
        }}>
          <div className='mb-2'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <p style={{
              fontSize: '16px',
              color: '#3B353C',
              fontWeight: '500'
            }}>Selamat! Kamu memenuhi syarat
            </p>
            <p style={{
              fontSize: '16px',
              color: '#3B353C',
              fontWeight: '500'
            }}>pendaftaran Treasury Army.
            </p>
          </div>
          <p style={{
            fontSize: '16px',
            color: '#3B353C',
            fontWeight: 'bold'
          }}>
            Sekarang, buat kode referral kamu yuk!
          </p>
          <p style={{
            fontSize: '14px',
            color: '#606060',
            fontWeight: '400',
            marginTop: '10px'
          }}>
            Kode ini dapat kamu gunakan untuk mengundang kerabat ikut serta dalam Treasury Army
          </p>
        </div>
        <Textfield
          name='code'
          // placeholder='Masukan Kode army-'
          error={errors.code || (response?.code === 400 ? response?.message : '') || isWhiteSpace.message}
          value={values.code}
          onChange={onChange}
          appendTextContent='Army-'
          appendText={true}
        />
      </div>
    </WrapperForm>
  )
}

QualifyFormComponent.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  response: PropTypes.object,
  isWhiteSpace: PropTypes.object,
  onChange: PropTypes.func
}

export default QualifyFormComponent
