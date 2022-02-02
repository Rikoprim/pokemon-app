import styled from '@emotion/styled'

export const Container = styled.div`
    width: 100%;
    margin: auto;
    max-width: 525px;
    position: relative;
    text-align: -webkit-center;
    padding: 25px 30px 50px 30px;
`
export const BtnWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: calc(100% - 10px);
`
export const BtnTabs = styled.button`
    padding: 12px 30px;
    align-items: center;
    background: #f3f3f3;
    color: #0d0c22;
    border: none;
    border-radius: 8px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &:hover {
        background-color: #e7e7e9;
    }

    @media screen and (max-width: 450px) {
        padding: 12px 23px !important;
    }

    @media screen and (max-width: 390px) {
        padding: 12px 15px !important;
    }

    @media screen and (max-width: 350px) {
        padding: 12px 10px !important;
    }
`