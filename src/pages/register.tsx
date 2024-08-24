import Link from "next/link"
import { useState } from "react"

import LoginCard from '@/components/loginCard'
import Input from "@/components/ui/input/input"
import Button from "@/components/ui/button/button"

import styles from '@/styles/login.module.css'

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className={styles.background}>
            <LoginCard title='Crie sua conta'>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <Input
                        type='text'
                        placeholder='Seu nome'
                        required
                        value={formData.name}
                        onChange={(e) => handleFormChange(e, 'name')}
                    />
                    <Input
                        type='email'
                        placeholder='Seu e-mail'
                        required
                        value={formData.email}
                        onChange={(e) => handleFormChange(e, 'email')}
                    />
                    <Input
                        type='password'
                        placeholder='Sua senha'
                        required
                        value={formData.password}
                        onChange={(e) => handleFormChange(e, 'password')}
                    />
                    <Button type="submit">Cadastrar</Button>
                    <Link href='/login'>Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}
