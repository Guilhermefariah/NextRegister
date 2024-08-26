import styles from '@/styles/login.module.css';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';


export default function Home() {
  return (
    <div className={styles.background}>
      <h1>Seja Bem-vindo ao Next Register!</h1>
      <p>Este é um aplicativo web para gerenciar registros.</p>
      <Link href="/login">Entre agora</Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie('authorization', { req, res })
    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    }
    return {
      props: {}
    }
  } catch (err) {
    console.log(err)
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}
