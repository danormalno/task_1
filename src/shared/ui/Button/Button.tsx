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
    size : string;
    color: string;
}

export const Button : FC<ButtonProps> = ({onClick, text ,backgroundColor, size, color}) => {
    return <button onClick={onClick} className={classnames(styles.button,{
        [styles.redBG] : backgroundColor === 'red',
        [styles.blackBG] : backgroundColor === "black",
        [styles.greenBG] : backgroundColor === "green",
        [styles.width60] : size === '60px',
        [styles.width100] : size === '100px',
        [styles.width150] : size === '150px',
        [styles.colorAqua] : color === 'colorAqua',
        [styles.colorViolet] : color === 'colorViolet',
        [styles.colorWhite] : color === 'colorWhite',
    })}>{text}</button>
}

