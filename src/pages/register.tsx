import styles from '@/styles/login.module.css'
import Link from "next/link"
import { useState } from "react"
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import LoginCard from '@/components/loginCard'
import Input from "@/components/ui/input/input"
import Button from "@/components/ui/button/button"

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    const router = useRouter()

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            const response = await fetch('/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const json = await response.json()

            if (!response.ok) {
                throw new Error(`Erro ao registrar: ${response.status} ${response.statusText}`)
            }

            setCookie('authorization', json)
            router.push('/')
        } catch (err) {
            alert('User already exists')
        }
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
