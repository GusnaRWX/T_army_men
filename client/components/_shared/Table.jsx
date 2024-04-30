import React from 'react'
import PropTypes from 'prop-types'
import { ClassNames } from '@emotion/react'

function Table({
  header,
  item,
  children
}) {
  return (
    <ClassNames>
      {({ css }) => (
        <>
          <table style={{
            width: '100%'
          }}>
            <thead>
              <tr>
                {
                  header.map((headers, index) => (
                    <th key={index}>{headers.text}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {/* {
                item.map((items, index) => (
                  <tr key={index}>
                    <td><p>{items.value}</p></td>
                    <td><p>{items.description}</p></td>
                  </tr>
                ))
              } */}
              {children}
            </tbody>
          </table>
        </>
      )}
    </ClassNames>
  )
}

Table.propTypes = {
  header: PropTypes.array,
  item: PropTypes.array,
  children: PropTypes.any
}

export default Table
