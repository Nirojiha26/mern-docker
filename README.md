🚀 MERN Stack App with Docker and MongoDB

This project is a MERN (MongoDB, Express, React, Node.js) application fully containerized using Docker and managed with Docker Compose.
It includes a frontend, backend, and MongoDB database, all running seamlessly in isolated containers.

🧩 Project Structure
mern-docker/
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── Dockerfile
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
├── docker-compose.yml
└── README.md

⚙️ Prerequisites

Before you start, make sure you have the following installed:

Docker Desktop

Node.js
 (for local testing)

MongoDB Compass
 (optional – for viewing data visually)

🐳 Run the Project with Docker Compose

1️⃣ Clone the Repository

git clone https://github.com/<your-username>/mern-docker.git
cd mern-docker


2️⃣ Build and Start All Containers

docker-compose up --build


3️⃣ Access the App

Frontend: http://localhost:3000

Backend (API): http://localhost:5001

MongoDB: localhost:27017

MongoDB Compass Connection String:

mongodb://localhost:27017/mern-docker


4️⃣ Stop Containers

docker-compose down

📦 Backend API Test

Use Postman
 or curl to test the API:

POST Item

POST http://localhost:5001/api/items
Body: { "name": "Sample Item" }


GET Items

GET http://localhost:5001/api/items

🧠 What Docker Compose Does

Builds and runs 3 containers (frontend, backend, MongoDB).

Automatically connects them through a shared Docker network.

Simplifies setup — just one command: docker-compose up.
