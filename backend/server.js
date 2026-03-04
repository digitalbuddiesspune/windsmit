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

// const allowedOrigins = [
//   'http://localhost:5173',
//   'http://localhost:3000',
//   'https://windsmit.onrender.com',
//   'https://windsmitair.com'
// ]


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-firebase-uid'],
}));

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    } else {
      return callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
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
