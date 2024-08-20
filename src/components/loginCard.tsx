import { ReactNode } from 'react'
import styles from './loginCard.module.css'

interface LoginCardProps {
    children?: ReactNode
}

export default function LoginCard({ children }: LoginCardProps) {
    return (
        <div className={styles.card}> 
            {children}
        </div>
    )
}