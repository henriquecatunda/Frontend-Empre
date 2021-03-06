import styled from 'styled-components';

export const ButtonLink = styled.button` 
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px 40px;
    height: 36px;
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.tilte};
    box-sizing: border-box;
    border-radius: 71px;
    font-style: normal;
    font-size: 16px;
    cursor:pointer;
    border: none;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color:  ${props => props.theme.colors.primary}; 
    margin-right: 8px;
    margin-left: 8px;
    text-transform: capitalize;
`;