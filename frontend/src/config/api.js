/**
 * Single source for API base URL.
 * - Use VITE_API_URL in .env (local) or set at build time (e.g. AWS, Render).
 * - If not set in production build, falls back to Render backend so AWS/deployed frontend works.
 */
const DEFAULT_PRODUCTION_API = 'https://windsmit-backend.onrender.com/api'

export function getApiUrl() {
  const envUrl = import.meta.env.VITE_API_URL
  if (envUrl) {
    let cleanUrl = envUrl.replace(/\/+$/, '')
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) cleanUrl = `https://${cleanUrl}`
    if (!cleanUrl.includes('/api')) cleanUrl = `${cleanUrl}/api`
    return cleanUrl
  }
  // Local dev without .env: use proxy if on Vite dev server
  if (typeof window !== 'undefined' && /localhost:5173|127\.0\.0\.1:5173/.test(window.location.origin)) {
    console.warn('VITE_API_URL not set; using /api (proxy). Set VITE_API_URL in .env for direct backend.')
    return '/api'
  }
  // Production (e.g. AWS) without VITE_API_URL at build time: use Render backend
  if (import.meta.env.MODE === 'production') {
    return DEFAULT_PRODUCTION_API
  }
  return DEFAULT_PRODUCTION_API
}
