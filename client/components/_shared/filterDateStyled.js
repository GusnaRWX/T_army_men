import styled from '@emotion/styled'

export const FilterDateStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 padding: 1rem;
 border: 1px solid #EEEEEE;
 cursor: pointer;
 gap: 12px;
 overflow-x: auto;
 border-radius: 7px;
 :hover {
  background-color: #DDDDDD;
 }
`

export const MonthWrapperStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 flex-wrap: wrap;
 justify-content: flex-start;
 gap: 1rem;
 padding-bottom: 1rem;
`

export const MonthItemStyled = styled.div`
 padding: .5rem;
 border: 1px solid #DDDDDD;
 border-radius: 6px;
 cursor: pointer;

 &.active {
  border: 1px solid #D3B533;
 }
`

export const CloseWrapperStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-end;
 padding-right: .75rem;
`
