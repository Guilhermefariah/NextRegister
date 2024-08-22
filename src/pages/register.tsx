import Link from "next/link"
import LoginCard from '@/components/loginCard'
import styles from '@/styles/login.module.css'
import Input from "@/components/input/input"
import Button from "@/components/button/button"

export default function RegisterForm() {
    return (
        <div className={styles.background}>
            <LoginCard title='Crie sua conta'>
                <form className={styles.form}>
                    <Input type='text' placeholder='Seu nome'/>
                    <Input type="email" placeholder="Seu e-mail" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Cadastrar</Button>
                    <Link href='./login'>Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
} 