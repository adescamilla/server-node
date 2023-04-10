import './helpers/dotenv.js'

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import logger from './helpers/logger.js'
import router from './routes/root.js'
import { notFound, errorHandler } from './helpers/errors.js'

const port = Number(process.env.PORT)

const app = express()

app.use(morgan(process.env.MORGAN_LOG))
app.use(cors({ origin: process.env.CORS_ORGIN }))
app.use(helmet())

app.use('/', router)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => 
  logger.info('Application started at http://localhost:${process.env.PORT}'),
)