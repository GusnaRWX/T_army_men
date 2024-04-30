/* eslint-disable indent */
import React, { useEffect, useCallback } from 'react'
import Base from '@/components/core/Base'
import PropTypes from 'prop-types'
import Glosarium from './list/Glosarium'
import TermAndCondition from './list/TermAndCondition'
import Whats from './list/Whats'
import FAQ from './list/FAQ'

function AboutTreasuryMenuComponent({
  router
}) {
  // * Waiting for router.isReady is true 
  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (!router.isReady) return
  }, [router])

  const renderContent = useCallback(() => {
    switch (router.query.path) {
      case 'apa-itu':
        return <Whats />
      case 'glosarium':
        return <Glosarium />
      case 'faq':
        return <FAQ />
      case 'syarat-dan-ketentuan':
        return <TermAndCondition />
      default:
        return null
    }
  }, [router])

  return (
    <Base
      headerLess={true}
      parent={false}
      pageName='Tentang Treasury Army'
      changePage={() => { router.back() }}
    >
      {renderContent()}
    </Base>
  )
}

AboutTreasuryMenuComponent.propTypes = {
  router: PropTypes.object
}

export default AboutTreasuryMenuComponent
