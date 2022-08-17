import express from 'express'
import ClassesControler from './controllers/ClassesController'

const routes = express.Router()
const classesController = new ClassesControler()



routes.post('/classes', classesController.create) 

export default routes