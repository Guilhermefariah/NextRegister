import React from 'react'
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
    return (
        <input className={styles.input} {...props} />
    )
}

export default Input
