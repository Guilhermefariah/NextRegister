import React from 'react'
import styles from './button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
    const buttonClass = isLoading ? `${styles.button} ${styles.loading}` : styles.button;
    return (
        <button className={buttonClass} {...props}>
            {isLoading ? 'Carregando...' : children}
        </button>
    )
}
export default Button