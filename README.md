# Euro Training Center Nepal - Official Website

Nepal's Premier Skill Development & Career Institute. A full-stack web application built with React, TypeScript, Vite, Express, and SQLite3.

## About

Since 2075 B.S., Euro Training Center (located in Samakhusi, Kathmandu) has been empowering aspiring professionals with cutting-edge AI productivity tools, corporate IT mastery, teaching excellence, and global job placement opportunities in Nepal and abroad.

## Tech Stack

### Frontend
- **React 19** + **TypeScript** - UI framework with type safety
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM 7** - Client-side routing
- **Framer Motion 12** - Smooth animations & transitions
- **Lucide React** - Modern icon library
- **clsx + tailwind-merge** - Class name utilities

### Backend
- **Express 5** - Fast, unopinionated web framework
- **SQLite3** - Serverless SQL database engine
- **CORS** - Cross-origin resource sharing middleware

## Project Structure

```
euro-training-center-website/
├── src/
│   ├── assets/              # Images & static assets
│   ├── components/          # Reusable UI components
│   │   ├── FloatingAssistant.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── data/
│   │   └── mockData.ts      # Courses, testimonials, job data
│   ├── pages/               # Route-level page components
│   │   ├── About.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── AssessmentQuiz.tsx
│   │   ├── CertificateVerify.tsx
│   │   ├── Contact.tsx
│   │   ├── DashboardPortal.tsx
│   │   ├── Home.tsx
│   │   ├── Jobs.tsx
│   │   └── Programs.tsx
│   ├── utils/
│   │   └── cn.ts
│   ├── App.tsx               # Root app component & routes
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── server/
│   └── server.cjs            # Express API server (port 5000)
├── dist/                     # Production build output
├── index.html                # HTML entry template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── database.sqlite           # SQLite database (auto-created)
```

## Pages & Routes

| Route          | Page                       | Description                                               |
|----------------|----------------------------|-----------------------------------------------------------|
| `/`            | Home                       | Landing page with hero, stats, courses & testimonials     |
| `/about`       | About                      | Institute history, mission, team & contact info           |
| `/programs`    | Programs                   | Browse all 35+ courses across 6 categories                |
| `/jobs`        | Jobs                       | Job vacancy board with placement opportunities            |
| `/quiz`        | Assessment Quiz            | Interactive skill assessment quiz                         |
| `/verify`      | Certificate Verify         | Public QR/Code certificate verification portal            |
| `/portal`      | Dashboard Portal           | Student portal entry (login placeholder)                  |
| `/contact`     | Contact                    | Contact form, map & location info                         |
| `/admin`       | Admin Dashboard            | Admin panel for managing students, batches, jobs, etc.    |

## Available Scripts

Install dependencies:

```bash
npm install
```

Start **both** Vite dev server (port 5173) + Express API server (port 5000) concurrently:

```bash
npm run dev
```

Run only the backend API server:

```bash
npm run server
```

Production build (single-file output via `vite-plugin-singlefile`):

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Backend API

The Express server runs on **http://localhost:5000** and is automatically proxied from the Vite dev server via the `/api` prefix.

### Authentication

| Method | Endpoint             | Body                        | Description                |
|--------|----------------------|-----------------------------|----------------------------|
| POST   | `/api/auth/login`    | `{ email, password }`       | Admin login                |


### Students (CRUD)

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/students`        | List all students               |
| POST   | `/api/students`        | Create a new student            |
| PUT    | `/api/students/:id`    | Update student by ID            |
| DELETE | `/api/students/:id`    | Delete student by ID            |

### Batches (CRUD)

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/batches`         | List all batches                |
| POST   | `/api/batches`         | Create a new batch              |
| PUT    | `/api/batches/:id`     | Update batch by ID              |
| DELETE | `/api/batches/:id`     | Delete batch by ID              |

### Jobs (CRUD)

| Method | Endpoint               | Description                     |
|--------|------------------------|---------------------------------|
| GET    | `/api/jobs`            | List all jobs (newest first)    |
| POST   | `/api/jobs`            | Create a new job posting        |
| PUT    | `/api/jobs/:id`        | Update job by ID                |
| DELETE | `/api/jobs/:id`        | Delete job by ID                |

### Certificates (CRUD + Public Verify)

| Method | Endpoint                            | Description                           |
|--------|-------------------------------------|---------------------------------------|
| GET    | `/api/certificates`                 | List all certificates                 |
| GET    | `/api/certificates/verify/:code`    | Publicly verify a certificate by code |
| POST   | `/api/certificates`                 | Issue a new certificate               |
| PUT    | `/api/certificates/:id`             | Update certificate by ID              |
| DELETE | `/api/certificates/:id`             | Delete certificate by ID              |

### Announcements (CRUD)

| Method | Endpoint                   | Description                             |
|--------|----------------------------|-----------------------------------------|
| GET    | `/api/announcements`       | List announcements (sorted by date)     |
| POST   | `/api/announcements`       | Create a new announcement               |
| PUT    | `/api/announcements/:id`   | Update announcement by ID               |
| DELETE | `/api/announcements/:id`   | Delete announcement by ID               |

## Database Schema

Tables auto-created + seeded on first server start:

| Table           | Key Fields                                                                 |
|-----------------|----------------------------------------------------------------------------|
| `students`      | id, name, email, phone, course, batch, status, progress, attendance, fee  |
| `batches`       | id, name, course, shift, instructor, capacity, enrolled, start/end date   |
| `jobs`          | id, title, company, location, type, salary, status, deadline, applicants  |
| `certificates`  | id, studentId, studentName, course, issueDate, status, verifyCode         |
| `announcements` | id, title, message, type, date, audience, pinned                          |

## Course Categories

The institute offers 15+ curated courses grouped into:

1. **Premium & AI** — AI Master Program, AI for Office Pros, AI for Teachers, Freelancing Masterclass, Job Guarantee Program
2. **IT & Digital Technology** — Full Stack Web Dev, MS Office Mastery, Digital Marketing 360, Cyber Security Basics
3. **Data & Creative** — Data Analytics with Power BI / SQL / Python, Graphic Design & Motion
4. **Teacher Training** — Montessori & ECCD Smart Class Training
5. **Hotel & Hospitality** — Professional Barista, Bakery & Culinary Arts
6. **Business & Career** — Accounting (Tally / VAT / Tax), Communication & Career Prep

## Key Stats

- **5,500+** Students Trained
- **35+** Courses & Workshops
- **94%** Placement Rate
- Established **2075 B.S.** (Samakhusi, Kathmandu)

## License

Internal project for Euro Training Center Nepal.
