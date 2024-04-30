import React, { Fragment } from 'react'
import Image from 'next/image'

function HomeInformationComponent() {
  return (
    <Fragment>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Image
          src='/images/treasury-lion.svg'
          alt='onboarding'
          width={240}
          height={240}
        />
      </div>
      <div style={{
        margin: '20px auto',
        width: '320px',
        display: 'block'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: '700',
          lineHeight: '1.4',
          textAlign: 'center'
        }}>
          Banyak Keuntungan <br />
          dari Setiap Mission di Sini!
        </h3>
        <p style={{
          marginTop: '12px',
          lineHeight: '1.6',
          textAlign: 'center'
        }}>
          Mari gerakkan Army-mu <br />
          kapanpun, dimanapun & sesuka hatimu
        </p>
      </div>
    </Fragment>
  )
}

export default HomeInformationComponent
