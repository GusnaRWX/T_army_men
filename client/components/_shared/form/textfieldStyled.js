
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const defaultTextfieldHeight = 40

const basicTextfieldStyles = css`
 font-size: 12px;
 border: none;
 outline: none;
 background: #FFFFFF !important;
 padding-left: .5rem;
 padding-right: .5rem;
 border-radius: 12px;
 line-height: ${defaultTextfieldHeight}px;
 color: #909090;
 width: 100%;
 margin: 0;
`

export const TextfieldWrapperStyled = styled.div`
 overflow: hidden;
 position: relative;
 display: block;
 background: #FFF;
 border-radius: 12px;
 padding: 0px 0px;
 margin-bottom: 10px;
 border: 1px solid #DDDDDD;
 &:focus-within {
   outline: none !important;
   border-color: #D3B533;
   box-shadow: 0 0 5px #D3B533;
}
&.error {
   border: 1px solid #dc5656 !important;

   &:focus {
      outline: none !important;
      border-color: #dc5656;
      box-shadow: 0 0 5px #dc5656;
      background-color: #FFF !important;
   }
 }
`

export const TextfieldIconStyled = styled.div`
 position: absolute;
 cursor: pointer;
 top: 14px;
 right: 12px;
`
export const TextFieldAppendIcon = styled.div`
 position: absolute;
 top: 14px;
 left: 12px;
 padding-right: 1rem !important;
`

export const TextFieldAppendText = styled.div`
 position: absolute;
 top: 12px;
 left: 12px;
 padding-right: 1rem !important;
`

export const TextfieldErrorMessage = styled.span`
 color: #CB211F;
 font-weight: 600;
 font-size: 12px;
 margin-bottom: 1rem;
 padding-left: .5rem;
`

export const TextfieldStyled = styled.input`
 ${basicTextfieldStyles}
 margin-left: ${({ appendIcon }) => appendIcon ? '1.5rem' : ({ appendText }) => appendText ? '2.3rem' : '0'};

 &:-internal-autofill-selected {
    background-color: unset !important;
 }

 &:focus ~ .floating-label {},
 &:not(:placeholder-shown) ~ .floating-label {
    color: #15181E;
    top: 4px;
    left: 16px;
    font-size: 11px;
    opacity: 0.75;
 }
`
