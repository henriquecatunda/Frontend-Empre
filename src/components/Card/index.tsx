import React from 'react';
import { ContainerCard, Title, SubTile, BoxText, BoxTag, Box} from "./styles"
import Tag from '../Tag'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps {
    title: string;
    tagLancamento: string;
    tagResidencial: string;
    subTile: string;
    onClickExcluir: React.MouseEventHandler<HTMLButtonElement>;
    onClickEditar: React.MouseEventHandler<HTMLButtonElement>;

}
const Card: React.FC<ButtonProps> = ({ title, tagLancamento, tagResidencial,subTile, onClickExcluir, onClickEditar}: ButtonProps) => {

    return (
        <ContainerCard>
          <BoxText>
              <Box>
                <Title>{title} </Title>
                <button onClick={onClickEditar}> <FontAwesomeIcon icon={faEdit} /> </button>
                <button onClick={onClickExcluir}><FontAwesomeIcon icon={faTrash} /> </button>
              </Box>
                <SubTile> {subTile}  </SubTile>
          </BoxText>

          <BoxTag>
                <Tag title={tagLancamento}/> 
                <Tag title={tagResidencial}/> 
          </BoxTag>
        </ContainerCard>
    );
};

export default Card;