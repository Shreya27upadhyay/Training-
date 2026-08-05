# 📝 MicroNotes

## About the Project

MicroNotes is a simple notes application built using **React**, **Node.js**, and **Express.js**. It allows users to create notes and view them instantly. The purpose of this project is to understand how a frontend communicates with a backend using REST APIs.

In this project, notes are stored in the server's memory, so they remain available while the server is running. Restarting the server will remove all saved notes.

---

## Features

* Create new notes
* View all saved notes
* Clean and responsive user interface
* Simple REST API using Express

---

## Technologies Used

* React
* Vite
* Node.js
* Express.js
* JavaScript

---

## Project Structure

```text
MicroNotes/
│
├── client/          # React frontend
├── server/          # Express backend
├── warmup.js        # JavaScript practice exercises
├── README.md
└── .gitignore
```

---

## How to Run the Project

### Step 1: Clone the Repository

```bash
git clone <repository-link>
```

---

### Step 2: Start the Backend

Open a terminal and run:

```bash
cd server
npm install
node server.js
```

The backend will start on:

```text
http://localhost:5000
```

---

###Step 3: Start the Frontend

Open another terminal and run:

```bash
cd client
npm install
npm run dev
```
The frontend will start on:

```
http://localhost:5173
```

Open this link in your browser to use the application.

## How It Works

1. Start both the backend and frontend servers.
2. Open the frontend in your browser.
3. Enter a title and content for your note.
4. Click the **Add Note** button.
5. The note is sent to the Express server.
6. The server stores the note in memory and sends it back to the frontend.
7. The newly added note is displayed immediately on the page.

> **Note:** Since this project does not use a database, all notes will be cleared whenever the backend server is restarted.

---

## Author

**Rishabh Tiwari**
