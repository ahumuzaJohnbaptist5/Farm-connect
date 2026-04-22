# Farm Connect Web Application

Farm Connect links users with verified agri-service providers and supports digital service record management.

## Project Structure

```
Farm-connect/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
├── database/
│   ├── schema.sql
│   └── supabase/
└── config/
    ├── .env.backend.example
    └── .env.frontend.example
```

## Architecture Alignment

React frontend calls Express API routes. The backend delegates work to:

- Authentication service
- OTP verification service
- Notification service (SMS placeholder)
- Business logic service (provider matching and records)

Data persists in PostgreSQL/Supabase using `/database/schema.sql`.

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Database

Run `/database/schema.sql` on PostgreSQL or Supabase SQL editor.

### Environment

- Copy `config/.env.backend.example` to `config/.env.backend`
- Copy `config/.env.frontend.example` to `config/.env.frontend`

