import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-end;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 2px solid #BBB8D9;
    margin: auto;
    margin-top: 15px;
`;

export const Title = styled.div`
    margin: 14px 0 16px 18px;
    position: absolute;
`;

export const Box = styled.div`
    color: ${props => props.theme.colors.subTilte};
`;