import React, { ChangeEvent } from 'react'
import './Select.css'

interface Option {
    value: string;
    label: string;
  }

interface SelectProps {
    options: Option[],
    selectOption: string,
    onSelect: (value: string) => void;
}

    const Select: React.FC<SelectProps> = ({options, selectOption, onSelect}) => {
        return (
            <select value={selectOption} onChange={(e: ChangeEvent<HTMLSelectElement>) => onSelect(e.target.value)}>
            {
                options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
            </select>
        )
    }


export default Select