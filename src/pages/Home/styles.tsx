import styled from 'styled-components';

export const Box = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-bottom: 20px;
`;

export const BoxCard = styled.div`
    margin-top: 65px;
`;

export const Page = styled.button`
    border: 1px solid ${props => props.theme.colors.tilte};
    box-sizing: border-box;
    border-radius: 2px;
    color: ${props => props.theme.colors.subTilte};
    padding: 4px;
`;