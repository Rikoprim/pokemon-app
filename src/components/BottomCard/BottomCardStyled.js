import styled from '@emotion/styled'

export const Card = styled.div`
    position: fixed;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 525px;
    height: 200px;
    font-size: 12px;
    color: #303030;
    letter-spacing: 1px;
    background: #fff;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    z-index: 100t;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
`
export const Container = styled.div`
    padding: 15px 30px 0px 30px; 
    text-align: center;
`
export const Line = styled.hr`
    margin: auto;
    width: 50%;
    margin-top: 12px;
    border-radius: 5px;
    border: 2px solid #C4C4C4;
    background: #C4C4C4;
`
export const HeadText = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 500;
`
export const InputForm = styled.input`
    height: 50px;
    width: 100%;
    color: #969696;
    border: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    -webkit-appearance: none;
    background: #eaebec;
    font-weight: 500;
    padding: 0px 0px 0px 20px;
    font-size: 16px;
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`
export const BtnCatch = styled.button`
    padding: 10px 35px;
    border: none;
    border-radius: 8px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background: #000;
    margin-top: 10px;
`
export const FormText = styled.p`
    color: #eb5a4d;
    text-align: left;
`