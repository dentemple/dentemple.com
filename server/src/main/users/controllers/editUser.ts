import { Request, Response } from 'express'

function editUser(req: Request, res: Response) {
  // const { id } = req.params;
  res.json(req.body)
}

export default editUser
