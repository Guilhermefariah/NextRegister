import jwt from 'jsonwebtoken'

interface User {
    email: string
    password: string
    name?: string
}

let users: User[] = []

const SECRET = process.env.JWT_SECRET

function createToken(user: User): string {
    return jwt.sign({ email: user.email, name: user.name }, SECRET as string)
}

function readToken(token: string) {
    try {
        return jwt.verify(token, SECRET as string)
    } catch (err) {
        throw new Error('Invalid token!')
    }
}

export function register(body: User): { token: string } {
    const existingUser = users.find(({ email }) => email === body.email)
    if (existingUser) throw new Error('User already registered!')

    const newUser = { ...body }
    users.push(newUser)

    const token = createToken(newUser)

    return { token }
}

export function login(body: User): { token: string } {
    const user = users.find(({ email, password }) => email === body.email && password === body.password)
    if (!user) throw new Error('Not found!')

    const token = createToken(user)

    return { token }
}

