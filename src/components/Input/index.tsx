import React from 'react';
import {Box,InputButton} from "./styles"

interface InputProps {
  title: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

}
const Input: React.FC<InputProps> = ({ title, value, onChange}: InputProps) => {

    return (

        <Box>    
            <InputButton
                placeholder={title}
                onChange={onChange}
                value={value}
             />
        </Box>
    );
};

export default Input;