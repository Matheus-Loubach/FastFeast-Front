import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #EAEAEA;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    padding: 0 40px;
    column-gap: 28%;
    flex-wrap: wrap;
    font-family: 'Nunito';
    color: #2E2C36;
`

export const Wrapper = styled.div`
    /* height: 10px; */
    /* width: 80px; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    & > ul {
        height: 80px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        column-gap: 30px;
    } 
`