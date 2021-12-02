import React from 'react';
import { ButtonLink,Title } from "./styles"

interface ButtonProps {
    title: string;
    icon?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({title,icon,onClick}: ButtonProps) => {

    return (    
        <ButtonLink onClick={onClick} >
            <Title> {title} </Title>
            <img src={icon} alt="" />
        </ButtonLink>
    );
};

export default Button;