# API Documentation

Base URL: `http://localhost:5000/api`

## Authentication Endpoints

### Register User

**POST** `/auth/register`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation:**
- `name`: Required, non-empty string
- `email`: Required, valid email format
- `password`: Required, minimum 6 characters

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "",
    "avatar": "",
    "token": "jwt_token_here"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User already exists"
}
```

---

### Login User

**POST** `/auth/login`

Authenticate a user and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation:**
- `email`: Required, valid email format
- `password`: Required

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "Software Developer",
    "avatar": "https://example.com/avatar.jpg",
    "token": "jwt_token_here"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### Get User Profile

**GET** `/auth/profile`

Get the authenticated user's profile information.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "bio": "Software Developer",
    "avatar": "https://example.com/avatar.jpg"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Not authorized, no token"
}
```

---

### Update User Profile

**PUT** `/auth/profile`

Update the authenticated user's profile.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body (all fields optional):**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "bio": "Full Stack Developer",
  "avatar": "https://example.com/new-avatar.jpg",
  "password": "newpassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "bio": "Full Stack Developer",
    "avatar": "https://example.com/new-avatar.jpg",
    "token": "new_jwt_token_here"
  }
}
```

---

## Task Endpoints

All task endpoints require authentication via JWT token in the Authorization header.

### Get All Tasks

**GET** `/tasks`

Retrieve all tasks for the authenticated user with optional filtering.

**Headers:**
```
Authorization: Bearer {token}
```

**Query Parameters (optional):**
- `status`: Filter by status (`pending`, `in-progress`, `completed`)
- `priority`: Filter by priority (`low`, `medium`, `high`)
- `search`: Search in title and description
- `sortBy`: Sort field (default: `createdAt`)
- `order`: Sort order (`asc` or `desc`, default: `desc`)

**Example:**
```
GET /api/tasks?status=in-progress&priority=high&search=urgent&sortBy=dueDate&order=asc
```

**Success Response (200):**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "task_id",
      "title": "Complete project documentation",
      "description": "Write comprehensive API docs",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-12-31T00:00:00.000Z",
      "user": "user_id",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-02T00:00:00.000Z"
    }
  ]
}
```

---

### Get Single Task

**GET** `/tasks/:id`

Get details of a specific task.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "task_id",
    "title": "Complete project documentation",
    "description": "Write comprehensive API docs",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z",
    "user": "user_id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-02T00:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Task not found"
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Not authorized to access this task"
}
```

---

### Create Task

**POST** `/tasks`

Create a new task.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "title": "Complete project documentation",
  "description": "Write comprehensive API docs",
  "status": "pending",
  "priority": "high",
  "dueDate": "2024-12-31"
}
```

**Validation:**
- `title`: Required, max 100 characters
- `description`: Optional, max 1000 characters
- `status`: Optional, one of: `pending`, `in-progress`, `completed` (default: `pending`)
- `priority`: Optional, one of: `low`, `medium`, `high` (default: `medium`)
- `dueDate`: Optional, valid date

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "task_id",
    "title": "Complete project documentation",
    "description": "Write comprehensive API docs",
    "status": "pending",
    "priority": "high",
    "dueDate": "2024-12-31T00:00:00.000Z",
    "user": "user_id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

### Update Task

**PUT** `/tasks/:id`

Update an existing task.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body (all fields optional):**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed",
  "priority": "medium",
  "dueDate": "2024-12-15"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "task_id",
    "title": "Updated title",
    "description": "Updated description",
    "status": "completed",
    "priority": "medium",
    "dueDate": "2024-12-15T00:00:00.000Z",
    "user": "user_id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-05T00:00:00.000Z"
  }
}
```

---

### Delete Task

**DELETE** `/tasks/:id`

Delete a task.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Task removed"
}
```

---

### Get Task Statistics

**GET** `/tasks/stats`

Get statistics about user's tasks.

**Headers:**
```
Authorization: Bearer {token}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "byStatus": [
      {
        "_id": "pending",
        "count": 5
      },
      {
        "_id": "in-progress",
        "count": 3
      },
      {
        "_id": "completed",
        "count": 12
      }
    ],
    "byPriority": [
      {
        "_id": "low",
        "count": 4
      },
      {
        "_id": "medium",
        "count": 8
      },
      {
        "_id": "high",
        "count": 8
      }
    ]
  }
}
```

---

## Error Responses

All endpoints may return these error responses:

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized, token failed"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 429 Too Many Requests
```json
{
  "success": false,
  "message": "Too many requests from this IP, please try again later."
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Server error message",
  "stack": "Error stack (development only)"
}
```

---

## Rate Limiting

The API implements rate limiting:
- **Window**: 10 minutes
- **Max Requests**: 100 per IP
- **Response**: 429 Too Many Requests when exceeded

---

## Authentication Flow

1. User registers or logs in
2. Server returns JWT token
3. Client stores token (localStorage)
4. Client includes token in Authorization header for protected routes
5. Server validates token and processes request
6. Token expires after 7 days (configurable)

---

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Tasks
```bash
curl -X GET http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Task",
    "description": "Task description",
    "priority": "high"
  }'
```
