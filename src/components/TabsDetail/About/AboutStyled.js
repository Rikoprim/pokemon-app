import styled from '@emotion/styled'
import getColorType from '../../../utils/getColorType'

export const Container = styled.div`
    margin-top: 15px;
    text-align: left;
`
export const Description = styled.p`
    color: #747476;
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 10px;
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
`
export const LeftTitle = styled.div`
    color: #000;
    width: 120px;
    font-size: 12px;
    font-weight: bold;
`
export const RightTitle = styled.div`
    color: #747476;
    font-size: 12px;
`