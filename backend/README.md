# TaskFlow Backend

RESTful API backend for TaskFlow task management application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/scalable-web-app
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d
NODE_ENV=development
```

4. Start MongoDB (if running locally):
```bash
mongod
```

5. Run the server:
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database configuration
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── taskController.js  # Task CRUD logic
├── middleware/
│   ├── auth.js            # JWT verification
│   └── error.js           # Error handling
├── models/
│   ├── User.js            # User schema
│   └── Task.js            # Task schema
├── routes/
│   ├── authRoutes.js      # Auth endpoints
│   └── taskRoutes.js      # Task endpoints
├── utils/
│   └── generateToken.js   # JWT token generator
└── server.js              # Express app
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get profile (protected)
- `PUT /api/auth/profile` - Update profile (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/:id` - Get task by ID (protected)
- `POST /api/tasks` - Create task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)
- `GET /api/tasks/stats` - Get statistics (protected)

## Security Features

- Password hashing with bcrypt
- JWT authentication
- Rate limiting (100 req/10min)
- Helmet.js security headers
- Input validation
- CORS configuration

## MongoDB Setup

### Local MongoDB
```bash
mongod --dbpath /path/to/data
```

### MongoDB Atlas (Cloud)
1. Create cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Update MONGODB_URI in .env

## Testing

Use the Postman collection in `/docs/postman_collection.json`

Or test with curl:
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Deployment

### Railway/Render
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Heroku
```bash
heroku create taskflow-api
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set JWT_SECRET=your-secret
git push heroku main
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| MONGODB_URI | MongoDB connection string | Required |
| JWT_SECRET | Secret for JWT signing | Required |
| JWT_EXPIRE | Token expiration time | 7d |
| NODE_ENV | Environment mode | development |
| CLIENT_URL | Frontend URL for CORS | http://localhost:5173 |
