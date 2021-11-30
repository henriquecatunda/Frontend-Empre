import React from 'react';
import { Container, Title,Box } from "./styles"
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps {
    title: string;
    value: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Card: React.FC<ButtonProps> = ({title, onChange, value, onClick}: ButtonProps) => {

    return (    
        <Container>
            <Title >
                <button onClick={onClick}><Box><FontAwesomeIcon icon={faSearch}/> </Box> </button>
            </Title>
                <input
               
                placeholder={title}
                onChange={onChange}
                value={value}
                />
        </Container>
    );
};

export default Card;