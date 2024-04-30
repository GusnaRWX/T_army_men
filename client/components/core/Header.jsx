import React, { Fragment } from 'react'
import {
  MainHeaderWrapper,
  MainHeaderParentWrapper,
  MainHeaderLogoutWrapper,
  LogoutWrapper,
  LogoutLabel
} from './headerStyled'
import Icon from '../_shared/Icon'
import { ARROW_LEFT, LOGOUT } from '@/utils/IconConstant'
import { ClassNames } from '@emotion/react'
import PropTypes from 'prop-types'
import { clearStorage } from '@/utils/storage'
import Router from 'next/router'

function Header ({
  parent,
  label,
  onClick,
  isLogout
}) {
  const handleLogout = async () => {
    await clearStorage(['_treasury_army_token', '_is_army', '_is_onboarding'])
    Router.push('/auth/login')
  }
  return (
    <ClassNames>
      {({ css }) => (
        <Fragment>
          {
            parent === false && (
              <MainHeaderWrapper>
                <div
                  onClick={onClick}
                >
                  <Icon
                    src={ARROW_LEFT}
                    size={12}
                    style={{
                      cursor: 'pointer'
                    }}
                  />
                </div>
                <div
                  className={
                    css`
                   display: flex;
                   flex-direction: row;
                   align-items: center;
                   justify-content: center;
                   width: 400px;
                  `
                  }
                >
                  <h4
                    className={
                      css`
                    color: #959595;
                    `
                    }
                  >{label}</h4>
                </div>
              </MainHeaderWrapper>
            )
          }
          {
            parent === true && (
              isLogout === false
                ? (
                  <MainHeaderParentWrapper>
                    <h4
                      className={
                        css`
                    color: #959595;
                    `
                      }
                    >{label}</h4>
                  </MainHeaderParentWrapper>
                )
                : (
                  <MainHeaderLogoutWrapper>
                    <h4
                      className={
                        css`
                    color: #959595;
                    `
                      }
                    >{label}</h4>
                    <LogoutWrapper
                      onClick={() => handleLogout()}
                    >
                      <Icon
                        src={LOGOUT}
                        alt='logout'
                        width={12}
                        height={12}
                      />
                      <LogoutLabel>Keluar</LogoutLabel>
                    </LogoutWrapper>
                  </MainHeaderLogoutWrapper>
                )
            )
          }
        </Fragment>
      )}
    </ClassNames>
  )
}

Header.propTypes = {
  parent: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  isLogout: PropTypes.bool
}

export default Header
