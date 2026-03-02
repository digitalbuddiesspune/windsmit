/**
 * Single source for API base URL. No hardcoded URLs — set in .env or build env.
 * - Local: VITE_API_URL (e.g. http://localhost:5001/api) or VITE_BACKEND_URL for proxy.
 * - Production: set VITE_API_URL to your backend (e.g. https://windsmit-backend.onrender.com/api).
 */
function normalizeApiUrl(url) {
  if (!url || typeof url !== 'string') return ''
  let clean = url.trim().replace(/\/+$/, '')
  if (!clean.startsWith('http://') && !clean.startsWith('https://')) clean = `https://${clean}`
  if (!clean.includes('/api')) clean = `${clean}/api`
  return clean
}

export function getApiUrl() {
  // Production build: use Render backend from .env
  if (import.meta.env.MODE === 'production') {
    const prodUrl = import.meta.env.VITE_API_URL_PRODUCTION
    if (prodUrl) return normalizeApiUrl(prodUrl)
  }
  const envUrl = import.meta.env.VITE_API_URL
  if (envUrl) return normalizeApiUrl(envUrl)
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  if (backendUrl) return normalizeApiUrl(backendUrl)
  if (typeof window !== 'undefined' && /localhost:5173|127\.0\.0\.1:5173/.test(window.location.origin)) {
    console.warn('VITE_API_URL not set; using /api (proxy).')
    return '/api'
  }
  return ''
}
