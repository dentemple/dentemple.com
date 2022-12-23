import { Request, Response } from 'express'

function createUser(req: Request, res: Response) {
  res.json(req.body)
}

export default createUser
