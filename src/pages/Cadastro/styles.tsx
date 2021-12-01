import styled from 'styled-components';

export const Box = styled.div`
    width: 622px ;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin: auto;
    margin-top: 45px;
    padding: 42px 32px 0 ;
    background-color:  ${props => props.theme.colors.primary};
    border-radius: 8px;

    @media (max-width: 425px){
        width: auto ;
    }
`;

export const Legend = styled.div`
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   display: flex;
   color: ${props => props.theme.colors.subTilte};
   text-transform: capitalize;
   margin-bottom: 52px;
`;

export const BoxButton = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 38px auto;
`;

export const TagCep = styled.div`

    width: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 38px;
    flex-direction: column;
  
`;

export const Tag = styled.div`

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${props => props.theme.colors.subTilte};
    line-height: 130%; 
`;

export const InputCep = styled.div`

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
    text-transform: capitalize;
    font-family: 'Inter', sans-serif;
`;