import React, {SelectHTMLAttributes} from 'react';
import { Box, InputSelect } from "./styles"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;

}
const Select: React.FC<SelectProps> = ({ label, options, ...rest }) => {

    return (

        <Box>
            <InputSelect value="" {...rest}>
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </InputSelect>
        </Box>
    );
};

export default Select;