import React from 'react';
import { ContainerCard, Title, SubTile, BoxText, BoxTag, Box } from "./styles"
import Tag from '../Tag'
import Link from 'next/link'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface CardProps {
  title: string;
  tagLancamento: string;
  tagResidencial: string;
  subTile: string;
  onClickExcluir: React.MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<CardProps> = ({ title, tagLancamento, tagResidencial, subTile, onClickExcluir }: CardProps) => {

  return (
    <ContainerCard>
      <BoxText>
        <Box>
          <Title>{title} </Title>
          <Link href={'/Editar'} >
            <button > <FontAwesomeIcon icon={faEdit} /> </button>
          </Link>

            <button onClick={onClickExcluir}><FontAwesomeIcon icon={faTrash} /> </button>

        </Box>
        <SubTile> {subTile}  </SubTile>
      </BoxText>

      <BoxTag>
        <Tag title={tagLancamento} />
        <Tag title={tagResidencial} />
      </BoxTag>
    </ContainerCard>
  );
};

export default Card;