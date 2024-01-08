// react
import React, { FC, ChangeEvent, useState } from "react";
// libs
import classnames from 'classnames'
// styles
import styles from './Input.module.css'

interface InputProps {
    placeholder : string;
    onChange : (event: ChangeEvent<HTMLInputElement>) => void;
    backgroundColor : 'red' | 'black' | 'green';
    value : string;
}

export const Input : FC<InputProps> = ({placeholder, backgroundColor, onChange, value}) => {

    return (
        <input type="text" value={value} placeholder={placeholder} onChange={onChange} className={classnames(
            styles.input,{
                [styles.IP1] : backgroundColor === 'black',
                [styles.IP2] : backgroundColor === 'green',
                [styles.IP3] : backgroundColor === 'red'
            }
        )}/>
    )
}