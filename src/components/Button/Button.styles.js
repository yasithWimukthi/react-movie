import styled from 'styled-components';

export const Wrapper = styled.button `

    display : block;
    background : var(--darkGrey);
    width : 25%;
    min-width : 200px;
    height : 60px;
    border-radius : 30px;
    border : 0;
    color : var(--white);
    font-size : var(--fontLarge);
    margin : 20px auto;
    cursor : pointer;
    outline : none;
    transition : all 0.3s;

    :hover{
        opacity : 0.8;
    }

`;