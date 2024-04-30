import styled from '@emotion/styled'
import { css } from '@emotion/react'

const basicStyles = css`
 visibility: hidden;
 width: 100%;
 max-width: 400px;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 top: 30px;
 border-radius: 12px;
 padding: 1rem;
 position: fixed;
 z-index: 9999;
 background-color: #EDE1AD;
`

export const SnackbarStyled = styled.div`
 ${basicStyles};

 &.open {
  visibility: visible;
    -webkit-animation: snackbarin .5s, snackbarout .5s 2.5s;
    animation: snackbarin .5s, snackbarout .5s 2.5s;
 }
`
