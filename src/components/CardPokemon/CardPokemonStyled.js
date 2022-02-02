import styled from '@emotion/styled'
import getColorType from '../../utils/getColorType'

export const PokemonCard = styled.div`
    height: 130px;
    padding: 20px;
    margin-bottom: 15px;
    border-radius: 8px;
    background: ${({type}) => getColorType(type)};
    position: relative;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const PokemonImage = styled.img`
    width: 135px;
    height: 135px;
    position: absolute;
    right: 5px;
    bottom: 0px;
    z-index: 10;
`
export const PokemonNumber = styled.p`
    font-size: 17px;
    font-weight: bold;
    color: rgba(23, 23, 27, 0.3);
`
export const PokemonName = styled.p`
    margin-bottom: 5px;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
`
export const Pokeball = styled.img`
    opacity: 0.25;
    width: 125px;
    height: 125px;
    position: absolute;
    right: 5px;
    bottom: 3px;
`
export const TypeCard = styled.div`
    margin-top: 15px;
    align-items: center;
    justify-content: center;
    display: inline-block;
`
export const ItemType = styled.div`
    background: rgba(255, 255, 255, 0.25);
    padding: 4px 15px;
    margin-right: 5px;
    border-radius: 8px;
    color: #fff;
    font-size: 13px;
`
