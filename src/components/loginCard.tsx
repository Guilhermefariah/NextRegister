import { ReactNode } from 'react'
import styles from './loginCard.module.css'

interface LoginCardProps {
    children?: ReactNode
    title?: ReactNode
}

export default function LoginCard({ title, children }: LoginCardProps) {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2> 
            {children}
        </div>
    )
}