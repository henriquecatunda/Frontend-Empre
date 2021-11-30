import styled from 'styled-components';

export const TagButton = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 8px 24px;
    height: 32px;

    border: 1px solid ${props => props.theme.colors.tilte};
    box-sizing: border-box;
    border-radius: 71px;

    color: ${props => props.theme.colors.subTilte};
    background-color:  ${props => props.theme.colors.primary};

    font-style: normal;
    font-size: 12px;
    margin-left: 15px;
    text-transform: capitalize;
`;