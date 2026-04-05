# 💰 Finance Dashboard Backend API

## 🌐 Live API
👉 https://your-backend-url.onrender.com

## 📌 Overview

This project is a backend system for a finance dashboard that manages financial records and provides role-based access control.

It allows users to create, view, and manage financial data based on their assigned roles.

---

## 🚀 Features

### 🔐 Authentication

* User Registration
* User Login (JWT आधारित authentication)

### 👥 Role-Based Access Control

* **Viewer**

  * Can view dashboard data
* **Analyst**

  * Can view records and dashboard insights
* **Admin**

  * Full access (create, update, delete records and manage users)

---

## 📊 Financial Records

* Create records (Admin only)
* View records (All roles)
* Update records (Admin only)
* Delete records (Admin only)
* Filter support (optional)

---

## 📈 Dashboard APIs

* Total Income
* Total Expense
* Net Balance

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/radhanapatel33/finance-dashboard-backend.git
cd finance-dashboard-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm start
```

---

## 🔗 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Records

* `GET /api/records`
* `POST /api/records` (Admin only)
* `PATCH /api/records/:id` (Admin only)
* `DELETE /api/records/:id` (Admin only)

### Dashboard

* `GET /api/dashboard/summary`

---

## 🔐 Access Control Logic

Role-based middleware is used to restrict access:

* Viewer → Read-only access
* Analyst → Read + insights
* Admin → Full control

---

## 🧪 Testing

All APIs were tested using Postman.

---

## 📌 Notes

* Clean and simple backend structure
* Focused on core functionality and access control
* Designed for clarity and maintainability

---

## 👩‍💻 Author

Radhana Patel
