import React from 'react'
import Base from '../core/Base'
import CardAboutUs from '../_shared/card/CardAboutUs'
import { AboutWrapper } from './AboutTreasuryStyled'
import { useRouter } from 'next/router'
import { aboutUs } from '@/utils/siteSetting'

function AboutTreasuryComponent () {
  const router = useRouter()
  return (
    <Base
      headerLess={true}
      parent={false}
      changePage={() => router.push('/')}
      pageName='Tentang Treasury Army'
    >
      <AboutWrapper>
        {
          aboutUs?.map((v, i) => (
            <CardAboutUs
              title={v.text}
              key={i}
              onClick={() => router.push(v.path)}
            />
          ))
        }
      </AboutWrapper>
    </Base>
  )
}

export default AboutTreasuryComponent
