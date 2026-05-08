# 🛠️ UpCraft — Skill Learning & Certification Platform

UpCraft is a full-stack MERN-based e-learning platform designed to help users learn practical skills through structured courses, video-based learning, quizzes, and automated certification workflows.

The platform focuses on delivering a smooth end-to-end learning experience with secure authentication, real-time quiz evaluation, and backend-driven certificate generation.

---

# 🚀 Features

* User Authentication & Authorization
* Course Enrollment & Progress Tracking
* Video-based Learning Modules
* Quiz Evaluation System
* Automated PDF Certificate Generation
* Secure Backend APIs
* Dashboard for Course & Certificate Management
* Role-based Access Control
* Responsive Full-Stack Interface

---

# ⚙️ Tech Stack

## Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication & Security

* JWT Authentication
* bcrypt Password Hashing
* Protected Routes
* Middleware-based Validation

## Tools

* Git & GitHub
* Postman
* VS Code
* Vite

---

# 🧠 Backend Engineering Highlights

In this project, I focused heavily on backend architecture, API development, authentication systems, and workflow automation.

Key backend implementations include:

* Developed RESTful APIs using Node.js and Express.js for authentication, courses, quizzes, and certificates.
* Implemented secure JWT-based authentication and authorization workflows.
* Used bcrypt hashing for password security and protected user credentials.
* Built a quiz evaluation engine that dynamically processes user submissions and calculates results.
* Created an automated certificate generation workflow triggered after successful course completion.
* Designed modular backend architecture using controllers, middleware, routes, and utility services.
* Structured MongoDB collections and optimized queries for efficient data retrieval.
* Implemented backend validation, centralized error handling, and production-style request processing.
* Integrated frontend and backend systems for seamless real-time user workflows.

---

# 📁 Project Structure

```bash
UpCraft/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── styles/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 🔐 Authentication Flow

* User registers/login using secure APIs.
* Passwords are hashed using bcrypt before storage.
* JWT tokens are generated upon successful authentication.
* Protected routes are validated using middleware.
* Role-based authorization restricts admin-specific functionality.

---

# 📡 Backend API Endpoints

## Authentication

* POST `/api/v1/register`
* POST `/api/v1/login`

## Courses

* GET `/api/v1/courses`
* GET `/api/v1/courses/:id`

## Quiz

* POST `/api/v1/quiz/submit`
* GET `/api/v1/quiz/result/:id`

## Certificates

* POST `/api/v1/certificate/generate`
* GET `/api/v1/certificate/:id`

## Admin

* GET `/api/v1/admin/dashboard`
* GET `/api/v1/admin/users`

---

# ⚡ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/UpCraft.git
cd UpCraft
```

---

# Backend Setup

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run Backend Server

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

# Frontend Setup

## Navigate to Frontend

```bash
cd frontend
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🧪 Example User Workflow

1. User creates an account and logs in securely.
2. User browses available courses.
3. User enrolls and watches course content.
4. User completes quizzes after finishing modules.
5. Backend evaluates quiz submissions dynamically.
6. Upon passing, a digital certificate is generated automatically.
7. User can download and manage certificates from the dashboard.

---

# 📈 Future Improvements

* AI-powered personalized course recommendations
* Real-time analytics dashboard
* Certificate verification system
* Microservices-based backend scaling
* WebSocket-based live progress tracking
* AI-generated quizzes and assessments

---

# 📄 License

This project is licensed under the MIT License.
