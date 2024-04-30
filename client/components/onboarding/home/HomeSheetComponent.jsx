import React, { Fragment } from 'react'
import BottomSheetComponent from '@/components/_shared/custom/BottomSheetComponent'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Icon from '@/components/_shared/Icon'
import { CHECKLIST, TERMS, THUMB_UP_STAR, BADGE_STAR, KNIGHT_LEGION, LEVEL_UP_KNIGHT } from '@/utils/IconConstant'
import Emblem from '@/components/_shared/Emblem'
import { headerSkemaRewards, newItemEmblem, itemSkemaRewards, allHeaderOnboarding, schemeRewardBuyGold, schemeRewardPanenEmas, schemeRewardsTitipEmas, schemeRewardsJamimas } from '@/utils/siteSetting'
import Table from '@/components/_shared/Table'
import Menu from '@/components/_shared/Menu'

const HeadingSheet = styled.div`
 background-color: #FAF7EA;
 height: 112px;
 padding-right: 18px;
 padding-left: 18px;
 padding-top: 24px;
 padding-bottom: 24px;
 display: flex;
 gap: 30px;
`

const ContentSheet = styled.div`
  margin-top: 24px;
  padding-right: 16px;
  padding-left: 16px;
`

const TermsStyle = styled.div`
  display: flex;
  flex-direction: column;
`

function HomeSheetComponent ({
  openSheet,
  requirements,
  handleCloseSheet = () => { },
  handleLevelOpenSheet = () => { },
  level = ''
}) {
  return (
    <Fragment>
      {
        openSheet.rewards === true && (
          <BottomSheetComponent
            sheetOpen={openSheet.rewards}
            onDismiss={() => { handleCloseSheet('rewards') }}
          >
            <HeadingSheet>
              <div>
                <Icon
                  src={THUMB_UP_STAR}
                  size={64}
                />
              </div>
              <div>
                <h2 style={{
                  lineHeight: '1.2',
                  fontWeight: '500'
                }}>
                  Skema Rewards Treasury Army
                </h2>
              </div>
            </HeadingSheet>
            <ContentSheet>
              <p style={{
                fontWeight: '400',
                marginBottom: '1rem'
              }}>
                Setiap naik level, kamu diberikan kesempatan dapat rewards lebih banyak!
              </p>
              <p className='fs-12 grey'>
                Pastikan kamu (paling tidak) sudah menjadi Knight Lieutenant, agar bisa mendapatkan rewards.
              </p>
              <div
                style={{
                  marginTop: '16px',
                  overflowX: 'scroll'
                }}
              >
                <Emblem
                  items={newItemEmblem}
                />
              </div>
              {/* Skema New Recruit */}
              <div style={{
                marginTop: '64px'
              }}>
                <p style={{
                  fontWeight: '500'
                }}>
                  Skema Rewards New Recruit
                </p>
                <div style={{
                  marginTop: '20px'
                }}>
                  <Table
                    header={headerSkemaRewards}
                  >
                    {
                      itemSkemaRewards?.map((v, i) => (
                        <tr key={i}>
                          <td><p>{v.troops}</p></td>
                          <td><p>{v.rewards}</p></td>
                          <td><p>{v.description}</p></td>
                        </tr>
                      ))
                    }
                  </Table>
                </div>
              </div>
              {/* End New Recruit */}
              {/* skema buy gold */}
              <div style={{
                marginTop: '34px'
              }}>
                <p style={{
                  fontWeight: '500'
                }}>
                  Skema Rewards Beli Emas
                </p>
                <div
                  style={{
                    marginTop: '20px'
                  }}
                >
                  <Table
                    header={allHeaderOnboarding}
                  >
                    {
                      schemeRewardBuyGold?.map((item, index) => (
                        <tr key={index}>
                          <td><p>{item.troops}</p></td>
                          <td><p>{item.rewards}</p></td>
                          <td><p>{item.description}</p></td>
                        </tr>
                      ))
                    }
                  </Table>
                </div>
              </div>
              {/* End skema buy gold */}
              {/* Skema Rewards Panen Emas */}
              <div
                style={{
                  marginTop: '34px'
                }}
              >
                <p style={{
                  fontWeight: '500'
                }}>
                  Skema Rewards Panen Emas
                </p>
                <div
                  style={{
                    marginTop: '20px'
                  }}
                >
                  <Table
                    header={allHeaderOnboarding}
                  >
                    {
                      schemeRewardPanenEmas?.map((item, index) => (
                        <tr key={index}>
                          <td><p>{item.troops}</p></td>
                          <td><p>{item.rewards}</p></td>
                          <td><p>{item.description}</p></td>
                        </tr>
                      ))
                    }
                  </Table>
                </div>
              </div>
              {/* End Rewards Panne EMAS */}
              {/* Skema Rewards Titip Emas */}
              <div
                style={{
                  marginTop: '34px'
                }}
              >
                <p style={{
                  fontWeight: '500'
                }}>
                  Skema Rewards Titip Emas
                </p>
                <div
                  style={{
                    marginTop: '20px'
                  }}
                >
                  <Table
                    header={allHeaderOnboarding}
                  >
                    {
                      schemeRewardsTitipEmas?.map((item, index) => (
                        <tr key={index}>
                          <td><p>{item.troops}</p></td>
                          <td><p>{item.rewards}</p></td>
                          <td><p>{item.description}</p></td>
                        </tr>
                      ))
                    }
                  </Table>
                </div>
              </div>
              {/* End Rewards Tiitp Emas */}
              {/* Skema Rwards Jamimas */}
              <div
                style={{
                  marginTop: '34px',
                  marginBottom: '20px'
                }}
              >
                <p style={{
                  fontWeight: '500'
                }}>
                  Skema Rewards Jamimas
                </p>
                <div
                  style={{
                    marginTop: '20px'
                  }}
                >
                  <Table
                    header={allHeaderOnboarding}
                  >
                    {
                      schemeRewardsJamimas?.map((item, index) => (
                        <tr key={index}>
                          <td><p>{item.troops}</p></td>
                          <td><p>{item.rewards}</p></td>
                          <td><p>{item.description}</p></td>
                        </tr>
                      ))
                    }
                  </Table>
                </div>
              </div>
              {/* End Rewards Jamimas */}
            </ContentSheet>
          </BottomSheetComponent>
        )
      }
      {
        openSheet.upLevel === true && (
          <BottomSheetComponent
            sheetOpen={openSheet.upLevel}
            onDismiss={() => { handleCloseSheet('upLevel') }}
            dynamic={true}
            snapHeight={0.7}
            inHeight={5}
          >
            <HeadingSheet>
              <div>
                <Icon
                  src={LEVEL_UP_KNIGHT}
                  size={64}
                />
              </div>
              <div>
                <h2 style={{
                  lineHeight: '1.2',
                  fontWeight: '400'
                }}>
                  Naik kelas menjadi
                  <br />
                  <span style={{
                    fontWeight: '600'
                  }}>Knight Lieutenant</span>
                </h2>
              </div>
            </HeadingSheet>
            <ContentSheet className='mb-1'>
              <div style={{
                marginBottom: '40px'
              }}>
                <p style={{
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}>
                  Rewards yang kamu dapat kalau menjadi <span style={{ fontWeight: '500' }}>Knight Lieutenant</span>:
                </p>
                <div style={{
                  marginTop: '16px'
                }}>
                  <Menu
                    className='mb-1'
                    image={BADGE_STAR}
                    title='Dapat Rewards Swordsman'
                    isIcon
                    onClick={() => { handleLevelOpenSheet('rewards') }}
                  // subtitle='Skema rewards yang bikin semua senang'
                  />
                </div>
              </div>
              <div>
                <p style={{
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}>
                  Dalam kurun waktu <span style={{ fontWeight: '500' }}>60 Hari</span>, kamu harus memenuhi mission berikut ini:
                </p>
                <div style={{
                  marginTop: '16px'
                }}>
                  <Menu
                    className='mb-1'
                    image={KNIGHT_LEGION}
                    title='Mendapatkan 2 Knights'
                  // subtitle='Skema rewards yang bikin semua senang'
                  />
                </div>
              </div>
            </ContentSheet>
          </BottomSheetComponent>
        )
      }
      {
        openSheet.terms === true && (
          <BottomSheetComponent
            sheetOpen={openSheet?.terms}
            onDismiss={() => { handleCloseSheet('terms') }}
            dynamic={true}
          >
            <HeadingSheet>
              <div>
                <Icon
                  src={TERMS}
                  size={64}
                />
              </div>
              <div>
                <h2 style={{
                  lineHeight: '1.2',
                  fontWeight: '500'
                }}>
                  {requirements?.title}
                </h2>
              </div>
            </HeadingSheet>
            <ContentSheet className='mb-1'>
              <TermsStyle>
                {
                  requirements?.details?.map((val, i) => (
                    <div
                      key={i}
                      style={{
                        marginBottom: '20px'
                      }}
                    >
                      <p
                        style={{
                          marginBottom: '20px',
                          fontWeight: '700'
                        }}
                      >
                        {val.title}
                      </p>
                      {
                        val.details?.map((v, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              // gap: '20px',
                              marginBottom: '10px',
                              alignItems: 'center',
                              justifyContent: 'flex-end'
                            }}
                          >
                            <div style={{
                              width: '10%'
                            }}>
                              <Icon
                                src={CHECKLIST}
                                size={20}
                              />
                            </div>
                            <div style={{
                              width: '85%'
                            }}>
                              <p>{v}</p>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </TermsStyle>
            </ContentSheet>
          </BottomSheetComponent>
        )
      }
    </Fragment>
  )
}

HomeSheetComponent.propTypes = {
  openSheet: PropTypes.object,
  requirements: PropTypes.object,
  handleCloseSheet: PropTypes.func,
  handleLevelOpenSheet: PropTypes.func,
  level: PropTypes.any
}

export default HomeSheetComponent
