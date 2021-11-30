import React from 'react';
import { ButtonLink,Title } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    title: string;
    icon?: IconProp;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({title,icon,onClick}: ButtonProps) => {

    return (    
        <ButtonLink onClick={onClick} >
            <Title> {title} </Title>
            <FontAwesomeIcon icon={icon}/>
        </ButtonLink>
    );
};

export default Button;