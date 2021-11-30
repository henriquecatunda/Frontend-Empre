import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-end;
    align-items: center;
    box-sizing: border-box;
    margin: auto;
    margin-top: 15px;
`;

export const Box = styled.div`
    margin: 14px 0 16px 18px;
    position: absolute;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.subTilte};
`;