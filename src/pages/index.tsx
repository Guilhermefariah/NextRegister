import styles from '@/styles/login.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.background}>
      <h1>Seja Bem-vindo ao Next Register!</h1>
      <p>Este é um aplicativo web para gerenciar registros.</p>
      <Link href="/login">Entre agora</Link>
    </div>
  )
}

