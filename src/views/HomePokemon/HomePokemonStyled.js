import styled from '@emotion/styled'
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: 525px;
    position: relative;
    background: #FAFAFA;
    height: calc(var(--vh, 1vh) * 100);
`
export const HomeWrapper = styled.div`
    padding: 25px 30px 0px 30px;
`
export const NavLink = styled(Link)`
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1px;
    flex: 50%;
`
export const TitleHead = styled.h4`
    color: #757575;
    font-weight: 500;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 15px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export const ListMyPokemon = styled.img`
    margin-top: 10px;
    text-align: right;
`
export const ListCard = styled.div`
    margin-top: 20px;
    overflow: auto;
    max-height: calc(100vh - 200px);
    padding-top: 10px;
    padding-right: 30px;
    padding-left: 30px;
`
export const BtnWrapper = styled.div`
    margin-top: 30px;
    text-align: center;
`
export const BtnLoad = styled.button`
    padding: 10px 35px;
    border: none;
    border-radius: 8px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #0d0c22;
    background: #f3f3f3;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    margin-bottom: 15px;

    &:hover {
        background-color: #e7e7e9;
    }
`

