# To-Do App

A full-stack to-do application that allows users to manage their tasks efficiently. The app includes user authentication, task creation, editing, deletion, and search functionality.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation/Run app](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)


## Features

- **User Authentication**: Secure login and registration using JSON Web Tokens (JWT).
- **Task Management**: Create, read, update, and delete tasks.
- **Search Functionality**: Search tasks based on keywords.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework.
- **React Router DOM**: Declarative routing for React.
- **Axios**: Promise-based HTTP client.
- **React Icons**: Include popular icons in your React projects easily.
- **React Modal**: Accessible modal dialog component for React.
- **Moment.js**: Parse, validate, manipulate, and display dates and times.

### Backend

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database for storing tasks and user data.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JSON Web Tokens**: Secure token-based authentication.
- **dotenv**: Loads environment variables from a `.env` file.
- **Cors**: Node.js package for providing Cross-Origin Resource Sharing.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas cloud database)

## Installation

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/to-do-app.git
2. **Navigate to the backend directory**
   ```bash
   cd backend
3. **Install dependencies**
   ```bash
   npm install
4. **Create a .env file and add your environment variables**
   ```bash
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
5. **Start the server**
   ```bash
   npm start


### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd To-Do-App\frontend
2. **Install dependencies**
   ```bash
   npm install
3. **Start the server**
   ```bash
   npm run dev
