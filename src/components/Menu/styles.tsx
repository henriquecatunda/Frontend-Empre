import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: 80px;
    display: flex;
    padding: 0 150px;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.primary};

    @media (max-width: 425px){
       padding: 8px 20px;
       flex-direction: column;
       height: 100px;
       justify-content: space-evenly;
    }
`;

export const Title = styled.div`
    
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.tilte};

    @media (max-width: 425px){
       font-size: 14px;
    }
`;