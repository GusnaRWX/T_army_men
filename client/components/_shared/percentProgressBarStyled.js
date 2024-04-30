import styled from '@emotion/styled'

export const PercentProgressBarParent = styled.div`
 height: 16px;
 width: 100%;
 background: #DDDDDD;
 border-radius: 16px;
`

export const PercentProgressBarChild = styled.div(props => ({
  height: '16px',
  width: `${props.percent}%`,
  background: '#D3B533',
  borderRadius: '16px'
}))
