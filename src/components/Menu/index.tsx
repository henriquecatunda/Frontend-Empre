import React from 'react';
import { Container, Title } from "./styles"
import Button from "../Button"
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface ButtonProps {
    titleMenu: string;
    title?: string;
    icon?: IconProp;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Card: React.FC<ButtonProps> = ({titleMenu,title, icon, onClick}: ButtonProps) => {

    return (    
        <Container>
            <Title>
                {titleMenu}
            </Title>

            <Button title={title} onClick={onClick} icon={icon} />
        </Container>
    );
};

export default Card;