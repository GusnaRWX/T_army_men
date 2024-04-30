import palette from '@/utils/palette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const basicStyles = css`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 outline: 0;
 box-sizing: border-box;
 position: relative;
 height: auto;
 width: 100%;
 cursor: pointer;
 padding: 1rem;
 text-decoration: none;
 border: 0px;
 border-radius: 6px;
`

export const ButtonStyled = styled.button`
 ${basicStyles}

 &>span {
    width: 100%;
 }

 &.primary {
    background-color: ${palette.base.primary};
    color: #fff;
 }

 &.danger-outlined {
   border: 1px solid ${palette.base.error};
   color: ${palette.base.error};
 }

 &.error {
   background-color: ${palette.base.error};
   color: #fff;
 }

 &.text {
    background-color: transparent;
    color: ${palette.base.primary};
 }

 &.disabled {
  background-color: ${palette.base.disabled}; 
  cursor: not-allowed;
 }

 &.text-width {
   background-color: transparent;
   color: ${palette.base.primary};
   width: 70px;
}
`
