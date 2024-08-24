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

export function login(body: User): User {
    const user  = users.find(({ email, password }) => email === body.email && password === body.password )
    if(!user) throw new Error('Não encontrado!')
    if(user.password !== body.password) throw new Error('Senha incorreta!')
        
    return user
}