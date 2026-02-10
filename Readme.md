# Sales Leaderboard API

A fast, scalable REST API built with **Node.js**, **Express**, and **MongoDB** that collects sales records from agents and generates a real-time **sales leaderboard** ranked by total sales amount (descending).

Designed with correctness, performance, and clean code practices in mind — ideal for sales team performance tracking.

## Features

- Record individual sales (agent name, amount, number of deals)
- Aggregate total sales amount and total number of deals per agent
- Generate ranked leaderboard (highest sales first)
- Proper ranking with positional numbers (1, 2, 3, ...)
- Handles ties consistently (stable sort — agents with same sales keep input order)
- MongoDB indexing for better aggregation performance
- Input validation & proper error handling
- CORS enabled for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Environment**: dotenv
- **Others**: CORS, HTTP server

## API Endpoints

| Method | Endpoint                        | Description                          | Body / Query                     |
|--------|---------------------------------|--------------------------------------|----------------------------------|
| `POST` | `/api/sales/create`             | Create a new sale record             | `{ "agent_name", "sale_amount", "deals_no" }` |
| `GET`  | `/api/sales/leaderboard`        | Get current sales leaderboard        | —                                |


## Project Structure
sales-leaderboard-api/
├── config/
│   └── db.js
├── controllers/
│   └── salesController.js
├── models/
│   └── Sale.js
├── routes/
│   └── salesRoutes.js
├── .env.example
├── .gitignore
├── server.js
├── package.json
└── README.md

## Installation & Setup
-  Clone the repository
```bash
git clone https://github.com/anuskamhzn/sales-backend.git
```
- Install dependencies
```Bash
npm install
```
- Create .env file
Create a file named .env in the root directory and add:
```bash
envPORT=your_backend_url
MONGO_URI=your_mongdb_cluster_url
```

- Run the server
Development mode:
```Bash
npm run dev
```
Production mode:
```Bash
npm start
```

Server will be running at:
```bash
http://localhost:8000
```

API base URL:
```bash
http://localhost:8000/api/sales
```