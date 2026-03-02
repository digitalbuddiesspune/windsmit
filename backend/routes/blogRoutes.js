import express from 'express'
import { authenticate } from '../middleware/auth.js'
import * as blogController from '../controllers/blogController.js'

const router = express.Router()

router.get('/', blogController.getAll)
router.get('/:id', blogController.getById)
router.post('/', authenticate, blogController.create)
router.put('/:id', authenticate, blogController.update)
router.delete('/:id', authenticate, blogController.remove)

export default router
