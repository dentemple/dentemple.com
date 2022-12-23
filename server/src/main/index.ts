import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import logger from 'morgan'

import { BASE_URL } from './constants'

import usersRoutes from './users'

/* config */
dotenv.config()
const app = express()

/* middleware */
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
app.get(`/`, (_, res) => res.send({ status: 'ok' }))
app.get(`${BASE_URL}/users`, usersRoutes)

export default app
