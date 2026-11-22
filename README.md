# Student Management System

A full-stack Student Management System built using **React, Vite, Tailwind CSS, Node.js, Express.js, and MariaDB**. It provides a simple interface to manage student records through CRUD operations.

## Features

- **Create:** Add new student records.
- **Read:** View all registered students.
- **Update:** Edit existing student details.
- **Delete:** Remove student records.
- Store student information in a MariaDB database.
- Connect the React frontend to a REST API built with Express.

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- JavaScript

### Backend
- Node.js
- Express.js
- mysql2
- dotenv
- cors

### Database
- MariaDB

## Project Structure

```text
student-management/
├── backend/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env                 # Local only; do not commit
├── src/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js and npm
- MariaDB Server
- Git (optional)

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ayu015/CRUD-FORM-MongoDB-.git
cd CRUD-FORM-MongoDB-
```

### 2. Create the MariaDB database and table

Open the MariaDB command-line client and run:

```sql
CREATE DATABASE studentManagement;

USE studentManagement;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    fatherName VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    mobile VARCHAR(15) NOT NULL,
    course VARCHAR(50) NOT NULL
);
```

Fictional sample records may be used for testing. Do not add real confidential student information to a public repository.

### 3. Configure and start the backend

Open a terminal in the `backend` directory:

```bash
cd backend
npm install
```

Create a local file named `.env` inside `backend/`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mariadb_password
DB_NAME=studentManagement
DB_PORT=3306
```

Replace `your_mariadb_password` with your local MariaDB password. Never commit or share the real `.env` file.

Start the backend:

```bash
node server.js
```

The backend runs at `http://localhost:5000`.

### 4. Install and start the frontend

Open a second terminal in the project root:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/students` | Get all student records |
| POST | `/students` | Add a new student |
| PUT | `/students/:id` | Update a student by ID |
| DELETE | `/students/:id` | Delete a student by ID |

The API uses JSON for request and response data.

## Git and Data Privacy

The `.gitignore` file excludes local and sensitive files such as:

- `.env` files and environment-specific secrets
- `node_modules`
- Build output and coverage files
- Logs
- Local editor and operating-system configuration
- Private keys and certificates

SQL schema scripts and fictional test data are not ignored by default and may be committed when useful for development. Before pushing, check that files do not contain real personal or confidential information, passwords, access tokens, or private keys.

Check files before committing:

```bash
git status
git diff --cached --name-only
```

Note: `.gitignore` does not automatically untrack files that were committed previously. If a secret was committed, remove it from repository history as appropriate and rotate the exposed credential.

## Future Improvements

- Search students by name or email
- Filter students by course
- Stronger form validation and user-friendly error handling
- Responsive UI improvements
- Authentication and authorization before using real student information

## License

No license has been specified yet.
