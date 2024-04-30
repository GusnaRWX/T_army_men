import React, { useState } from 'react'
import styled from '@emotion/styled'
import { BaseWrapper } from '@/components/core/baseStyled'
import HomeInformationComponent from './HomeInformationComponent'
import HomeListComponent from './HomeListComponent'
import HomeSheetComponent from './HomeSheetComponent'
import HomeButtonComponent from './HomeButtonComponent'
import PropTypes from 'prop-types'

const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 450px;
    background: #FAF7EA;
    overflow-x: auto;
`

const HomeWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
`

function HomeComponent({
  data
}) {
  const [sheet, setSheet] = useState({
    rewards: false,
    upLevel: false,
    terms: false
  })

  const handleOpenSheet = (type) => {
    if (type === 'rewards') setSheet({ rewards: !sheet.rewards })
    if (type === 'upLevel') setSheet({ upLevel: !sheet.upLevel })
    if (type === 'terms') setSheet({ terms: !sheet.terms })
  }

  const handleCloseSheet = (type) => {
    if (type === 'rewards') setSheet({ rewards: false })
    if (type === 'upLevel') setSheet({ upLevel: false })
    if (type === 'terms') setSheet({ terms: false })
  }

  return (
    <BaseWrapper>
      <HomeContainer>
        <HomeWrapper>
          <HomeInformationComponent />
          <HomeListComponent
            handleOpenSheet={handleOpenSheet}
          />
          <HomeSheetComponent
            openSheet={sheet}
            handleLevelOpenSheet={handleOpenSheet}
            handleCloseSheet={handleCloseSheet}
            requirements={data?.requirements}
          />
        </HomeWrapper>
        <HomeButtonComponent />
      </HomeContainer>
    </BaseWrapper>
  )
}

HomeComponent.propTypes = {
  data: PropTypes.object
}

export default HomeComponent
