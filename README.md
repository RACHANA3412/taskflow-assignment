# Scalable Web App - TaskFlow

A modern, full-stack web application with authentication, user profiles, and CRUD operations for task management. Built with React, Express, MongoDB, and JWT authentication.

## 🚀 Features

### Frontend
- ✅ **Modern React UI** - Built with React 18 and Vite for fast development
- ✅ **Responsive Design** - TailwindCSS for mobile-first, responsive layouts
- ✅ **Protected Routes** - Route guards for authenticated pages
- ✅ **Form Validation** - Client-side and server-side validation
- ✅ **Beautiful Components** - Custom UI components with Lucide icons
- ✅ **Real-time Filtering** - Search and filter tasks by status and priority
- ✅ **Modal Dialogs** - Smooth UX for creating and editing tasks

### Backend
- ✅ **RESTful API** - Well-structured Express.js API
- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **Password Hashing** - bcrypt for secure password storage
- ✅ **MongoDB Integration** - Mongoose ODM with schema validation
- ✅ **Error Handling** - Centralized error handling middleware
- ✅ **Security Features** - Helmet, CORS, rate limiting
- ✅ **Input Validation** - express-validator for request validation

### Dashboard Features
- 📊 **Statistics Dashboard** - Real-time task stats by status
- 📝 **CRUD Operations** - Create, read, update, delete tasks
- 🔍 **Search & Filter** - Filter by status, priority, and search text
- 👤 **User Profile** - View and update profile information
- 🔐 **Secure Logout** - Token cleanup on logout

## 🛠 Tech Stack

### Frontend
- React 18
- React Router v6
- TailwindCSS
- Axios
- Lucide React (icons)
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- helmet
- cors

## 📁 Project Structure

```
scalable-web-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── taskController.js     # Task CRUD logic
│   ├── middleware/
│   │   ├── auth.js               # JWT authentication middleware
│   │   └── error.js              # Error handling middleware
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Task.js               # Task schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── taskRoutes.js         # Task endpoints
│   ├── utils/
│   │   └── generateToken.js      # JWT token generator
│   ├── .env.example              # Environment variables template
│   ├── package.json
│   └── server.js                 # Express app entry point
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── TaskModal.jsx     # Task create/edit modal
│   │   ├── context/
│   │   │   └── AuthContext.jsx   # Authentication context
│   │   ├── pages/
│   │   │   ├── Landing.jsx       # Landing page
│   │   │   ├── Login.jsx         # Login page
│   │   │   ├── Register.jsx      # Registration page
│   │   │   ├── Dashboard.jsx     # Main dashboard
│   │   │   └── Profile.jsx       # User profile page
│   │   ├── utils/
│   │   │   └── api.js            # Axios configuration
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # App entry point
│   │   └── index.css             # Global styles
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
└── docs/
    ├── API.md                     # API documentation
    └── SCALABILITY.md             # Scalability notes
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd scalable-web-app
```

2. **Set up Backend**
```bash
cd backend
npm install

# Create .env file
copy .env.example .env

# Edit .env with your configuration
# MONGODB_URI=mongodb://localhost:27017/scalable-web-app
# JWT_SECRET=your-secret-key
```

3. **Set up Frontend**
```bash
cd ../frontend
npm install
```

### Running the Application

1. **Start MongoDB** (if running locally)
```bash
mongod
```

2. **Start Backend Server**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

3. **Start Frontend Development Server**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)

### Tasks
- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)
- `GET /api/tasks/stats` - Get task statistics (protected)

See [API.md](./docs/API.md) for detailed documentation.

## 🔒 Security Features

1. **Password Hashing** - bcrypt with salt rounds
2. **JWT Authentication** - Secure token-based auth
3. **Protected Routes** - Middleware authentication checks
4. **Input Validation** - Server-side validation with express-validator
5. **Rate Limiting** - Protection against brute force attacks
6. **CORS** - Cross-origin resource sharing configuration
7. **Helmet** - Security headers middleware
8. **Environment Variables** - Sensitive data in .env files

## 📈 Scalability Considerations

For detailed scalability notes, see [SCALABILITY.md](./docs/SCALABILITY.md)

### Key Points:
- **Database Indexing** - Indexes on frequently queried fields
- **Stateless Authentication** - JWT for horizontal scaling
- **Modular Architecture** - Easy to split into microservices
- **Environment Configuration** - Easy deployment to different environments
- **API Versioning** - Ready for future API versions
- **Caching Strategy** - Ready for Redis integration
- **Load Balancing** - Stateless design supports load balancers

## 🧪 Testing

You can test the API using the included Postman collection in `docs/postman_collection.json`

Or use these curl commands:

```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 🎨 UI/UX Features

- Clean, modern interface with gradient backgrounds
- Responsive design (mobile, tablet, desktop)
- Loading states and error handling
- Smooth transitions and animations
- Intuitive navigation
- Color-coded task priorities and statuses
- Real-time search and filtering
- Modal dialogs for better UX

## 📝 Code Quality

- **ES6+ Syntax** - Modern JavaScript features
- **Modular Structure** - Organized by feature/responsibility
- **Error Handling** - Comprehensive error catching
- **Code Comments** - Well-documented code
- **Consistent Naming** - Clear, descriptive names
- **DRY Principles** - Reusable components and functions

## 🚀 Deployment

### Backend Deployment (Railway/Render/Heroku)
1. Set environment variables
2. Configure MongoDB Atlas connection
3. Deploy using git

### Frontend Deployment (Vercel/Netlify)
1. Build production bundle: `npm run build`
2. Deploy dist folder
3. Configure environment variables

## 🤝 Contributing

This is a demonstration project. Feel free to fork and modify for your needs.

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 👨‍💻 Author

Built as a demonstration of modern full-stack development practices.

---

**Note**: This application demonstrates best practices for building scalable web applications with authentication and CRUD operations. It's designed to be easily extended with additional features like real-time updates, file uploads, team collaboration, etc.
