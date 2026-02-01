# Where is my BUS?

A comprehensive full-stack bus management system for tracking and managing buses, drivers, stops, and routes. This application provides an intuitive admin dashboard for efficient bus fleet management with real-time tracking capabilities.

## 🚀 Features

- **Bus Management**: View, add, update, and delete bus information
- **Driver Management**: Manage driver profiles, assignments, and schedules
- **Route Management**: Create and manage bus routes with multiple stops
- **Stop Management**: Add and manage bus stops with GPS coordinates
- **Admin Dashboard**: Centralized dashboard for all management operations
- **Secure Authentication**: Admin login with password protection
- **Real-time Tracking**: GPS-based bus location tracking (planned)
- **Responsive UI**: Modern, user-friendly interface built with React and Tailwind CSS

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Yup** - Schema validation
- **Three.js / React Three Fiber** - 3D graphics (for bus visualization)
- **Redux Toolkit** - State management

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database (via Mongoose)
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (running locally or on a cloud service like MongoDB Atlas)

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Where-is-my-BUS
```

### 2. Backend Setup

#### Create the .env File
Create a `.env` file in the `backend/` directory:
```bash
DBURL=<YOUR_MONGODB_URI>
PORT=4000
```

**Note**: 
- Replace `<YOUR_MONGODB_URI>` with your MongoDB connection string
- The backend server defaults to port 4000 if PORT is not specified

#### Install Dependencies
```bash
cd backend
npm install
```

#### Create Admin Account (Optional)
To create an admin account, you can use the `addAdmin.js` script:
```bash
node addAdmin.js
```

### 3. Frontend Setup

#### Create the .env File
Create a `.env` file in the `frontend/` directory:
```bash
VITE_API_URL=<YOUR_GEMINI_API_URI>
```

**Note**: Replace `<YOUR_GEMINI_API_URI>` with your Gemini API endpoint (if using AI features)

#### Install Dependencies
```bash
cd ../frontend
npm install
```

## 🚀 Running the Project

### Development Mode

#### 1. Start the Backend Server
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm start
```
The backend server will run on `http://localhost:4000` by default (or the port specified in your `.env` file).

#### 2. Start the Frontend Development Server
Open another terminal and navigate to the frontend directory:
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:5174` by default.

### Production Build

#### Build the Frontend
```bash
cd frontend
npm run build
```
The production build will be created in the `frontend/dist/` directory.

#### Preview the Production Build
```bash
cd frontend
npm run preview
```

## 📁 Project Structure

```
Where-is-my-BUS/
├── backend/
│   ├── controllers/      # Business logic controllers
│   │   ├── admincontroller.js
│   │   ├── attendanceController.js
│   │   ├── busController.js
│   │   ├── driverController.js
│   │   ├── routeController.js
│   │   ├── stopController.js
│   │   └── db.js
│   ├── models/          # MongoDB schemas
│   │   ├── admin.js
│   │   ├── bus.js
│   │   ├── busRoute.js
│   │   ├── driver.js
│   │   └── stop.js
│   ├── routes/          # API routes
│   │   └── route.js
│   ├── data/           # Static data
│   ├── app.js          # Express app configuration
│   ├── addAdmin.js     # Admin creation script
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── assets/      # Images and static files
│   │   ├── constants/   # Constants and configuration
│   │   ├── utils/       # Utility functions
│   │   ├── hoc/         # Higher-order components
│   │   ├── App.jsx      # Main app component
│   │   ├── main.jsx     # Entry point
│   │   └── axiosInstance.js
│   ├── public/         # Public assets
│   ├── vite.config.js  # Vite configuration
│   └── package.json
└── README.md
```

## 🔐 API Endpoints

The backend API is available at `/api` with the following main endpoints:

- `/api/admin/*` - Admin authentication and management
- `/api/bus/*` - Bus CRUD operations
- `/api/driver/*` - Driver CRUD operations
- `/api/route/*` - Route CRUD operations
- `/api/stop/*` - Stop CRUD operations
- `/api/attendance/*` - Driver attendance tracking

## 👥 Team

- **Ayush Gupta** - Full-Stack Developer
- **Amitsingh Tanwar** - Backend Developer
- **Divesh Achhra** - Mobile App Developer
- **Dr. Sunil Rathod** - Project Guide

## 📝 Usage

1. **Login**: Navigate to the login page and enter your admin credentials
2. **Dashboard**: Access the main dashboard after successful login
3. **Manage Entities**: Use the navigation to manage buses, drivers, routes, and stops
4. **CRUD Operations**: Perform Create, Read, Update, and Delete operations on all entities

## 🔮 Future Enhancements

- Real-time GPS tracking integration
- Passenger mobile application
- Advanced analytics and reporting
- Automated notifications system
- Payment integration for ticket booking
- Multi-user roles and permissions
- WebSocket support for real-time updates

## 📄 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For more information, visit the project repository or contact the development team.





