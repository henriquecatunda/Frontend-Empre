import React from 'react';
import { TagButton } from "./styles"

interface ButtonProps {
    title: string;
}
const Tag: React.FC<ButtonProps> = ({title}: ButtonProps) => {

    return (    
        <TagButton>
            {title}
        </TagButton>
    );
};

export default Tag;