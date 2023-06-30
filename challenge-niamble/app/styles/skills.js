import styled from "styled-components";

export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 42rem;
    margin: 10px 0px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 32%;
    color: rgba(124,124,124,0.8);
    &:hover{
        h1, h3{
            color: orange;
        }
    }
`;

export const Head = styled.div`
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px 40px;
    font-size: x-large;
    height: 20%;
`;

export const IconSkill = styled.div`
    display: flex;
    margin: 10px 0px 10px 0px;
    justify-content: center;
    align-items: center;
    height: 40%;
    width: 100%;
    background-color: rgba(0,0,0,0.7);
    
`;

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 65%;
    &:hover{
        border: 2px solid orange;
    }
`;

export const Level = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${props => props.height === undefined ? "6%" : props.height};
    width: 100%;
    font-size: 22px;
    padding: 0px 10px;
    background-color: rgba(0,0,0,0.7);
    margin-bottom: 4px;
    h4{
        color: white;
        margin: 0px 16px;
        font-size: 27px;
    }
`;