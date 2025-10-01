# ⚡ Quick Start Guide for Reviewers

This guide will help you run the TaskFlow application in **5 minutes**.

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** (v18+) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

**No MongoDB installation needed** - The app uses MongoDB Atlas (cloud database), already configured!

---

## 🚀 Running the Application (3 Steps)

### Step 1: Clone and Install

```bash
# Clone the repository
git clone https://github.com/RACHANA3412/taskflow-assignment.git
cd taskflow-assignment

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 2: Configure Backend

```bash
# Go to backend folder
cd backend

# Create .env file (Windows)
copy .env.example .env

# Create .env file (Mac/Linux)
cp .env.example .env

# Edit .env and add:
# MONGODB_URI=mongodb+srv://rachanaashok34_db_user:$1000Billion@taskflow-cluster.64hoqjp.mongodb.net/scalable-web-app?retryWrites=true&w=majority&appName=taskflow-cluster
# JWT_SECRET=your-test-secret-key-12345
```

**OR use the demo database credentials (already configured):**
- MongoDB Atlas cluster is ready to use
- Just copy the `.env.example` to `.env` and you're good to go!

### Step 3: Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
✅ Backend runs on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd frontend  
npm run dev
```
✅ Frontend runs on: http://localhost:5173

### Step 4: Open Browser

Navigate to: **http://localhost:5173**

---

## 🎯 Testing the Application

### 1. Register a New User
- Click "Get Started" or "Register"
- Enter: Name, Email, Password (min 6 characters)
- You'll be redirected to the dashboard

### 2. Test Dashboard Features
- ✅ View task statistics
- ✅ Create a new task (click "+ New Task")
- ✅ Edit tasks (pencil icon)
- ✅ Delete tasks (trash icon)
- ✅ Search tasks
- ✅ Filter by status/priority

### 3. Test Profile
- Click your name in top-right
- Update profile information
- Save changes

### 4. Test Logout & Login
- Click "Logout"
- Login again with your credentials

---

## 🧪 Testing with Postman (Optional)

1. Open Postman
2. Import: `docs/postman_collection.json`
3. Set variable `baseUrl` to: `http://localhost:5000/api`
4. Test endpoints:
   - Register User
   - Login User (copy token from response)
   - Set `token` variable in Postman
   - Test protected endpoints (Get Tasks, Create Task, etc.)

---

## 📱 Expected Behavior

### Landing Page (http://localhost:5173)
- Modern gradient design
- "TaskFlow" branding
- Login/Register buttons
- Feature cards

### After Registration/Login
- Redirected to Dashboard
- See 3 statistic cards (Pending, In Progress, Completed)
- Search bar and filters
- Task list (empty initially)
- User menu in top-right

### Dashboard Features
- **Create Task**: Modal opens with form
- **Edit Task**: Click pencil icon, modal opens with task data
- **Delete Task**: Confirmation prompt
- **Search**: Real-time filtering
- **Filters**: Dropdown for status and priority

### Profile Page
- Display user information
- Edit mode button
- Update and save functionality

---

## 🐛 Troubleshooting

### Backend won't start?

**Error: MongoDB connection failed**
- Check if `.env` file exists in backend folder
- Verify `MONGODB_URI` is set correctly
- The demo MongoDB Atlas cluster should work out of the box

**Error: Port 5000 already in use**
```bash
# Windows: Kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux: Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

### Frontend won't start?

**Error: Port 5173 already in use**
- Close other Vite instances
- Or change port in `frontend/vite.config.js`

**CSS errors**
- Make sure you ran `npm install` in the frontend folder
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### Can't login?

**Check:**
1. Backend server is running (http://localhost:5000)
2. Open browser DevTools (F12) → Console for errors
3. Check Network tab for failed API calls
4. Verify MongoDB connection in backend terminal

### Database issues?

The app uses **MongoDB Atlas** (cloud):
- No local MongoDB installation needed
- Database is already configured
- Shared demo database for testing

**If you want to use your own database:**
1. Create free cluster at https://mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in `.env`

---

## 📊 API Endpoints

Base URL: `http://localhost:5000/api`

### Authentication
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user
- `GET /auth/profile` - Get profile (protected)
- `PUT /auth/profile` - Update profile (protected)

### Tasks
- `GET /tasks` - Get all tasks (protected)
- `POST /tasks` - Create task (protected)
- `GET /tasks/:id` - Get single task (protected)
- `PUT /tasks/:id` - Update task (protected)
- `DELETE /tasks/:id` - Delete task (protected)
- `GET /tasks/stats` - Get statistics (protected)

**See full API documentation:** `docs/API.md`

---

## 📁 Key Files to Review

### Code Quality
- `backend/server.js` - Express app setup
- `backend/models/User.js` - User schema with bcrypt
- `backend/models/Task.js` - Task schema with indexes
- `backend/middleware/auth.js` - JWT authentication
- `backend/controllers/authController.js` - Auth logic
- `backend/controllers/taskController.js` - CRUD logic

### Frontend
- `frontend/src/App.jsx` - Protected routes setup
- `frontend/src/context/AuthContext.jsx` - Auth state management
- `frontend/src/pages/Dashboard.jsx` - Main dashboard with CRUD
- `frontend/src/pages/Login.jsx` - Login with validation
- `frontend/src/components/TaskModal.jsx` - Reusable modal

### Documentation
- `README.md` - Comprehensive documentation
- `docs/API.md` - Complete API reference
- `docs/SCALABILITY.md` - Production scaling strategies
- `SUBMISSION.md` - Assignment deliverables summary

---

## ⏱️ Estimated Review Time

- **Setup**: 5 minutes
- **Testing Features**: 10 minutes
- **Code Review**: 20-30 minutes
- **Total**: ~45 minutes

---

## 💡 Demo Credentials (Optional)

If you want to skip registration, you can create a test account:
- Email: `demo@example.com`
- Password: `demo123`

(Register this account when you first open the app)

---

## ✅ Feature Checklist for Review

### Authentication
- [ ] User registration with validation
- [ ] Login with JWT token
- [ ] Protected routes redirect to login
- [ ] Logout clears token
- [ ] Password hashing (check MongoDB - passwords are hashed)

### Dashboard
- [ ] Statistics display correctly
- [ ] Create task works
- [ ] Edit task updates correctly
- [ ] Delete task removes task
- [ ] Search filters tasks
- [ ] Status filter works
- [ ] Priority filter works

### Security
- [ ] API requires authentication token
- [ ] Users can only access their own tasks
- [ ] Passwords are hashed in database
- [ ] JWT tokens expire (7 days)
- [ ] Input validation on forms

### UI/UX
- [ ] Responsive design (resize browser)
- [ ] Loading states visible
- [ ] Error messages display
- [ ] Smooth animations
- [ ] Mobile-friendly

### Code Quality
- [ ] Clean folder structure
- [ ] Consistent naming
- [ ] Error handling present
- [ ] Code commented where needed
- [ ] No console errors

---

## 📞 Support

If you encounter any issues during review:
1. Check the troubleshooting section above
2. Review `README.md` for detailed instructions
3. Check `docs/API.md` for API details

---

**Happy Reviewing! 🚀**

The application should be running smoothly. All features are functional and ready to test!
