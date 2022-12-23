import { Request, Response } from 'express'

function getUser(req: Request, res: Response) {
  // const { id } = req.params;
  res.json(req.body)
}

export default getUser
