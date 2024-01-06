// react
import { FC } from "react"
// libs
import classnames from 'classnames'
// styles
import styles from './Button.module.css'

interface ButtonProps {
    text : string;
    onClick ?: () => void;
    backgroundColor : 'red' | 'black' | 'green';
}

export const Button : FC<ButtonProps> = ({onClick, text ,backgroundColor}) => {
    return <button onClick={onClick} className={classnames(styles.button,{
        [styles.redBG] : backgroundColor === 'red',
        [styles.blackBG] : backgroundColor === "black",
        [styles.greenBG] : backgroundColor === "green"
    })}>{text}</button>
}

