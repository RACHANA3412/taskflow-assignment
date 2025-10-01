# TaskFlow Frontend

React frontend for TaskFlow task management application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── TaskModal.jsx     # Task create/edit modal
│   ├── context/
│   │   └── AuthContext.jsx   # Auth state management
│   ├── pages/
│   │   ├── Landing.jsx       # Landing page
│   │   ├── Login.jsx         # Login page
│   │   ├── Register.jsx      # Register page
│   │   ├── Dashboard.jsx     # Main dashboard
│   │   └── Profile.jsx       # User profile
│   ├── utils/
│   │   └── api.js            # Axios configuration
│   ├── App.jsx               # Main app
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Features

- **Authentication** - Login, register, protected routes
- **Dashboard** - Task management with CRUD operations
- **Search & Filter** - Real-time task filtering
- **Statistics** - Visual task statistics
- **Profile Management** - Update user profile
- **Responsive Design** - Mobile-friendly UI

## Technology Stack

- React 18
- React Router v6
- TailwindCSS
- Axios
- Lucide Icons
- Vite

## Configuration

The frontend connects to the backend at `http://localhost:5000` by default.

To change this, update `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://your-backend-url',
        changeOrigin: true,
      },
    },
  },
})
```

## Deployment

### Vercel
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Manual
1. Build: `npm run build`
2. Upload `dist/` folder to any static host

## Environment Variables

For production, update API URLs in:
- `src/context/AuthContext.jsx`
- `src/utils/api.js`

Or use environment variables with Vite:

Create `.env.production`:
```
VITE_API_URL=https://your-api.com
```

Update code:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
