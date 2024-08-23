import Link from "next/link"
import LoginCard from "@/components/loginCard"
import styles from '@/styles/login.module.css'
import Input from "@/components/ui/input/input"
import Button from "@/components/ui/button/button"

export default function LoginPage() {
    return (
        <div className={styles.background}>
            <LoginCard title='Entre em sua conta'>
                <form className={styles.form}>
                    <Input type="email" placeholder="Seu e-mail" />
                    <Input type="password" placeholder="Sua senha" />
                    <Button>Entrar</Button>
                    <Link href='./register'>Ainda não possui cadastro</Link>
                </form>
            </LoginCard>
        </div>
    )
}
