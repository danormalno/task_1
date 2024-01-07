// react
import React, { FC, ChangeEvent } from "react";
// libs
import classnames from 'classnames'
// styles
import styles from './Input.module.css'

interface InputProps {
    placeholder : string;
    onChange ?: (event: ChangeEvent<HTMLInputElement>) => void;
    backgroundColor : 'red' | 'black' | 'green';
}

export const Input : FC<InputProps> = ({onChange, placeholder, backgroundColor}) => {

    const funcInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const valueOfInput = event.target.value;
        console.log(valueOfInput);
    };
    

    return (
        <input id="myInput" type="text" placeholder={placeholder} onChange={funcInputValue} className={classnames(
            styles.input,{
                [styles.IP1] : backgroundColor === 'black',
                [styles.IP2] : backgroundColor === 'green',
                [styles.IP3] : backgroundColor === 'red'
            }
        )}/>
    )
}