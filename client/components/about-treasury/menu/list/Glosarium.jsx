import React from 'react'
import Table from '@/components/_shared/Table'
import { headersGlosarium, itemGlosarium } from '@/utils/siteSetting'
import { AboutWrapperMenu } from '../../AboutTreasuryStyled'

function Glosarium() {
  return (
    <AboutWrapperMenu>
      <p
        style={{
          fontSize: '16px',
          fontWeight: '700',
          margin: '24px 0'
        }}
      >
        Glosarium
      </p>
      <Table
        header={headersGlosarium}
      >
        {
          itemGlosarium.map((v, i) => (
            <tr key={i}>
              <td><p>{v.value}</p></td>
              <td><p>{v.description}</p></td>
            </tr>
          ))
        }
      </Table>
    </AboutWrapperMenu>
  )
}

export default Glosarium
