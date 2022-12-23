import { Request, Response } from 'express'

function getAllUsers(_: Request, res: Response) {
  const users: Array<object> = []
  res.json(users)
}

export default getAllUsers
