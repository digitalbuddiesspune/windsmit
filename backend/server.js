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

// CORS: allow frontend (local + production). On Render set FRONTEND_URL to your frontend URL (e.g. https://windsmit.onrender.com).
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
  ...(process.env.FRONTEND_URL ? process.env.FRONTEND_URL.split(',').map(u => u.trim()).filter(Boolean) : [])
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

// Routes (must be registered before startServer so they exist when server listens)
app.use('/api/auth', authRoutes)
app.use('/api/blog', blogRoutes)
app.use('/api/stories', storyRoutes)
app.use('/api/settings', settingsRoutes)

// Health check (no auth) — use this on Render to confirm server + DB are up
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState
  const dbOk = dbState === 1
  res.json({
    status: dbOk ? 'OK' : 'DEGRADED',
    message: dbOk ? 'Server is running' : 'Server up but MongoDB not connected',
    mongodb: dbOk ? 'connected' : `readyState ${dbState}`,
    env: {
      hasMongoUri: !!process.env.MONGODB_URI,
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasFrontendUrl: !!process.env.FRONTEND_URL
    }
  })
})

// MongoDB Connection — wait for it before accepting requests (avoids 500 on first login on Render)
const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not set in environment')
    }
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message)
    process.exit(1)
  }

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
  })
}

startServer()
