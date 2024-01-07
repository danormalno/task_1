// react
import { FC } from "react"
// libs
import classnames from 'classnames'
// styles
import styles from './Input.module.css'

interface InputProps {
    placeholder : string;
    onChange ?: () => void;
    backgroundColor : 'red' | 'black' | 'green';
}

export const Input : FC<InputProps> = ({onChange, placeholder, backgroundColor}) => {
    return (
        <input type="text" placeholder={placeholder} className={classnames(
            styles.input,{
                [styles.IP1] : backgroundColor === 'black',
                [styles.IP2] : backgroundColor === 'green',
                [styles.IP3] : backgroundColor === 'red'
            }
        )}/>
    )
}