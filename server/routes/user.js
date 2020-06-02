import { Router } from 'express'
import signIn from '../middlewares/signIn'
import signUp from '../middlewares/signUp'


export default () => {
  let api = Router()
  api.get('/signIn', signIn)
  api.get('/signUp', signUp)
  return api
}
