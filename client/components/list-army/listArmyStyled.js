import styled from '@emotion/styled'

export const DetailArmyHeader = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 12px;
 margin-bottom: 2rem;
`

export const DetailArmyHeaderItemStyled = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3px;
`
export const TreasureCardStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;
 padding: 1rem;
 margin-bottom: 2rem;
 border: 1px solid #DDDDDD;
 border-radius: 6px;
`

export const TreasureCardValueStyled = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3px;
`

export const LabelValueStyled = styled.p`
 font-size: 16px;
 font-weight: bold;
 color: #4E3B95;
`

export const ChipsWrapperStyled = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: flex-start;
 gap: 12px;
 margin-bottom: 1rem;
`
export const TitleLabelStyled = styled.p`
 font-size: 16px;
 font-weight: bold;
`

export const ChipsStyled = styled.div`
 padding: .5rem;
 border: 1px solid #DDDDDD;
 border-radius: 6px;
 cursor: pointer;

 :hover {
  border: 1px solid #D3B533;
 }
 &.active {
  border: 1px solid #D3B533;
 }
`

export const TierWrapperStyled = styled.div`
 display: flex;
 width: 100%;
 min-width: 360px;
 overflow-x: auto;
 gap: 10px;
 margin-bottom: 2rem;
`
export const TierItemBoxStyled = styled.div((props) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justfyContent: 'flex-start',
  gap: '6px',
  borderRadius: '6px',
  padding: '1rem',
  backgroundColor: `${props.tierId === 0 ? '#E9F6FE' : (props.tierId === 1 ? '#FFF4D4' : (props.tierId === 2 ? '#FFDDD3' : (props.tierId === 3 ? '#EBEBD7' : '#D8D7E8')))}`,
  width: '100%',
  minWidth: '180px'
}))

export const TierTextWrapperStyled = styled.div`
 display: flex;
 flex-direction: column;
 gap: 3px;
`
