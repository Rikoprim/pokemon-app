import styled from '@emotion/styled'

export const Container = styled.div`
    margin-top: 15px;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 40px;

    @media screen and (max-width: 450px) {
        flex-direction: column;
    }

    @media screen and (max-width: 375px) {
        flex-direction: column;
    }
`
export const EvolutionWrapper = styled.div`
    align-items: center;
    margin-bottom: 35px;
`
export const PokemonImage = styled.img`
    width: 140px;
    height: 140px;
`
export const PokemonName = styled.p`
    font-size: 16px;
    font-weight: bold;
`