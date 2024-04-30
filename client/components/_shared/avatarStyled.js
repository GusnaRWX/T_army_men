import styled from '@emotion/styled'

export const AvatarWrapper = styled.div(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: `${props.width}px`
}))

export const AvatarContainer = styled.div`
 height: 56px;
 width: 56px;
 position: relative;
 cursor: pointer;
 margin-bottom: .5rem;
`

export const AvatarImage = styled.div(props => ({
  height: '100%',
  width: '100%',
  backgroundImage: `url(${props.avatarImage})`,
  backgroundSize: 'contain',
  border: `${props.level === 0 ? '2px solid #009EFF' : (props.level === 1 ? '2px solid #FFCA28' : (props.level === 2 ? '2px solid #FF5722' : (props.level === 3 ? '2px solid #999936' : '2px solid #3D388A')))}`,
  borderRadius: '50%'
}))

export const LevelImage = styled.div`
 position: absolute;
 top: 0;
 right: 5%;
`
