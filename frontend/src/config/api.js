/**
 * Single source for API base URL.
 * 
 * IMPORTANT: This function does NOT modify the URL except removing trailing slashes.
 * - We do NOT auto-append /api (you must include it in VITE_API_URL if needed)
 * - We do NOT force https:// (use the exact protocol you need)
 * - We do NOT mutate the URL structure (trust the environment variable)
 * 
 * Why? Different deployment platforms (AWS, Render, Vercel) may have different URL structures.
 * Some may use /api prefix, some may not. Some may need http://, some https://.
 * By not modifying the URL, we ensure maximum compatibility and predictability.
 * 
 * Usage in .env:
 * - Local: VITE_API_URL=http://localhost:5000/api
 * - Production: VITE_API_URL=https://windsmit-backend.onrender.com/api
 * 
 * Note: Vite bakes environment variables at build time, so set VITE_API_URL
 * in your deployment platform's environment variables before building.
 */
export function getApiUrl() {
  const envUrl = import.meta.env.VITE_API_URL
  
  // Handle missing VITE_API_URL gracefully
  // We return empty string instead of throwing to prevent app crashes
  // Components with try-catch blocks will handle failed API calls gracefully
  if (!envUrl) {
    console.warn('⚠️ VITE_API_URL is not set in environment variables')
    console.warn('API calls will fail. Please set VITE_API_URL in your .env file or deployment environment.')
    return ''
  }
  
  // Only remove trailing slashes - no other modifications
  // This preserves the exact URL structure as provided in the environment variable
  // The URL is used exactly as configured, ensuring compatibility with all deployment platforms
  return envUrl.replace(/\/+$/, '')
}
