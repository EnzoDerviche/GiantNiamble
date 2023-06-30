import styled from "styled-components";

export const Div = styled.div`
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: white;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1rem; 
    font-size: 25px;
    &:hover{
        cursor: pointer;
    }
`;

export const Letters = styled.div`
    margin-top: 5px;
    margin-left: 12px;
`;

