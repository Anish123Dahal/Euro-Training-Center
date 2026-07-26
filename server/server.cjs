/**
 * Euro Training Center Nepal – Backend API Server
 * Express + SQLite3
 * Port: 5000
 */

const express = require('express');
const cors    = require('cors');
const path    = require('path');
const sqlite3 = require('sqlite3').verbose();
const fs      = require('fs');

const app  = express();
const PORT = 5000;

// ─────────────────────────────────────────────
// Middleware
// ─────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────────
// Database Setup
// ─────────────────────────────────────────────
const DB_PATH = path.join(__dirname, '..', 'database.sqlite');
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) { console.error('DB connection error:', err.message); process.exit(1); }
  console.log(`✅  Connected to SQLite database at: ${DB_PATH}`);
  initDB();
});

function run(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err); else resolve(this);
    });
  });
}

function all(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err); else resolve(rows);
    });
  });
}

function get(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err); else resolve(row);
    });
  });
}

// ─────────────────────────────────────────────
// Schema + Seed
// ─────────────────────────────────────────────
async function initDB() {
  db.run('PRAGMA journal_mode=WAL;');

  await run(`CREATE TABLE IF NOT EXISTS students (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT NOT NULL,
    batch TEXT NOT NULL,
    batchId TEXT NOT NULL,
    status TEXT DEFAULT 'Active',
    progress INTEGER DEFAULT 0,
    attendance INTEGER DEFAULT 100,
    fee INTEGER DEFAULT 0,
    feePaid INTEGER DEFAULT 0,
    joinDate TEXT DEFAULT '',
    dob TEXT DEFAULT ''
  )`);

  await run(`CREATE TABLE IF NOT EXISTS batches (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    course TEXT NOT NULL,
    shift TEXT NOT NULL,
    instructor TEXT NOT NULL,
    capacity INTEGER DEFAULT 30,
    enrolled INTEGER DEFAULT 0,
    startDate TEXT DEFAULT '',
    endDate TEXT DEFAULT '',
    room TEXT DEFAULT '',
    status TEXT DEFAULT 'Active'
  )`);

  await run(`CREATE TABLE IF NOT EXISTS jobs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    salary TEXT NOT NULL,
    status TEXT DEFAULT 'Open',
    deadline TEXT DEFAULT '',
    applicants INTEGER DEFAULT 0,
    posted TEXT DEFAULT '',
    description TEXT DEFAULT ''
  )`);

  await run(`CREATE TABLE IF NOT EXISTS certificates (
    id TEXT PRIMARY KEY,
    studentId TEXT NOT NULL,
    studentName TEXT NOT NULL,
    course TEXT NOT NULL,
    issueDate TEXT DEFAULT '',
    status TEXT DEFAULT 'Pending',
    verifyCode TEXT NOT NULL
  )`);

  await run(`CREATE TABLE IF NOT EXISTS announcements (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    type TEXT NOT NULL,
    date TEXT DEFAULT '',
    audience TEXT DEFAULT 'All',
    pinned INTEGER DEFAULT 0
  )`);

  // Seed if empty
  const studentCount = await get('SELECT COUNT(*) as c FROM students');
  if (studentCount.c === 0) await seedAll();
  else console.log('📦  Database already seeded – skipping.');
}

async function seedAll() {
  console.log('🌱  Seeding database with default data...');

  const students = [
    ['EUR-2026-AI-101','Aarav Sharma','aarav@gmail.com','9841000001','AI & Machine Learning','AI Batch A','B1','Active',92,98,25000,1,'2026-01-05','2000-03-12'],
    ['EUR-2026-DM-214','Priya Thapa','priya@gmail.com','9841000002','Digital Marketing','DM Batch B','B2','Active',74,91,18000,1,'2026-02-10','2001-07-22'],
    ['EUR-2026-WD-308','Rohan Karki','rohan@gmail.com','9841000003','Full Stack Web Dev','WD Batch C','B3','Active',61,85,30000,0,'2026-01-15','1999-11-08'],
    ['EUR-2026-GD-119','Sunita Rai','sunita@gmail.com','9841000004','Graphic Design Pro','GD Batch D','B4','Pending',45,78,20000,0,'2026-03-01','2002-05-30'],
    ['EUR-2026-AC-422','Bikash Gurung','bikash@gmail.com','9841000005','Advanced Accounting','AC Batch E','B5','Active',88,96,22000,1,'2026-01-20','1998-09-14'],
    ['EUR-2026-AI-104','Aayushma Shrestha','aayushma@gmail.com','9841000006','AI & Machine Learning','AI Batch A','B1','Active',78,97,25000,1,'2026-01-05','2001-04-18'],
    ['EUR-2026-WD-311','Sijan Maharjan','sijan@gmail.com','9841000007','Full Stack Web Dev','WD Batch C','B3','Inactive',22,56,30000,0,'2026-02-01','2000-12-05'],
    ['EUR-2026-DM-219','Anisha Bhandari','anisha@gmail.com','9841000008','Digital Marketing','DM Batch B','B2','Active',55,89,18000,1,'2026-03-10','2003-01-25'],
  ];
  for (const s of students)
    await run(`INSERT OR IGNORE INTO students VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, s);

  const batches = [
    ['B1','AI Batch A','AI & Machine Learning','Morning 7–9 AM','Mr. Dhimal',30,28,'2026-01-05','2026-04-05','Lab 1','Active'],
    ['B2','DM Batch B','Digital Marketing','Evening 5–7 PM','Ms. Rana',30,24,'2026-02-01','2026-05-01','Lab 2','Active'],
    ['B3','WD Batch C','Full Stack Web Dev','Day 11 AM–1 PM','Mr. Basnet',25,19,'2026-01-15','2026-07-15','Lab 3','Active'],
    ['B4','GD Batch D','Graphic Design Pro','Morning 9–11 AM','Ms. Tamang',20,16,'2026-03-01','2026-05-31','Studio','Active'],
    ['B5','AC Batch E','Advanced Accounting','Evening 6–8 PM','Mr. Poudel',25,12,'2026-01-20','2026-04-20','Hall B','Active'],
  ];
  for (const b of batches)
    await run(`INSERT OR IGNORE INTO batches VALUES (?,?,?,?,?,?,?,?,?,?,?)`, b);

  const jobs = [
    ['J1','Junior AI Engineer','CloudTech Nepal','Kathmandu','Full-Time','Rs 45,000–60,000','Open','2026-08-15',18,'2026-07-01','Looking for AI graduates with Python and ML skills.'],
    ['J2','Digital Marketing Exec','BrandNepal Pvt.','Lalitpur','Full-Time','Rs 30,000–40,000','Open','2026-07-30',11,'2026-07-05','Manage SEO, PPC, and social campaigns for clients.'],
    ['J3','Frontend Developer','Webtech Solutions','Remote','Contract','Rs 55,000–75,000','Open','2026-08-01',24,'2026-07-10','React/Next.js frontend for fintech startup.'],
    ['J4','Graphic Designer','CreativeHub Nepal','Kathmandu','Part-Time','Rs 20,000–28,000','Closed','2026-07-10',9,'2026-06-20','Brand identity and social media design work.'],
    ['J5','Accounts Assistant','FinServe Nepal','Kathmandu','Full-Time','Rs 25,000–35,000','Open','2026-09-01',7,'2026-07-15','Assist senior accountants with daily bookkeeping.'],
  ];
  for (const j of jobs)
    await run(`INSERT OR IGNORE INTO jobs VALUES (?,?,?,?,?,?,?,?,?,?,?)`, j);

  const certs = [
    ['C1','EUR-2026-AI-101','Aarav Sharma','AI & Machine Learning','2026-04-10','Issued','EUR-CERT-AI101-2026A'],
    ['C2','EUR-2026-DM-214','Priya Thapa','Digital Marketing','2026-05-05','Issued','EUR-CERT-DM214-2026B'],
    ['C3','EUR-2026-AC-422','Bikash Gurung','Advanced Accounting','2026-04-25','Issued','EUR-CERT-AC422-2026C'],
    ['C4','EUR-2026-GD-119','Sunita Rai','Graphic Design Pro','','Pending','—'],
    ['C5','EUR-2026-WD-308','Rohan Karki','Full Stack Web Dev','','Pending','—'],
    // Legacy sample codes from CertificateVerify page
    ['LEGACY-EURO-2026-AI-001','EUR-2026-AI-104','Aayushma Shrestha','Basic to Advanced Artificial Intelligence (AI) & Prompt Engineering','2026-02-15','Issued','EURO-2026-AI-001'],
    ['LEGACY-EURO-2025-WEB-104','EUR-2026-WD-308','Rohan Karki','Full-Stack Web & Software Development (React.js & Node)','2025-11-20','Issued','EURO-2025-WEB-104'],
  ];
  for (const c of certs)
    await run(`INSERT OR IGNORE INTO certificates VALUES (?,?,?,?,?,?,?)`, c);

  const announcements = [
    ['A1','Upwork Freelancing Workshop','Special guest seminar on "Earning USD via Upwork" at Samakhusi Lab 2. All batches welcome!','Workshop','2026-07-26','All Students',1],
    ['A2','Job Fair — CloudTech Nepal','CloudTech Nepal is conducting live mock technical interviews this Friday at Lab 1.','General','2026-07-28','AI, WD Batches',0],
    ['A3','Mid-Term Exams Schedule','Mid-term exams for all batches scheduled from August 5–10. Please review the full syllabus.','Exam','2026-08-05','All Students',0],
    ['A4','Dashain Holiday Notice','The center will remain closed from Oct 2–10 for Dashain. Classes resume October 11.','Holiday','2026-10-02','All',0],
  ];
  for (const a of announcements)
    await run(`INSERT OR IGNORE INTO announcements VALUES (?,?,?,?,?,?,?)`, a);

  console.log('✅  Seeding complete.');
}

// ─────────────────────────────────────────────
// Auth Route
// ─────────────────────────────────────────────
const ADMIN_EMAIL    = 'admin@eurotraining.edu.np';
const ADMIN_PASSWORD = 'Euro@Admin2026@#';

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD)
    return res.json({ success: true });
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// ─────────────────────────────────────────────
// Students CRUD
// ─────────────────────────────────────────────
app.get('/api/students', async (req, res) => {
  try { res.json(await all('SELECT * FROM students ORDER BY joinDate DESC')); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/students', async (req, res) => {
  const s = req.body;
  try {
    await run(`INSERT INTO students VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [s.id,s.name,s.email,s.phone,s.course,s.batch,s.batchId,s.status,s.progress,s.attendance,s.fee,s.feePaid?1:0,s.joinDate,s.dob]);
    res.json(await get('SELECT * FROM students WHERE id=?', [s.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/students/:id', async (req, res) => {
  const s = req.body;
  try {
    await run(`UPDATE students SET name=?,email=?,phone=?,course=?,batch=?,batchId=?,status=?,progress=?,attendance=?,fee=?,feePaid=?,joinDate=?,dob=? WHERE id=?`,
      [s.name,s.email,s.phone,s.course,s.batch,s.batchId,s.status,s.progress,s.attendance,s.fee,s.feePaid?1:0,s.joinDate,s.dob,req.params.id]);
    res.json(await get('SELECT * FROM students WHERE id=?', [req.params.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    await run('DELETE FROM students WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─────────────────────────────────────────────
// Batches CRUD
// ─────────────────────────────────────────────
app.get('/api/batches', async (req, res) => {
  try { res.json(await all('SELECT * FROM batches')); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/batches', async (req, res) => {
  const b = req.body;
  try {
    await run(`INSERT INTO batches VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [b.id,b.name,b.course,b.shift,b.instructor,b.capacity,b.enrolled,b.startDate,b.endDate,b.room,b.status]);
    res.json(await get('SELECT * FROM batches WHERE id=?', [b.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/batches/:id', async (req, res) => {
  const b = req.body;
  try {
    await run(`UPDATE batches SET name=?,course=?,shift=?,instructor=?,capacity=?,enrolled=?,startDate=?,endDate=?,room=?,status=? WHERE id=?`,
      [b.name,b.course,b.shift,b.instructor,b.capacity,b.enrolled,b.startDate,b.endDate,b.room,b.status,req.params.id]);
    res.json(await get('SELECT * FROM batches WHERE id=?', [req.params.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/batches/:id', async (req, res) => {
  try {
    await run('DELETE FROM batches WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─────────────────────────────────────────────
// Jobs CRUD
// ─────────────────────────────────────────────
app.get('/api/jobs', async (req, res) => {
  try { res.json(await all('SELECT * FROM jobs ORDER BY posted DESC')); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/jobs', async (req, res) => {
  const j = req.body;
  try {
    await run(`INSERT INTO jobs VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [j.id,j.title,j.company,j.location,j.type,j.salary,j.status,j.deadline,j.applicants,j.posted,j.description]);
    res.json(await get('SELECT * FROM jobs WHERE id=?', [j.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/jobs/:id', async (req, res) => {
  const j = req.body;
  try {
    await run(`UPDATE jobs SET title=?,company=?,location=?,type=?,salary=?,status=?,deadline=?,applicants=?,posted=?,description=? WHERE id=?`,
      [j.title,j.company,j.location,j.type,j.salary,j.status,j.deadline,j.applicants,j.posted,j.description,req.params.id]);
    res.json(await get('SELECT * FROM jobs WHERE id=?', [req.params.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    await run('DELETE FROM jobs WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─────────────────────────────────────────────
// Certificates CRUD + Public Verify
// ─────────────────────────────────────────────
app.get('/api/certificates', async (req, res) => {
  try { res.json(await all('SELECT * FROM certificates')); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

// Public verify by verifyCode
app.get('/api/certificates/verify/:code', async (req, res) => {
  try {
    const cert = await get('SELECT * FROM certificates WHERE verifyCode=? AND status="Issued"', [req.params.code]);
    if (cert) res.json({ found: true, cert });
    else       res.json({ found: false });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/certificates', async (req, res) => {
  const c = req.body;
  try {
    await run(`INSERT INTO certificates VALUES (?,?,?,?,?,?,?)`,
      [c.id,c.studentId,c.studentName,c.course,c.issueDate,c.status,c.verifyCode]);
    res.json(await get('SELECT * FROM certificates WHERE id=?', [c.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/certificates/:id', async (req, res) => {
  const c = req.body;
  try {
    await run(`UPDATE certificates SET studentId=?,studentName=?,course=?,issueDate=?,status=?,verifyCode=? WHERE id=?`,
      [c.studentId,c.studentName,c.course,c.issueDate,c.status,c.verifyCode,req.params.id]);
    res.json(await get('SELECT * FROM certificates WHERE id=?', [req.params.id]));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/certificates/:id', async (req, res) => {
  try {
    await run('DELETE FROM certificates WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─────────────────────────────────────────────
// Announcements CRUD
// ─────────────────────────────────────────────
app.get('/api/announcements', async (req, res) => {
  try {
    const rows = await all('SELECT * FROM announcements ORDER BY date DESC');
    // Convert SQLite integer to boolean
    res.json(rows.map(r => ({ ...r, pinned: !!r.pinned })));
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.post('/api/announcements', async (req, res) => {
  const a = req.body;
  try {
    await run(`INSERT INTO announcements VALUES (?,?,?,?,?,?,?)`,
      [a.id,a.title,a.message,a.type,a.date,a.audience,a.pinned?1:0]);
    const row = await get('SELECT * FROM announcements WHERE id=?', [a.id]);
    res.json({ ...row, pinned: !!row.pinned });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.put('/api/announcements/:id', async (req, res) => {
  const a = req.body;
  try {
    await run(`UPDATE announcements SET title=?,message=?,type=?,date=?,audience=?,pinned=? WHERE id=?`,
      [a.title,a.message,a.type,a.date,a.audience,a.pinned?1:0,req.params.id]);
    const row = await get('SELECT * FROM announcements WHERE id=?', [req.params.id]);
    res.json({ ...row, pinned: !!row.pinned });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete('/api/announcements/:id', async (req, res) => {
  try {
    await run('DELETE FROM announcements WHERE id=?', [req.params.id]);
    res.json({ success: true });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// ─────────────────────────────────────────────
// Start server
// ─────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀  Euro Training Center API server running on http://localhost:${PORT}`);
});
