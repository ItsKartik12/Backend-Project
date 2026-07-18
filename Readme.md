# 🎥 YouTube Clone Backend

> A scalable backend for a YouTube-like video streaming platform built with Node.js, Express, TypeScript, MongoDB, Redis, BullMQ, Docker, and AWS.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## ✨ Features

- JWT Authentication
- Video Upload API
- Redis-based View Counter
- BullMQ Background Workers
- FFmpeg Video Processing
- HLS Streaming
- MongoDB Aggregation
- AWS S3 Storage
- Docker Support
- TypeScript Architecture

---

# Architecture

```mermaid
flowchart LR
A[Client] --> B[Express API]
B --> C[Redis]
B --> D[BullMQ]
D --> E[FFmpeg Worker]
E --> F[S3 Storage]
B --> G[MongoDB]
```

---

## View Counter Flow

```mermaid
flowchart LR
A[View Request]
--> B[Redis INCRBY]
--> C[BullMQ Worker]
--> D[MongoDB Bulk Update]
```

---

## Tech Stack

| Category | Technologies     |
| -------- | ---------------- |
| Runtime  | Node.js, Express |
| Language | TypeScript       |
| Database | MongoDB          |
| Cache    | Redis            |
| Queue    | BullMQ           |
| Storage  | AWS S3           |
| Video    | FFmpeg           |
| DevOps   | Docker           |

---

## Folder Structure

```text
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
└── index.ts
```

---

## Installation

```bash
git clone <repo-url>

cd backend-project

npm install
```

---

## Environment Variables

```env
PORT=5000

MONGODB_URI=

REDIS_URL=

ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

AWS_ACCESS_KEY=

AWS_SECRET_KEY=

AWS_BUCKET_NAME=
```

---

## Run with Docker

```bash
docker compose up -d
```

---

## Development

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint               |
| ------ | ---------------------- |
| POST   | /api/v1/users/register |
| POST   | /api/v1/users/login    |
| GET    | /api/v1/videos         |
| POST   | /api/v1/videos         |
| POST   | /api/v1/comments       |
| GET    | /api/v1/health         |

---

## Performance Optimizations

- Redis atomic counters for views
- Background jobs with BullMQ
- MongoDB indexing
- Aggregation pipelines
- Chunked video uploads
- HLS transcoding
- Dockerized deployment
- TypeScript type safety

---

## Future Improvements

- Kubernetes Deployment
- CI/CD Pipeline
- Recommendation Engine
- Notifications
- WebSockets
- Analytics Dashboard

---

## License

MIT
