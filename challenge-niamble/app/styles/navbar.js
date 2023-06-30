import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: rgba(0,0,0,0.7);
`;

export const Ul = styled.ul`
    display: flex;
    height: 100%;
    width:100%;
    justify-content: space-around;
    list-style: none;
    color: rgba(124,124,124,0.8);
`;

export const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: xx-large;
    &:hover{
    color: orange;
   }

`;

export const BtnNav = styled.div`
    display: flex;
    align-items: center;
    margin: 0px 10px
    height: 5rem;
    background-color: black;
    color: rgba(217,217,217,0.8);
    padding: 1.5rem 1rem;
    &:hover{
        cursor: pointer;
        background-color: rgba(235,235,235,0.1);
    }
`;

export const Letter = styled.div`
    display: flex;
    border-radius: 3px;
    border: 1px solid rgba(217,217,217,0.8);;
    padding: 2px 15px;
    font-size: 20px;
`;

