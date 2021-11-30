import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-end;
    align-items: center;
    box-sizing: border-box;
    background-color:  ${props => props.theme.colors.primary};
    margin: auto;
    padding: 32px;
    box-shadow: 0px 2px 4px rgba(48, 46, 69, 0.06);
    border-radius: 8px;
    margin-bottom: 32px;

    @media (max-width: 425px){
       flex-direction: column;
       width: 90%;
    }
`;

export const Title = styled.div`
   font-style: normal;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.subTilte};
    text-transform: capitalize;
    margin-right: 18px;
`;

export const SubTile = styled.div`
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color:  ${props => props.theme.colors.text};
`;

export const BoxText = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 425px){
       width: 80%;
    }
`;

export const BoxTag = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: end;
    flex-direction: row;
    align-items: center;

    @media (max-width: 425px){
       width: 105%;
       margin-top: 20px;
    }
`;

export const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
`;