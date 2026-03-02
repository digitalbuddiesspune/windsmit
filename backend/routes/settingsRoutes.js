import express from 'express'
import { authenticate } from '../middleware/auth.js'
import * as settingsController from '../controllers/settingsController.js'

const router = express.Router()

router.get('/:key', settingsController.getByKey)
router.put('/:key', authenticate, settingsController.update)

export default router
