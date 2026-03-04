import mongoose from 'mongoose'
import Admin from '../models/Admin.js'
import jwt from 'jsonwebtoken'

function getJwtSecret() {
  const secret = process.env.JWT_SECRET
  if (!secret || secret === 'your-secret-key-change-in-production') {
    throw new Error('JWT_SECRET is not set or is the default value. Set JWT_SECRET in your environment (e.g. Render env vars).')
  }
  return secret
}

export async function register(req, res) {
  try {
    const secret = getJwtSecret()
    const { username, email, password } = req.body

    if (!username?.trim() || !email?.trim() || !password) {
      return res.status(400).json({ error: 'Username, email and password are required' })
    }

    const existingAdmin = await Admin.findOne({ $or: [{ email: email.trim().toLowerCase() }, { username: username.trim() }] })
    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin already exists' })
    }

    const admin = new Admin({ username: username.trim(), email: email.trim().toLowerCase(), password })
    await admin.save()

    const token = jwt.sign({ id: admin._id }, secret, { expiresIn: '7d' })
    res.status(201).json({ token, admin: { id: admin._id, username: admin.username, email: admin.email } })
  } catch (error) {
    console.error('POST /api/auth/register error:', error)
    if (error.message && error.message.includes('JWT_SECRET')) {
      return res.status(500).json({ error: 'Server configuration error. Please contact support.' })
    }
    return res.status(400).json({ error: error.message || 'Registration failed' })
  }
}

export async function login(req, res) {
  try {
    // Require JWT_SECRET before doing any work
    const secret = getJwtSecret()

    if (mongoose.connection.readyState !== 1) {
      console.error('Login attempted but MongoDB not connected (readyState:', mongoose.connection.readyState, ')')
      return res.status(503).json({ error: 'Service temporarily unavailable. Try again in a moment.' })
    }

    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const admin = await Admin.findOne({ email: String(email).trim().toLowerCase() })
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isMatch = await admin.comparePassword(String(password))
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: admin._id }, secret, { expiresIn: '7d' })
    res.json({ token, admin: { id: admin._id, username: admin.username, email: admin.email } })
  } catch (error) {
    console.error('POST /api/auth/login error:', error)
    // Do not leak JWT_SECRET message to client
    if (error.message && error.message.includes('JWT_SECRET')) {
      return res.status(500).json({ error: 'Login failed. Please try again.' })
    }
    return res.status(500).json({ error: 'Login failed. Please try again.' })
  }
}
