import styled from 'styled-components';

export const Box = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    margin-bottom: 45px;
    
    @media (max-width: 425px){
       flex-direction: column;
    }
`;

export const InputButton = styled.input`
    width: 100%;
    height: 50px;
    padding: 14px 0 10px;
    border: 0;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.subTilte};
    border-bottom: 2px solid #BBB8D9;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
`;