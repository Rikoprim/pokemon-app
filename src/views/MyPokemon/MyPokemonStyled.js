import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: 525px;
    position: relative;
    background: #F9FAFA;
    height: calc(var(--vh, 1vh) * 100);
`
export const HomeWrapper = styled.div`
	padding: 25px 30px 0px 30px;
`
export const NavHeader = styled.h4`
    color: #eb5a4d;
    font-size: 2rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    letter-spacing: 2px;
    margin-bottom: 15px;
`
export const ListCard = styled.div`
    margin-top: 20px;
    overflow: auto;
    max-height: calc(100vh - 150px);
    padding-top: 10px;
    padding-right: 30px;
    padding-left: 30px;
`
export const BtnBack = styled.img`
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
    cursor: pointer;
`