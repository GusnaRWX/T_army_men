import styled from '@emotion/styled'

export const FilterStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 12px;
 padding: .79rem .5rem;
 border: 1px solid #EEEEEE;
 cursor: pointer;
 border-radius: 8px;
 width: 70px;
`

export const TroopsStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 10px;
`

export const TroopsItemStyled = styled.div`
 padding: .5rem;
 border: 1px solid #DDDDDD;
 border-radius: 6px;
 cursor: pointer;

 &.active {
   border: 1px solid #D3B533;
   border-radius: 6px;
   cursor: pointer;
   padding: .5rem;
 }
`

export const LevelStyled = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 align-items: center;
 justify-content: flex-start;
 gap: 12px;
 margin-bottom: 1rem;
`

export const LevelItemStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 10px;
 cursor: pointer;
 border: 1px solid #DDDDDD;
 padding: .5rem;
 border-radius: 6px;

 &.active {
    border: 1px solid #D3B533;
 }
`
