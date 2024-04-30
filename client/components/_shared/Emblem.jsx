import React from 'react'
import PropTypes from 'prop-types'
import { EmblemStyled } from './emblemStyled'
import Image from 'next/image'

function Emblem({ items }) {
  return (
    <EmblemStyled>
      {
        items.map((item, index) => (
          <div key={index}>
            <Image
              src={item.icon}
              alt='emblem'
              width={80}
              height={90}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
                // marginTop: '12px'
              }}
            >
              <p
                style={{
                  fontSize: '14px'
                }}
              >
                {item.title}
              </p>
              {
                item.tier !== ''
                  ? (
                    <p
                      style={{
                        fontSize: '14px'
                      }}
                    >
                      {item.tier}
                    </p>
                  )
                  : (
                    <div style={{ color: '#fff' }}>
                      <p>Knight</p>
                    </div>
                  )
              }

            </div>
          </div>
        ))
      }
    </EmblemStyled>
  )
}

Emblem.propTypes = {
  items: PropTypes.array
}

export default Emblem
