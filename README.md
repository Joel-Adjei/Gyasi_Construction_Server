# Construction Website — Server

REST API backend for the Construction Website, built with Express.js and MongoDB.

## Tech Stack

- **Runtime:** Node.js (ESM)
- **Framework:** Express 5
- **Database:** MongoDB via Mongoose
- **Auth:** JWT (jsonwebtoken) + bcryptjs
- **Validation:** Zod
- **Email:** Nodemailer (SMTP)
- **Security:** Helmet, CORS
- **Logging:** Morgan

## Project Structure

```
src/
├── app.js              # Express app setup (middleware, routes)
├── server.js           # HTTP server entry point
├── config/             # DB connection and other config
├── controllers/        # Route handler logic
├── middleware/         # Auth and other middleware
├── models/             # Mongoose models (User, Service, Message, Settings)
├── routes/             # Route definitions
├── utils/              # Helpers and seed script
└── validators/         # Zod schemas
```

## API Routes

| Prefix            | Description              |
|-------------------|--------------------------|
| `POST /api/auth`     | Registration & login     |
| `GET/POST /api/services`  | Construction services    |
| `POST /api/contact`  | Contact form submission  |
| `GET /api/messages`  | Admin message inbox      |
| `GET/PUT /api/settings` | Site settings          |

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas cluster (or local MongoDB)

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
CLIENT_ORIGIN=http://localhost:5173

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
COMPANY_EMAIL=info@yourcompany.com
```

### Scripts

```bash
npm run dev    # Start with nodemon (development)
npm start      # Start with node (production)
npm run seed   # Seed the database with initial data
```

The server runs on `http://localhost:5000` by default.
