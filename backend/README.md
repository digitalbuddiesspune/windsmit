# Windsmit Air Backend

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory with:
```
MONGODB_URI=mongodb+srv://windsmit:wind123@cluster0.fbwi4qa.mongodb.net/?appName=Cluster0
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new admin (for initial setup)
- `POST /api/auth/login` - Login admin

### Blog Posts
- `GET /api/blog` - Get all blog posts (query params: `category`, `published`)
- `GET /api/blog/:id` - Get single blog post
- `POST /api/blog` - Create new blog post (requires auth)
- `PUT /api/blog/:id` - Update blog post (requires auth)
- `DELETE /api/blog/:id` - Delete blog post (requires auth)

## Initial Admin Setup

To create your first admin account, make a POST request to `/api/auth/register`:

```json
{
  "username": "admin",
  "email": "admin@windsmitair.com",
  "password": "your-secure-password"
}
```

Then use the email and password to login at `/api/auth/login`.

## Deploying to Render

1. In the Render dashboard for your **backend** service, set **Environment Variables**:
   - `MONGODB_URI` – your MongoDB Atlas connection string (required)
   - `JWT_SECRET` – a strong secret for signing tokens (required)
   - `FRONTEND_URL` – your frontend URL so login works from the browser (e.g. `https://windsmit.onrender.com` or your Vercel URL). Use a comma-separated list for multiple origins.

2. If login returns **500**, check the **Logs** tab on Render for the real error (e.g. missing `MONGODB_URI`, DB connection failure).

3. **Data works locally but not on Render?** Usually one of these:
   - **MongoDB Atlas Network Access**  
     In [MongoDB Atlas](https://cloud.mongodb.com) → your project → Network Access: add **Allow Access from Anywhere** (`0.0.0.0/0`). Otherwise Render’s IPs are blocked and the backend can’t connect.
   - **Frontend still calling localhost**  
     The deployed frontend must call your Render backend. When you **build** the frontend, set `VITE_API_URL=https://windsmit-backend.onrender.com/api` (your real backend URL) in that build’s environment. Vite bakes this in at build time; if it’s missing, the app uses `http://localhost:5000/api` and requests fail on the live site.
   - **Check backend health**  
     Open `https://windsmit-backend.onrender.com/api/health` in a browser. You should see `"status":"OK"` and `"mongodb":"connected"`. If `mongodb` is not connected, fix Atlas Network Access and `MONGODB_URI` on Render.
