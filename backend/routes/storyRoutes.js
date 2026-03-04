import express from 'express'
import { authenticate } from '../middleware/auth.js'
import * as storyController from '../controllers/storyController.js'

const router = express.Router()

router.get('/', storyController.getAll)
router.post('/', authenticate, storyController.create)
router.put('/:id', authenticate, storyController.update)
router.delete('/:id', authenticate, storyController.remove)

export default router
