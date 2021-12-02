import React from 'react';
import { Container, Title, Box } from "./styles"
import Button from "../Button"
import Link from 'next/link'
import { useRouter } from 'next/router'
import seta from '../../assets/seta.jpg'

interface ButtonProps {
    titleMenu: string;
    title?: string;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<ButtonProps> = ({ titleMenu, title, icon, onClick }: ButtonProps) => {

    const router = useRouter()

    return (
        <Container>

            {router.pathname !== '/' ? (
                <Link href={'/'} >
                    <Title style={{cursor:'pointer'}}>
                        <Box><img src={seta.src} alt="Logo" /></Box>
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