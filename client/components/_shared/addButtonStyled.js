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
 height: 56px;
 width: 56px;
 cursor: pointer;
 padding: 1rem;
 text-deecoration: none;
 border: 0px;
 border-radius: 50%;
 margin-bottom: .5rem;
`

export const AddButtonStyled = styled.button`
 ${basicStyles}

 &.primary {
    background-color: ${palette.base.primary};
    color: #fff;
 }
`
