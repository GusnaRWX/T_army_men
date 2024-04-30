import React from 'react'
import PropTypes from 'prop-types'
import { BaseWrapper, BaseContainer } from './baseStyled'
import Header from './Header'

function Base ({
  children,
  headerLess = false,
  parent,
  pageName,
  changePage,
  logout = false
}) {
  return (
    <BaseWrapper>
      {
        headerLess && (
          <Header
            parent={parent}
            label={pageName}
            onClick={changePage}
            isLogout={logout}
          />
        )
      }
      <BaseContainer>
        {children}
      </BaseContainer>
    </BaseWrapper>
  )
}

Base.propTypes = {
  children: PropTypes.node,
  headerLess: PropTypes.bool,
  parent: PropTypes.bool,
  pageName: PropTypes.string,
  changePage: PropTypes.func,
  logout: PropTypes.bool
}

export default Base
