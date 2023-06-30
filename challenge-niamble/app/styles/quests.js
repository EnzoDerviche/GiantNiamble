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
    justify-content: flex-start;
    flex-direction: column;
    width: ${props => props.width};
    height: 100%;
    padding-bottom: 10px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: ${props => props.justify};;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background-color: rgba(0,0,0,0.7);
    color: orange;
    padding: 0px 15px;
    margin-bottom: 7px;
    h2:nth-child(1) {
        color: white;
    }
`;

export const List = styled.div`
    display: flex;
    width: 100%;
    height: 92%;
    background-color: rgba(0,0,0,0.7);
    color: orange;
   
`;

export const Ul = styled.ul`
  height: 100%;
  width: 100%;
  overflow-y: scroll;   
  &::-webkit-scrollbar {
    background-color: #131212;
    padding: 0px 2px;
  }
  &::-webkit-scrollbar-thumb {
    border-left: 3px solid black;
    border-right: 3px solid black;
    background: orange;
  }
`;

export const Li = styled.li`
    display: flex;
    padding: 10px;
    font-size: 22px;
    color: rgba(124,124,124,0.8);
    list-style: none;
    width: 98%;
    &:hover{
        background-color: rgba(189, 189, 189, 0.1);
    }
    p{
        margin-left: 10px;
    }
`;

export const Quest = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 92%;
    color: orange;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 83%;
    background-color: rgba(0,0,0,0.7);
    color: white;
    padding: 15px 5rem 15px 2rem;
    h3{
        color: orange;
    }
    h2{
        color: white;
        margin: 20px 0px 8px 7px;
    }
    p{
        margin-top: 20px;
        margin-left: 20px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: small;
        color: grey;
    }
`;

export const TitleQuest = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 17%;
    background-color: #131212;
    color: white;
`;

export const SpaceFooter = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    color: white;
`;

export const InfoFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 15px;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: rgba(124,124,124,0.8);;
    &:nth-child(2) p:nth-child(3) {
        font-size: 14px;
    }
    &p:nth-child(2) {
        font-size: 14px;
    }
    span{
        color: white;
    }
`;
