import { Request, Response } from 'express'

function deleteUser(req: Request, res: Response) {
  const { id } = req.params
  res.json({ deleted: id })
}

export default deleteUser
