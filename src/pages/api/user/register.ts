import { register } from '@/services/user'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const newUser = await register(req.body)
    res.status(201).json(newUser)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: { code: 400, message: err.message, details: err } })
    } else {
      res.status(500).json({ error: { code: 500, message: 'An unexpected error occurred' } })
    }
  }
}