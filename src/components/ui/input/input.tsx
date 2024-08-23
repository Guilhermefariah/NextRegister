import React from 'react'
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const inputClass = props.isLoading ? `${styles.input} ${styles.loading}` : styles.input;
  return (
    <input className={inputClass} {...props} />
  )
}

export default Input