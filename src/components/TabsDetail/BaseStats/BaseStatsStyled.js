import styled from '@emotion/styled'
import getColorType from '../../../utils/getColorType'

export const Container = styled.div`
    margin-top: 15px;
    text-align: left;
`
export const TitleHead = styled.p`
    margin: 20px 0;
    font-size: 16px;
    font-weight: bold;
    color: ${({type}) => getColorType(type)};
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    align-items: center;
`
export const LeftTitle = styled.div`
    color: #000;
    font-size: 12px;
    min-width: 120px;
    font-weight: bold;
`
export const RightTitle = styled.div`
    color: #747476;
    font-size: 12px;
    min-width: 40px;
`
export const Moves = styled.div`
    margin-top: 5px;
    align-items: center;
    justify-content: center;
`
export const ItemMoves = styled.span`
    display: inline-block;
    text-align: center;
    background: rgb(239, 239, 239);
    padding: 3px 15px;
    margin-right: 5px;
    margin-top: 5px;
    border-radius: 8px;
    color: #000;
    font-size: 12px;
`