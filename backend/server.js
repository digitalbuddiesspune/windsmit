import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import blogRoutes from './routes/blogRoutes.js'
import authRoutes from './routes/authRoutes.js'
import storyRoutes from './routes/storyRoutes.js'
import settingsRoutes from './routes/settingsRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// CORS: allow frontend (Vite on 5173, etc.) so admin login works from browser
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000'
]
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB')
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error)
  })

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/stories', storyRoutes)
app.use('/api/settings', settingsRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
