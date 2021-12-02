import React from 'react';
import { ContainerCard, Title, SubTile, BoxText, BoxTag, Box } from "./styles"
import Tag from '../Tag'
import Link from 'next/link';
import Delete from '../../assets/delete.png'
import Toedit from '../../assets/Toedit.png'

interface CardProps {
  title: string;
  tagLancamento: string;
  tagResidencial: string;
  id: string;
  subTile: string;
  onClickExcluir: React.MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<CardProps> = ({ title, tagLancamento, id, tagResidencial, subTile, onClickExcluir }: CardProps) => {

  return (
    <ContainerCard>
      <BoxText>
        <Box>
          <Title>{title} </Title>
          <Link href={{
            pathname: "/Editar",
            query: { id: `${id}` },
          }}>
            <button > <img src={Toedit} alt="Logo" /> </button>
          </Link>

            <button onClick={onClickExcluir}> <img src={Delete} alt="Logo" /> </button>

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