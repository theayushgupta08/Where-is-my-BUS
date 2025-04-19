# Where is my BUS?

This is a full-stack application for managing buses, drivers, stops, and routes. It includes a backend built with Node.js and Express, and a frontend built with React and Vite.

---

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (running locally or on a cloud service like MongoDB Atlas)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd busapp
```

### 2. Create the .env File
Create a .env file in the backend/ directory with the following variables:
```bash
DBURL=<YOUR MONGO DB URI>
PORT=5173
```
Replace DBURL with your MongoDB connection string if you're using a remote database.


### 3. Install Dependencies
Backend
Navigate to the backend/ directory and install the dependencies:
```bash
cd backend
npm install
```

Frontend
Navigate to the frontend/ directory and install the dependencies:
```bash
cd ../frontend
npm install
```
---

## Running the Project
### 1. Start the Backend Server
Navigate to the backend/ directory and start the server:
```bash
cd backend
npm start
```
The backend server will run on http://localhost:5173 by default.

### 2. Start the Frontend Development Server
Navigate to the frontend/ directory and start the development server:
```bash
cd ../frontend
npm run dev
```
The frontend will run on http://localhost:5174 by default.





