import styled from '@emotion/styled'
import search from '../../assert/image/search.svg'

export const FormSearch = styled.input`
    height: 50px;
    width: 100%;
    color: #969696;
    border: 0px;
    margin-bottom: 0px;
    -webkit-appearance: none;
    background: #eaebec url(${search}) 18px 15px no-repeat;
    background-size: 20px 20px;
    text-align: left;
    font-weight: 500;
    padding: 0px 0px 0px 55px;
    font-size: 16px;
    border-radius: 8px;

    &:focus {
        outline: none;
    }
`