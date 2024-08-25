import styles from '@/styles/login.module.css'
import Link from 'next/link'
import { getCookie } from 'cookies-next'
import { NextApiRequest, NextApiResponse } from 'next'

export default function Home() {
  return (
    <div className={styles.background}>
      <h1>Seja Bem-vindo ao Next Register!</h1>
      <p>Este é um aplicativo web para gerenciar registros.</p>
      <Link href="/login">Entre agora</Link>
    </div>
  )
}

export const getServerSideProps = async ({ req, res }: { req: NextApiRequest, res: NextApiResponse }) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) throw new Error('Invalid token!')
    return {
      props: {}
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      },
      props: {}
    }
  }
}
