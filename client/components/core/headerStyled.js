import styled from '@emotion/styled'

export const MainHeaderWrapper = styled.div`
 width: 100%;
 max-width: 450px;
 height: 52px;
 padding: 1rem;
 background: #FFFFFF;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 margin-bottom: .1rem;
 position: fixed;
 top: 0;
 z-index: 1;
`

export const MainHeaderParentWrapper = styled.div`
 width: 100%;
 max-width: 450px;
 height: 52px;
 padding: 1rem;
 background: #FFFFFF;
 box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 9rem;
 margin-bottom: .1rem;
 position: fixed;
 top: 0;
 z-index: 1;
`

export const MainHeaderLogoutWrapper = styled.div`
width: 100%;
max-width: 450px;
height: 52px;
padding: 1rem;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 6.6rem;
margin-bottom: .1rem;
position: fixed;
top: 0;
z-index: 1;

@media screen and (min-width: 370px) and (max-width: 414px) {
  gap: 5rem !important;
}

@media screen and (min-width: 360px) and (max-width: 365px) {
  gap: 4rem !important;
}
`

export const LogoutWrapper = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 3px;
 cursor: pointer;
`

export const LogoutLabel = styled.p`
 color: #D54D4C;
 font-size: 11px;
`
