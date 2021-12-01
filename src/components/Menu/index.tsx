import React from 'react';
import { Container, Title, Box } from "./styles"
import Button from "../Button"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

interface ButtonProps {
    titleMenu: string;
    title?: string;
    icon?: IconProp;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<ButtonProps> = ({ titleMenu, title, icon, onClick }: ButtonProps) => {

    const router = useRouter()

    return (
        <Container>

            {router.pathname !== '/' ? (
                <Link href={'/'} >
                    <Title style={{cursor:'pointer'}}>
                        <Box><FontAwesomeIcon icon={faCaretLeft} /></Box>
                        {titleMenu}
                    </Title>
                </Link>
            ) : (
                <Title>
                        {titleMenu}
                </Title>
            )}


            {router.pathname === '/' ? (
                <Link href={'/Cadastro'}>
                    <Button title={title} onClick={onClick} icon={icon} />
                </Link>
            ) : ('')}
        </Container>
    );
};

export default Card;