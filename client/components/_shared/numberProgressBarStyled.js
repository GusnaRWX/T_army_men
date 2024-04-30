import styled from '@emotion/styled'

export const NumberProgressBarParent = styled.div`
 height: 16px;
 width: 100%;
 background: #DDDDDD;
 border-radius: 16px;
`

export const NumberProgressBarChild = styled.div(props => ({
  height: '16px',
  width: `calc(${props.progress}/${props.total} * 100%)`,
  background: '#D3B553',
  borderRadius: '16px'
}))
