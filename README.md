# 🔐 MERN Auth System (Login & Signup Only)

A beginner-friendly full-stack authentication project built with the **MERN stack**:

🖼️ **Frontend**: React (with Vite)
🧠 **Backend**: Node.js + Express
🗃️ **Database**: MongoDB Compass (local MongoDB)

This version only includes **Login** and **Signup** functionality. Dashboard and protected routes are **not** included yet.

---

## ⚙️ Tech Stack

* React + Vite
* Node.js + Express
* MongoDB with Mongoose
* JWT (jsonwebtoken)
* Bcrypt for password hashing
* Axios & React Router DOM

---

## 📁 Folder Structure

```
auth-system/
├── client/                  # Frontend - React
│   └── src/
│       ├── pages/
│       │   ├── Login.jsx
│       │   └── Signup.jsx
│       ├── App.jsx
│       └── main.jsx
├── server/                  # Backend - Express
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js
│   └── .env
```

---

## 🧪 Features

✅ Signup with username, email, and password
✅ Login with username and password
✅ JWT token returned on login
✅ MongoDB integration using Compass
✅ Basic form validation and error handling

---

## 🚀 Getting Started

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/auth-system.git
cd auth-system
```

### 2️⃣ Setup the Backend

```bash
cd server
npm install
```

#### ➕ Create `.env` in `server/`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_secret_key_here
```

#### ▶️ Run Backend

```bash
node server.js
```

You should see:

```
MongoDB connected
Server running on port 5000
```

### 3️⃣ Setup the Frontend

```bash
cd ../client
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧭 Routes

### 🔐 Auth Routes:

* `POST /api/auth/signup` → register user
* `POST /api/auth/login` → login user

---

## 📸 Pages Overview

* **Login Page** → Username + Password + Links to Forgot & Signup
* **Signup Page** → Username + Email + Password + Link to Login

---

## 🧼 .gitignore (important)

Make sure your root `.gitignore` includes:

```
node_modules/
.env
dist/
.vscode/
```

---

## 💡 Next Improvements (To-Do)

* 🔒 Dashboard with protected route and JWT auth
* 🔁 Forgot password & email reset
* 📧 Email verification
* 🔐 Google OAuth login

---

## 🧑‍💻 Author

Made with 💙 by **Lucky Joshi**

---

## 📜 License

[MIT License](LICENSE)
