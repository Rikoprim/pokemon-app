import styled from '@emotion/styled'
import getColorType from '../../utils/getColorType'

export const Container = styled.div`
    height: calc(var(--vh, 1vh) * 100);
    margin: auto;
    max-width: 525px;
    position: relative;
`
export const Curve = styled.div`
    background-color: ${({type}) => getColorType(type)};
    border-bottom-left-radius: 30% 35%;
    border-bottom-right-radius: 30% 35%;
    height: 35%;
    position: relative;
`
export const Header = styled.div`
    width: 100%;
    padding: 25px 30px 0px 25px;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: row;
`
export const ColLeft = styled.div`
    flex: 50%;
`
export const ColRight = styled.div`
    flex: 50%;
    text-align: center;
`
export const BtnBack = styled.img`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor: pointer;
`
export const PokemonNumber = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: rgba(23, 23, 27, 0.3);
`
export const PokemonName = styled.h4`
    margin-bottom: 5px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
`
export const ImageWrapper = styled.div`
    text-align: center;
`
export const PokemonImage = styled.img`
    width: 170px;
    height: 170px;

    @media screen and (max-width: 450px) {
        width: 150px;
        height: 150px;
    }
    @media screen and (max-width: 320px) {
        width: 120px;
        height: 120px;
    }
`
export const TypeCard = styled.div`
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    display: inline-block;
`
export const ItemType = styled.div`
    background: rgba(255, 255, 255, 0.15);
    padding: 3px 15px;
    margin-right: 5px;
    border-radius: 8px;
    color: #fff;
    font-size: 14px;
`
export const ListCard = styled.div`
    overflow: auto;
    max-height: calc(100vh - 230px);
`