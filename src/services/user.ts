let users: User[] = []

interface User {
    email: string
    password: string
}

export function register(body: User): User {
    const user = users.find(({ email }) => email === body.email )
    if(user) throw new Error('Usuário já cadastrado!')
    
    users.push(body)
    return  body
}
