import { useState, useEffect } from 'react';

/* ══════════════════════════════════════════
   ICON LIBRARY
══════════════════════════════════════════ */
const Ic = {
  grid:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  users:     (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  book:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  briefcase: (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  award:     (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>,
  bell:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  settings:  (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  trend:     (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  check:     (cls='w-3.5 h-3.5') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  close:     (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  menu:      (cls='w-5 h-5') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  search:    (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  plus:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  edit:      (cls='w-3.5 h-3.5') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
  trash:     (cls='w-3.5 h-3.5') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>,
  eye:       (cls='w-3.5 h-3.5') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
  download:  (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
  megaphone: (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
  bar:       (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  save:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
  home:      (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  pin:       (cls='w-3.5 h-3.5') => <svg className={cls} viewBox="0 0 24 24" fill="currentColor"><path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"/></svg>,
  logout:    (cls='w-4 h-4') => <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
};

/* ══════════════════════════════════════════
   TYPES
══════════════════════════════════════════ */
type Status = 'Active' | 'Inactive' | 'Pending';
type JobStatus = 'Open' | 'Closed' | 'Draft';
type CertStatus = 'Issued' | 'Pending' | 'Revoked';
type AnnouncementType = 'Workshop' | 'Holiday' | 'Exam' | 'General';

interface Student {
  id: string; name: string; email: string; phone: string;
  course: string; batch: string; batchId: string;
  status: Status; progress: number; attendance: number;
  fee: number; feePaid: boolean; joinDate: string; dob: string;
}
interface Batch {
  id: string; name: string; course: string; shift: string;
  instructor: string; capacity: number; enrolled: number;
  startDate: string; endDate: string; room: string; status: Status;
}
interface Job {
  id: string; title: string; company: string; location: string;
  type: string; salary: string; status: JobStatus;
  deadline: string; applicants: number; posted: string; description: string;
}
interface Certificate {
  id: string; studentId: string; studentName: string; course: string;
  issueDate: string; status: CertStatus; verifyCode: string;
}
interface Announcement {
  id: string; title: string; message: string; type: AnnouncementType;
  date: string; audience: string; pinned: boolean;
}

/* ══════════════════════════════════════════
   SEED DATA
══════════════════════════════════════════ */
const seedStudents: Student[] = [
  { id:'EUR-2026-AI-101', name:'Aarav Sharma',      email:'aarav@gmail.com',     phone:'9841000001', course:'AI & Machine Learning', batch:'AI Batch A', batchId:'B1', status:'Active',   progress:92, attendance:98, fee:25000, feePaid:true,  joinDate:'2026-01-05', dob:'2000-03-12' },
  { id:'EUR-2026-DM-214', name:'Priya Thapa',       email:'priya@gmail.com',     phone:'9841000002', course:'Digital Marketing',     batch:'DM Batch B', batchId:'B2', status:'Active',   progress:74, attendance:91, fee:18000, feePaid:true,  joinDate:'2026-02-10', dob:'2001-07-22' },
  { id:'EUR-2026-WD-308', name:'Rohan Karki',       email:'rohan@gmail.com',     phone:'9841000003', course:'Full Stack Web Dev',    batch:'WD Batch C', batchId:'B3', status:'Active',   progress:61, attendance:85, fee:30000, feePaid:false, joinDate:'2026-01-15', dob:'1999-11-08' },
  { id:'EUR-2026-GD-119', name:'Sunita Rai',        email:'sunita@gmail.com',    phone:'9841000004', course:'Graphic Design Pro',    batch:'GD Batch D', batchId:'B4', status:'Pending',  progress:45, attendance:78, fee:20000, feePaid:false, joinDate:'2026-03-01', dob:'2002-05-30' },
  { id:'EUR-2026-AC-422', name:'Bikash Gurung',     email:'bikash@gmail.com',    phone:'9841000005', course:'Advanced Accounting',   batch:'AC Batch E', batchId:'B5', status:'Active',   progress:88, attendance:96, fee:22000, feePaid:true,  joinDate:'2026-01-20', dob:'1998-09-14' },
  { id:'EUR-2026-AI-104', name:'Aayushma Shrestha', email:'aayushma@gmail.com',  phone:'9841000006', course:'AI & Machine Learning', batch:'AI Batch A', batchId:'B1', status:'Active',   progress:78, attendance:97, fee:25000, feePaid:true,  joinDate:'2026-01-05', dob:'2001-04-18' },
  { id:'EUR-2026-WD-311', name:'Sijan Maharjan',    email:'sijan@gmail.com',     phone:'9841000007', course:'Full Stack Web Dev',    batch:'WD Batch C', batchId:'B3', status:'Inactive', progress:22, attendance:56, fee:30000, feePaid:false, joinDate:'2026-02-01', dob:'2000-12-05' },
  { id:'EUR-2026-DM-219', name:'Anisha Bhandari',   email:'anisha@gmail.com',    phone:'9841000008', course:'Digital Marketing',     batch:'DM Batch B', batchId:'B2', status:'Active',   progress:55, attendance:89, fee:18000, feePaid:true,  joinDate:'2026-03-10', dob:'2003-01-25' },
];
const seedBatches: Batch[] = [
  { id:'B1', name:'AI Batch A',  course:'AI & Machine Learning', shift:'Morning 7–9 AM',  instructor:'Mr. Dhimal',  capacity:30, enrolled:28, startDate:'2026-01-05', endDate:'2026-04-05', room:'Lab 1',  status:'Active' },
  { id:'B2', name:'DM Batch B',  course:'Digital Marketing',     shift:'Evening 5–7 PM',  instructor:'Ms. Rana',    capacity:30, enrolled:24, startDate:'2026-02-01', endDate:'2026-05-01', room:'Lab 2',  status:'Active' },
  { id:'B3', name:'WD Batch C',  course:'Full Stack Web Dev',    shift:'Day 11 AM–1 PM',  instructor:'Mr. Basnet',  capacity:25, enrolled:19, startDate:'2026-01-15', endDate:'2026-07-15', room:'Lab 3',  status:'Active' },
  { id:'B4', name:'GD Batch D',  course:'Graphic Design Pro',    shift:'Morning 9–11 AM', instructor:'Ms. Tamang',  capacity:20, enrolled:16, startDate:'2026-03-01', endDate:'2026-05-31', room:'Studio', status:'Active' },
  { id:'B5', name:'AC Batch E',  course:'Advanced Accounting',   shift:'Evening 6–8 PM',  instructor:'Mr. Poudel',  capacity:25, enrolled:12, startDate:'2026-01-20', endDate:'2026-04-20', room:'Hall B', status:'Active' },
];
const seedJobs: Job[] = [
  { id:'J1', title:'Junior AI Engineer',     company:'CloudTech Nepal',  location:'Kathmandu', type:'Full-Time', salary:'Rs 45,000–60,000', status:'Open',   deadline:'2026-08-15', applicants:18, posted:'2026-07-01', description:'Looking for AI graduates with Python and ML skills.' },
  { id:'J2', title:'Digital Marketing Exec', company:'BrandNepal Pvt.',  location:'Lalitpur',  type:'Full-Time', salary:'Rs 30,000–40,000', status:'Open',   deadline:'2026-07-30', applicants:11, posted:'2026-07-05', description:'Manage SEO, PPC, and social campaigns for clients.' },
  { id:'J3', title:'Frontend Developer',     company:'Webtech Solutions', location:'Remote',    type:'Contract',  salary:'Rs 55,000–75,000', status:'Open',   deadline:'2026-08-01', applicants:24, posted:'2026-07-10', description:'React/Next.js frontend for fintech startup.' },
  { id:'J4', title:'Graphic Designer',       company:'CreativeHub Nepal', location:'Kathmandu', type:'Part-Time', salary:'Rs 20,000–28,000', status:'Closed', deadline:'2026-07-10', applicants:9,  posted:'2026-06-20', description:'Brand identity and social media design work.' },
  { id:'J5', title:'Accounts Assistant',     company:'FinServe Nepal',    location:'Kathmandu', type:'Full-Time', salary:'Rs 25,000–35,000', status:'Open',   deadline:'2026-09-01', applicants:7,  posted:'2026-07-15', description:'Assist senior accountants with daily bookkeeping.' },
];
const seedCerts: Certificate[] = [
  { id:'C1', studentId:'EUR-2026-AI-101', studentName:'Aarav Sharma',      course:'AI & Machine Learning', issueDate:'2026-04-10', status:'Issued',  verifyCode:'EUR-CERT-AI101-2026A' },
  { id:'C2', studentId:'EUR-2026-DM-214', studentName:'Priya Thapa',       course:'Digital Marketing',     issueDate:'2026-05-05', status:'Issued',  verifyCode:'EUR-CERT-DM214-2026B' },
  { id:'C3', studentId:'EUR-2026-AC-422', studentName:'Bikash Gurung',     course:'Advanced Accounting',   issueDate:'2026-04-25', status:'Issued',  verifyCode:'EUR-CERT-AC422-2026C' },
  { id:'C4', studentId:'EUR-2026-GD-119', studentName:'Sunita Rai',        course:'Graphic Design Pro',    issueDate:'',           status:'Pending', verifyCode:'—' },
  { id:'C5', studentId:'EUR-2026-WD-308', studentName:'Rohan Karki',       course:'Full Stack Web Dev',    issueDate:'',           status:'Pending', verifyCode:'—' },
];
const seedAnnouncements: Announcement[] = [
  { id:'A1', title:'Upwork Freelancing Workshop',  message:'Special guest seminar on "Earning USD via Upwork" at Samakhusi Lab 2. All batches welcome!', type:'Workshop', date:'2026-07-26', audience:'All Students', pinned:true },
  { id:'A2', title:'Job Fair — CloudTech Nepal',   message:'CloudTech Nepal is conducting live mock technical interviews this Friday at Lab 1.',          type:'General',  date:'2026-07-28', audience:'AI, WD Batches', pinned:false },
  { id:'A3', title:'Mid-Term Exams Schedule',      message:'Mid-term exams for all batches scheduled from August 5–10. Please review the full syllabus.', type:'Exam',     date:'2026-08-05', audience:'All Students', pinned:false },
  { id:'A4', title:'Dashain Holiday Notice',       message:'The center will remain closed from Oct 2–10 for Dashain. Classes resume October 11.',        type:'Holiday',  date:'2026-10-02', audience:'All', pinned:false },
];

/* ══════════════════════════════════════════
   SHARED UI COMPONENTS
══════════════════════════════════════════ */
const statusColor: Record<string, string> = {
  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Inactive: 'bg-red-50 text-red-600 border-red-200',
  Pending: 'bg-amber-50 text-amber-700 border-amber-200',
  Open: 'bg-blue-50 text-blue-700 border-blue-200',
  Closed: 'bg-neutral-100 text-neutral-500 border-neutral-200',
  Draft: 'bg-purple-50 text-purple-700 border-purple-200',
  Issued: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Revoked: 'bg-red-50 text-red-600 border-red-200',
};

const Badge = ({ label, color }: { label: string; color: string }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${color}`}>{label}</span>
);

const ProgressBar = ({ value }: { value: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 bg-neutral-200 rounded-full h-1.5 overflow-hidden">
      <div className={`h-full rounded-full ${value>=80?'bg-emerald-500':value>=60?'bg-primary':'bg-red-400'}`} style={{width:`${value}%`}}/>
    </div>
    <span className="text-[11px] font-bold text-neutral-500 w-8 text-right">{value}%</span>
  </div>
);

const Initials = ({ name, size='sm' }: { name: string; size?: 'sm'|'lg' }) => {
  const init = name.split(' ').map((n: string)=>n[0]).join('').slice(0,2).toUpperCase();
  return (
    <div className={`rounded-xl bg-[#2B2D31] text-white font-heading font-bold flex items-center justify-center flex-shrink-0 ${size==='lg'?'w-12 h-12 text-base':'w-8 h-8 text-[11px]'}`}>
      {init}
    </div>
  );
};

const inputCls = "w-full border border-neutral-200 rounded-xl px-3 py-2.5 text-sm text-[#2B2D31] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white";
const selectCls = inputCls + " cursor-pointer";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold text-neutral-600">{label}</label>
    {children}
  </div>
);

const Modal = ({ title, onClose, children }: { title: string; onClose: ()=>void; children: React.ReactNode }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"/>
    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={e=>e.stopPropagation()}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 sticky top-0 bg-white rounded-t-2xl z-10">
        <h3 className="font-heading font-extrabold text-[#2B2D31] text-base">{title}</h3>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-neutral-100 text-neutral-500">{Ic.close()}</button>
      </div>
      <div className="p-6">{children}</div>
    </div>
  </div>
);

const Toast = ({ msg, onClose }: { msg: string; onClose: ()=>void }) => (
  <div className="fixed bottom-6 right-6 z-[100] bg-[#2B2D31] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-sm font-medium">
    <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">{Ic.check('w-3 h-3')}</span>
    {msg}
    <button onClick={onClose} className="ml-2 text-neutral-400 hover:text-white">{Ic.close('w-3.5 h-3.5')}</button>
  </div>
);

const ConfirmDialog = ({ msg, onConfirm, onCancel }: { msg: string; onConfirm: ()=>void; onCancel: ()=>void }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/50" onClick={onCancel}/>
    <div className="relative bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl">
      <p className="text-sm text-[#2B2D31] font-medium mb-5">{msg}</p>
      <div className="flex gap-3 justify-end">
        <button onClick={onCancel} className="px-4 py-2 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-xl hover:bg-red-600">Delete</button>
      </div>
    </div>
  </div>
);

/* ══════════════════════════════════════════
   OVERVIEW PANEL
══════════════════════════════════════════ */
const OverviewPanel = ({ students, batches, jobs, certs, announcements }: {
  students: Student[]; batches: Batch[]; jobs: Job[]; certs: Certificate[]; announcements: Announcement[];
}) => {
  const collected = students.filter(s=>s.feePaid).reduce((a,s)=>a+s.fee,0);
  const pending   = students.filter(s=>!s.feePaid).reduce((a,s)=>a+s.fee,0);
  const lowAtt    = students.filter(s=>s.attendance<80);
  const unpaid    = students.filter(s=>!s.feePaid);

  const stats = [
    { label:'Total Students',    value:String(students.length),                                   sub:`${students.filter(s=>s.status==='Active').length} active`,        bg:'bg-blue-50',   ic:'text-blue-600',   bdr:'border-blue-200',   Icon:Ic.users },
    { label:'Active Batches',    value:String(batches.filter(b=>b.status==='Active').length),      sub:'Morning / Day / Evening',                                        bg:'bg-emerald-50',ic:'text-emerald-600',bdr:'border-emerald-200',Icon:Ic.book },
    { label:'Open Job Listings', value:String(jobs.filter(j=>j.status==='Open').length),           sub:`${jobs.length} total posted`,                                    bg:'bg-violet-50', ic:'text-violet-600', bdr:'border-violet-200', Icon:Ic.briefcase },
    { label:'Certificates Issued',value:String(certs.filter(c=>c.status==='Issued').length),       sub:`${certs.filter(c=>c.status==='Pending').length} pending`,         bg:'bg-amber-50',  ic:'text-amber-600',  bdr:'border-amber-200',  Icon:Ic.award },
    { label:'Fee Collected',     value:`Rs ${(collected/1000).toFixed(0)}k`,                       sub:`Rs ${(pending/1000).toFixed(0)}k pending`,                        bg:'bg-pink-50',   ic:'text-pink-600',   bdr:'border-pink-200',   Icon:Ic.trend },
    { label:'Announcements',     value:String(announcements.length),                               sub:`${announcements.filter(a=>a.pinned).length} pinned`,              bg:'bg-orange-50', ic:'text-orange-600', bdr:'border-orange-200', Icon:Ic.megaphone },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s,i)=>(
          <div key={i} className={`bg-white rounded-2xl border ${s.bdr} p-4 shadow-xs space-y-2`}>
            <div className={`w-8 h-8 ${s.bg} ${s.ic} rounded-xl flex items-center justify-center`}>{s.Icon()}</div>
            <div className="text-2xl font-heading font-extrabold text-[#2B2D31]">{s.value}</div>
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">{s.label}</div>
            <div className="text-[11px] text-neutral-500">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm">Batch Enrollment Overview</h3>
            <span className="text-[11px] font-bold text-neutral-400">{batches.length} batches</span>
          </div>
          <div className="space-y-4">
            {batches.map(b=>{
              const pct=Math.round((b.enrolled/b.capacity)*100);
              return (
                <div key={b.id} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-[#2B2D31]">
                    <span>{b.name} <span className="text-neutral-400 font-normal">— {b.instructor}</span></span>
                    <span>{b.enrolled}/{b.capacity}</span>
                  </div>
                  <div className="w-full bg-neutral-100 rounded-full h-3 overflow-hidden">
                    <div className={`h-full rounded-full ${pct>=90?'bg-red-400':pct>=70?'bg-primary':'bg-blue-400'}`} style={{width:`${pct}%`}}/>
                  </div>
                  <div className="text-[10px] text-neutral-400">{b.shift} • {b.room} • {pct}% full</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
          <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm">Fee Collection Status</h3>
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
              <div className="text-[11px] font-bold text-emerald-700">Collected</div>
              <div className="text-xl font-heading font-extrabold text-emerald-700">Rs {collected.toLocaleString()}</div>
              <div className="text-[11px] text-emerald-600">{students.filter(s=>s.feePaid).length} students</div>
            </div>
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200">
              <div className="text-[11px] font-bold text-red-600">Pending</div>
              <div className="text-xl font-heading font-extrabold text-red-600">Rs {pending.toLocaleString()}</div>
              <div className="text-[11px] text-red-500">{unpaid.length} students</div>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="text-[11px] font-bold text-neutral-500">Total Expected</div>
              <div className="text-xl font-heading font-extrabold text-[#2B2D31]">Rs {(collected+pending).toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {(lowAtt.length>0 || unpaid.length>0) && (
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"/>
            <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm">Alerts Requiring Attention</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            {lowAtt.length>0 && (
              <div className="p-5 space-y-2">
                <div className="text-xs font-bold text-red-600 mb-3">Low Attendance (below 80%)</div>
                {lowAtt.map(s=>(
                  <div key={s.id} className="flex items-center justify-between p-2.5 bg-red-50 rounded-xl">
                    <div><div className="text-xs font-bold text-[#2B2D31]">{s.name}</div><div className="text-[11px] text-neutral-500">{s.batch}</div></div>
                    <Badge label={`${s.attendance}%`} color="bg-red-100 text-red-700 border-red-200"/>
                  </div>
                ))}
              </div>
            )}
            {unpaid.length>0 && (
              <div className="p-5 space-y-2">
                <div className="text-xs font-bold text-amber-600 mb-3">Unpaid Fees</div>
                {unpaid.map(s=>(
                  <div key={s.id} className="flex items-center justify-between p-2.5 bg-amber-50 rounded-xl">
                    <div><div className="text-xs font-bold text-[#2B2D31]">{s.name}</div><div className="text-[11px] text-neutral-500">{s.course}</div></div>
                    <Badge label={`Rs ${s.fee.toLocaleString()}`} color="bg-amber-100 text-amber-700 border-amber-200"/>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════
   STUDENTS PANEL
══════════════════════════════════════════ */
const StudentsPanel = ({ students, setStudents, batches, toast }: {
  students: Student[]; setStudents: (s:Student[])=>void; batches: Batch[]; toast: (m:string)=>void;
}) => {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCourse, setFilterCourse] = useState('All');
  const [modal, setModal] = useState<null|'add'|'edit'|'view'>(null);
  const [form, setForm] = useState<Student|null>(null);
  const [selected, setSelected] = useState<Student|null>(null);
  const [confirmId, setConfirmId] = useState<string|null>(null);
  const [page, setPage] = useState(1);
  const PER = 6;

  const blank: Student = { id:'', name:'', email:'', phone:'', course:'AI & Machine Learning', batch:'AI Batch A', batchId:'B1', status:'Active', progress:0, attendance:100, fee:25000, feePaid:false, joinDate:new Date().toISOString().slice(0,10), dob:'' };

  const courses = [...new Set(students.map(s=>s.course))];
  const filtered = students.filter(s=>{
    const q=search.toLowerCase();
    return (filterStatus==='All'||s.status===filterStatus)
      && (filterCourse==='All'||s.course===filterCourse)
      && (s.name.toLowerCase().includes(q)||s.id.toLowerCase().includes(q)||s.email.toLowerCase().includes(q));
  });
  const pages = Math.max(1, Math.ceil(filtered.length/PER));
  const paged = filtered.slice((page-1)*PER, page*PER);

  const openAdd  = () => { setForm({...blank, id:`EUR-2026-XX-${String(Date.now()).slice(-3)}`}); setModal('add'); };
  const openEdit = (s:Student) => { setForm({...s}); setSelected(s); setModal('edit'); };
  const openView = (s:Student) => { setSelected(s); setModal('view'); };

  const save = async () => {
    if(!form||!form.name||!form.email) return;
    try {
      if(modal==='add') {
        const res = await fetch('/api/students', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, feePaid:form.feePaid?1:0}) });
        const saved = await res.json();
        setStudents([...students, {...saved, feePaid:!!saved.feePaid}]);
      } else {
        const res = await fetch(`/api/students/${form.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form, feePaid:form.feePaid?1:0}) });
        const saved = await res.json();
        setStudents(students.map(s=>s.id===form.id?{...saved, feePaid:!!saved.feePaid}:s));
      }
    } catch {
      if(modal==='add') setStudents([...students, form]);
      else setStudents(students.map(s=>s.id===form!.id?form!:s));
    }
    setModal(null);
    toast(modal==='add'?`Student "${form.name}" added!`:`Student "${form.name}" updated!`);
  };

  const del = async (id:string) => {
    try { await fetch(`/api/students/${id}`, { method:'DELETE' }); } catch { /* local fallback */ }
    setStudents(students.filter(s=>s.id!==id)); setConfirmId(null); toast('Student record deleted.');
  };
  const toggleFee = async (id:string) => {
    const s = students.find(x=>x.id===id);
    if(!s) return;
    const updated = {...s, feePaid:!s.feePaid};
    try { await fetch(`/api/students/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...updated, feePaid:updated.feePaid?1:0}) }); } catch { /* local fallback */ }
    setStudents(students.map(x=>x.id===id?updated:x)); toast('Fee status updated.');
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div>
          <h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Student Management</h2>
          <p className="text-xs text-neutral-400 mt-0.5">{students.length} total • {students.filter(s=>s.status==='Active').length} active</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">
          {Ic.plus()} Add Student
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 p-4 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-[180px] border border-neutral-200 rounded-xl px-3 py-2">
          {Ic.search('w-4 h-4 text-neutral-400')}
          <input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="Search by name, ID, email…" className="flex-1 text-xs outline-none placeholder-neutral-400"/>
        </div>
        <select value={filterStatus} onChange={e=>{setFilterStatus(e.target.value);setPage(1);}} className="text-xs border border-neutral-200 rounded-xl px-3 py-2 outline-none">
          {['All','Active','Pending','Inactive'].map(s=><option key={s}>{s}</option>)}
        </select>
        <select value={filterCourse} onChange={e=>{setFilterCourse(e.target.value);setPage(1);}} className="text-xs border border-neutral-200 rounded-xl px-3 py-2 outline-none">
          <option>All</option>
          {courses.map(c=><option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-[#F7F8F8] border-b border-neutral-100">
              <tr>{['Student','Course & Batch','Attendance','Progress','Fee','Status','Actions'].map(h=>(
                <th key={h} className="text-left px-5 py-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}</tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {paged.map(s=>(
                <tr key={s.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Initials name={s.name}/>
                      <div><div className="font-bold text-[#2B2D31]">{s.name}</div><div className="text-neutral-400 font-mono text-[10px]">{s.id}</div></div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5"><div className="font-medium text-[#2B2D31]">{s.course}</div><div className="text-neutral-400 text-[11px]">{s.batch}</div></td>
                  <td className="px-5 py-3.5"><span className={`font-bold ${s.attendance<80?'text-red-600':s.attendance<90?'text-amber-600':'text-emerald-600'}`}>{s.attendance}%</span></td>
                  <td className="px-5 py-3.5 w-32"><ProgressBar value={s.progress}/></td>
                  <td className="px-5 py-3.5">
                    <button onClick={()=>toggleFee(s.id)} className={`text-[11px] font-bold px-2.5 py-1 rounded-full border transition-all ${s.feePaid?'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-red-50 text-red-600 border-red-200'}`}>
                      {s.feePaid?'Paid':'Unpaid'}
                    </button>
                  </td>
                  <td className="px-5 py-3.5"><Badge label={s.status} color={statusColor[s.status]}/></td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>openView(s)} className="p-1.5 rounded-lg hover:bg-blue-50 text-neutral-400 hover:text-blue-600" title="View">{Ic.eye()}</button>
                      <button onClick={()=>openEdit(s)} className="p-1.5 rounded-lg hover:bg-amber-50 text-neutral-400 hover:text-amber-600" title="Edit">{Ic.edit()}</button>
                      <button onClick={()=>setConfirmId(s.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-600" title="Delete">{Ic.trash()}</button>
                    </div>
                  </td>
                </tr>
              ))}
              {paged.length===0&&<tr><td colSpan={7} className="px-5 py-10 text-center text-xs text-neutral-400">No students match your filter.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400">
          <span>Showing {filtered.length===0?0:Math.min((page-1)*PER+1,filtered.length)}–{Math.min(page*PER,filtered.length)} of {filtered.length}</span>
          <div className="flex gap-1">
            <button onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1} className="px-2.5 py-1 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-40">Prev</button>
            {Array.from({length:pages},(_,i)=>(
              <button key={i} onClick={()=>setPage(i+1)} className={`px-2.5 py-1 rounded-lg ${page===i+1?'bg-[#2B2D31] text-white':'border border-neutral-200 hover:bg-neutral-50'}`}>{i+1}</button>
            ))}
            <button onClick={()=>setPage(p=>Math.min(pages,p+1))} disabled={page===pages} className="px-2.5 py-1 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-40">Next</button>
          </div>
        </div>
      </div>

      {(modal==='add'||modal==='edit') && form && (
        <Modal title={modal==='add'?'Add New Student':'Edit Student'} onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full Name *"><input className={inputCls} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Aarav Sharma"/></Field>
              <Field label="Student ID *"><input className={inputCls} value={form.id} onChange={e=>setForm({...form,id:e.target.value})} placeholder="EUR-2026-XX-000"/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Email *"><input type="email" className={inputCls} value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="student@email.com"/></Field>
              <Field label="Phone"><input className={inputCls} value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="98XXXXXXXX"/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Course">
                <select className={selectCls} value={form.course} onChange={e=>setForm({...form,course:e.target.value})}>
                  {['AI & Machine Learning','Digital Marketing','Full Stack Web Dev','Graphic Design Pro','Advanced Accounting'].map(c=><option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Batch">
                <select className={selectCls} value={form.batchId} onChange={e=>{const b=batches.find(b=>b.id===e.target.value);if(b)setForm({...form,batchId:b.id,batch:b.name});}}>
                  {batches.map(b=><option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Status">
                <select className={selectCls} value={form.status} onChange={e=>setForm({...form,status:e.target.value as Status})}>
                  {['Active','Pending','Inactive'].map(s=><option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Fee Amount (Rs)"><input type="number" className={inputCls} value={form.fee} onChange={e=>setForm({...form,fee:+e.target.value})}/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Attendance (%)"><input type="number" min={0} max={100} className={inputCls} value={form.attendance} onChange={e=>setForm({...form,attendance:+e.target.value})}/></Field>
              <Field label="Progress (%)"><input type="number" min={0} max={100} className={inputCls} value={form.progress} onChange={e=>setForm({...form,progress:+e.target.value})}/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Join Date"><input type="date" className={inputCls} value={form.joinDate} onChange={e=>setForm({...form,joinDate:e.target.value})}/></Field>
              <Field label="Date of Birth"><input type="date" className={inputCls} value={form.dob} onChange={e=>setForm({...form,dob:e.target.value})}/></Field>
            </div>
            <div className="flex items-center gap-2 pt-1">
              <input type="checkbox" id="feePaid" checked={form.feePaid} onChange={e=>setForm({...form,feePaid:e.target.checked})} className="w-4 h-4 accent-primary"/>
              <label htmlFor="feePaid" className="text-xs font-bold text-neutral-600">Mark fee as paid</label>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
              <button onClick={save} className="flex-1 py-2.5 text-sm font-bold text-white bg-[#2B2D31] hover:bg-primary rounded-xl flex items-center justify-center gap-2">{Ic.save()} {modal==='add'?'Add Student':'Save Changes'}</button>
            </div>
          </div>
        </Modal>
      )}

      {modal==='view' && selected && (
        <Modal title="Student Profile" onClose={()=>setModal(null)}>
          <div className="space-y-5">
            <div className="flex items-center gap-4 p-4 bg-[#F7F8F8] rounded-2xl">
              <Initials name={selected.name} size="lg"/>
              <div>
                <div className="font-heading font-extrabold text-[#2B2D31] text-lg">{selected.name}</div>
                <div className="text-xs font-mono text-neutral-500 mt-0.5">{selected.id}</div>
                <div className="mt-1"><Badge label={selected.status} color={statusColor[selected.status]}/></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {([['Email',selected.email],['Phone',selected.phone],['Course',selected.course],['Batch',selected.batch],['Join Date',selected.joinDate],['Date of Birth',selected.dob],['Fee',`Rs ${selected.fee.toLocaleString()}`],['Fee Status',selected.feePaid?'Paid':'Unpaid']] as [string,string][]).map(([k,v])=>(
                <div key={k} className="p-3 bg-[#F7F8F8] rounded-xl"><div className="font-bold text-neutral-400 mb-0.5">{k}</div><div className="font-bold text-[#2B2D31]">{v}</div></div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="text-xs font-bold text-neutral-600">Course Progress</div><ProgressBar value={selected.progress}/>
              <div className="text-xs font-bold text-neutral-600 mt-3">Attendance</div><ProgressBar value={selected.attendance}/>
            </div>
            <button onClick={()=>{setModal(null);openEdit(selected);}} className="w-full py-2.5 text-sm font-bold bg-[#2B2D31] text-white rounded-xl hover:bg-primary flex items-center justify-center gap-2">{Ic.edit()} Edit Student</button>
          </div>
        </Modal>
      )}

      {confirmId && <ConfirmDialog msg="Delete this student's record? This cannot be undone." onConfirm={()=>del(confirmId)} onCancel={()=>setConfirmId(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   BATCHES PANEL
══════════════════════════════════════════ */
const BatchesPanel = ({ batches, setBatches, toast }: {
  batches: Batch[]; setBatches: (b:Batch[])=>void; toast: (m:string)=>void;
}) => {
  const [modal, setModal] = useState<null|'add'|'edit'>(null);
  const [form, setForm] = useState<Batch|null>(null);
  const [confirmId, setConfirmId] = useState<string|null>(null);
  const blank: Batch = { id:'', name:'', course:'AI & Machine Learning', shift:'Morning 7–9 AM', instructor:'', capacity:30, enrolled:0, startDate:'', endDate:'', room:'', status:'Active' };

  const save = async () => {
    if(!form||!form.name||!form.instructor) return;
    try {
      if(modal==='add') {
        const res = await fetch('/api/batches', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
        const saved = await res.json();
        setBatches([...batches, saved]);
      } else {
        const res = await fetch(`/api/batches/${form.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
        const saved = res.ok ? await res.json() : form;
        setBatches(batches.map(b=>b.id===form!.id?saved:b));
      }
    } catch {
      if(modal==='add') setBatches([...batches, form]);
      else setBatches(batches.map(b=>b.id===form!.id?form!:b));
    }
    setModal(null);
    toast(`Batch "${form.name}" ${modal==='add'?'created':'updated'}!`);
  };
  const del = async (id:string) => {
    try { await fetch(`/api/batches/${id}`, { method:'DELETE' }); } catch { /* local fallback */ }
    setBatches(batches.filter(b=>b.id!==id)); setConfirmId(null); toast('Batch removed.');
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div><h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Batch Management</h2><p className="text-xs text-neutral-400 mt-0.5">{batches.length} batches</p></div>
        <button onClick={()=>{setForm({...blank,id:`B${Date.now()}`});setModal('add');}} className="flex items-center gap-2 bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">{Ic.plus()} New Batch</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {batches.map(b=>{
          const pct=Math.round((b.enrolled/b.capacity)*100);
          return (
            <div key={b.id} className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div><h4 className="font-heading font-extrabold text-[#2B2D31]">{b.name}</h4><p className="text-xs text-neutral-400 mt-0.5">{b.course}</p></div>
                <Badge label={b.status} color={statusColor[b.status]}/>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold"><span className="text-neutral-500">Enrollment</span><span>{b.enrolled}/{b.capacity}</span></div>
                <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden"><div className={`${pct>=90?'bg-red-400':pct>=70?'bg-primary':'bg-blue-400'} h-full rounded-full`} style={{width:`${pct}%`}}/></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-neutral-500">
                <div><span className="font-bold text-neutral-400 block">Shift</span>{b.shift}</div>
                <div><span className="font-bold text-neutral-400 block">Room</span>{b.room}</div>
                <div><span className="font-bold text-neutral-400 block">Instructor</span>{b.instructor}</div>
                <div><span className="font-bold text-neutral-400 block">Duration</span>{b.startDate}→{b.endDate}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={()=>{setForm({...b});setModal('edit');}} className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold border border-neutral-200 rounded-xl hover:bg-neutral-50">{Ic.edit()} Edit</button>
                <button onClick={()=>setConfirmId(b.id)} className="py-2 px-3 text-xs font-bold border border-red-200 text-red-500 rounded-xl hover:bg-red-50">{Ic.trash()}</button>
              </div>
            </div>
          );
        })}
      </div>
      {(modal==='add'||modal==='edit') && form && (
        <Modal title={modal==='add'?'Create New Batch':'Edit Batch'} onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Batch Name *"><input className={inputCls} value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. AI Batch F"/></Field>
              <Field label="Course"><select className={selectCls} value={form.course} onChange={e=>setForm({...form,course:e.target.value})}>{['AI & Machine Learning','Digital Marketing','Full Stack Web Dev','Graphic Design Pro','Advanced Accounting'].map(c=><option key={c}>{c}</option>)}</select></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Instructor *"><input className={inputCls} value={form.instructor} onChange={e=>setForm({...form,instructor:e.target.value})} placeholder="Mr./Ms. Name"/></Field>
              <Field label="Shift / Timing"><input className={inputCls} value={form.shift} onChange={e=>setForm({...form,shift:e.target.value})} placeholder="Morning 7–9 AM"/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Room / Lab"><input className={inputCls} value={form.room} onChange={e=>setForm({...form,room:e.target.value})} placeholder="Lab 1"/></Field>
              <Field label="Capacity"><input type="number" className={inputCls} value={form.capacity} onChange={e=>setForm({...form,capacity:+e.target.value})}/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Start Date"><input type="date" className={inputCls} value={form.startDate} onChange={e=>setForm({...form,startDate:e.target.value})}/></Field>
              <Field label="End Date"><input type="date" className={inputCls} value={form.endDate} onChange={e=>setForm({...form,endDate:e.target.value})}/></Field>
            </div>
            <Field label="Status"><select className={selectCls} value={form.status} onChange={e=>setForm({...form,status:e.target.value as Status})}>{['Active','Pending','Inactive'].map(s=><option key={s}>{s}</option>)}</select></Field>
            <div className="flex gap-3 pt-2">
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
              <button onClick={save} className="flex-1 py-2.5 text-sm font-bold text-white bg-[#2B2D31] hover:bg-primary rounded-xl flex items-center justify-center gap-2">{Ic.save()} {modal==='add'?'Create':'Save Changes'}</button>
            </div>
          </div>
        </Modal>
      )}
      {confirmId && <ConfirmDialog msg="Delete this batch?" onConfirm={()=>del(confirmId)} onCancel={()=>setConfirmId(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   JOBS PANEL
══════════════════════════════════════════ */
const JobsPanel = ({ jobs, setJobs, toast }: {
  jobs: Job[]; setJobs: (j:Job[])=>void; toast: (m:string)=>void;
}) => {
  const [modal, setModal] = useState<null|'add'|'edit'|'view'>(null);
  const [form, setForm] = useState<Job|null>(null);
  const [selected, setSelected] = useState<Job|null>(null);
  const [confirmId, setConfirmId] = useState<string|null>(null);
  const [filter, setFilter] = useState('All');
  const blank: Job = { id:'', title:'', company:'', location:'Kathmandu', type:'Full-Time', salary:'', status:'Draft', deadline:'', applicants:0, posted:new Date().toISOString().slice(0,10), description:'' };

  const save = async () => {
    if(!form||!form.title||!form.company) return;
    try {
      if(modal==='add') {
        const res = await fetch('/api/jobs', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
        const saved = await res.json();
        setJobs([...jobs, saved]);
      } else {
        const res = await fetch(`/api/jobs/${form.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
        const saved = res.ok ? await res.json() : form;
        setJobs(jobs.map(j=>j.id===form!.id?saved:j));
      }
    } catch {
      if(modal==='add') setJobs([...jobs, form]);
      else setJobs(jobs.map(j=>j.id===form!.id?form!:j));
    }
    setModal(null);
    toast(`Job "${form.title}" ${modal==='add'?'posted':'updated'}!`);
  };
  const del = async (id:string) => {
    try { await fetch(`/api/jobs/${id}`, { method:'DELETE' }); } catch { /* local fallback */ }
    setJobs(jobs.filter(j=>j.id!==id)); setConfirmId(null); toast('Job listing removed.');
  };
  const toggleStatus = async (j:Job) => {
    const next:JobStatus = j.status==='Open'?'Closed':'Open';
    try { await fetch(`/api/jobs/${j.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...j,status:next}) }); } catch { /* local fallback */ }
    setJobs(jobs.map(x=>x.id===j.id?{...x,status:next}:x));
    toast(`Job marked as ${next}.`);
  };

  const filtered = jobs.filter(j=>filter==='All'||j.status===filter);

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div><h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Job Placement Board</h2><p className="text-xs text-neutral-400 mt-0.5">{jobs.filter(j=>j.status==='Open').length} open • {jobs.length} total</p></div>
        <button onClick={()=>{setForm({...blank,id:`J${Date.now()}`});setModal('add');}} className="flex items-center gap-2 bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">{Ic.plus()} Post Job</button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {['All','Open','Closed','Draft'].map(s=>(
          <button key={s} onClick={()=>setFilter(s)} className={`px-3.5 py-1.5 rounded-lg text-xs font-bold border transition-all ${filter===s?'bg-[#2B2D31] text-white border-[#2B2D31]':'bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400'}`}>{s}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(j=>(
          <div key={j.id} className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 space-y-4">
            <div className="flex items-start justify-between gap-2">
              <div><h4 className="font-heading font-extrabold text-[#2B2D31]">{j.title}</h4><p className="text-xs text-neutral-500">{j.company}</p></div>
              <Badge label={j.status} color={statusColor[j.status]}/>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {([['Location',j.location],['Type',j.type],['Salary',j.salary],['Applicants',String(j.applicants)]] as [string,string][]).map(([k,v])=>(
                <div key={k} className="p-2.5 bg-[#F7F8F8] rounded-xl"><span className="font-bold text-neutral-400 block">{k}</span>{v}</div>
              ))}
            </div>
            <div className="text-[11px] text-neutral-400">Deadline: <span className="font-bold text-[#2B2D31]">{j.deadline}</span></div>
            <div className="flex gap-2">
              <button onClick={()=>{setSelected(j);setModal('view');}} className="flex-1 py-2 text-xs font-bold flex items-center justify-center gap-1 border border-neutral-200 rounded-xl hover:bg-neutral-50">{Ic.eye()} View</button>
              <button onClick={()=>{setForm({...j});setModal('edit');}} className="flex-1 py-2 text-xs font-bold flex items-center justify-center gap-1 border border-neutral-200 rounded-xl hover:bg-neutral-50">{Ic.edit()} Edit</button>
              <button onClick={()=>toggleStatus(j)} className={`flex-1 py-2 text-xs font-bold flex items-center justify-center border rounded-xl ${j.status==='Open'?'border-red-200 text-red-500 hover:bg-red-50':'border-emerald-200 text-emerald-600 hover:bg-emerald-50'}`}>{j.status==='Open'?'Close':'Open'}</button>
              <button onClick={()=>setConfirmId(j.id)} className="py-2 px-2.5 border border-red-200 text-red-500 rounded-xl hover:bg-red-50">{Ic.trash()}</button>
            </div>
          </div>
        ))}
        {filtered.length===0&&<div className="col-span-3 py-10 text-center text-xs text-neutral-400">No jobs found.</div>}
      </div>

      {(modal==='add'||modal==='edit') && form && (
        <Modal title={modal==='add'?'Post New Job':'Edit Job Listing'} onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <Field label="Job Title *"><input className={inputCls} value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="e.g. Junior AI Engineer"/></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Company *"><input className={inputCls} value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/></Field>
              <Field label="Location"><input className={inputCls} value={form.location} onChange={e=>setForm({...form,location:e.target.value})}/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Type"><select className={selectCls} value={form.type} onChange={e=>setForm({...form,type:e.target.value})}>{['Full-Time','Part-Time','Contract','Internship'].map(t=><option key={t}>{t}</option>)}</select></Field>
              <Field label="Salary Range"><input className={inputCls} value={form.salary} onChange={e=>setForm({...form,salary:e.target.value})} placeholder="Rs 30,000–45,000"/></Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Deadline"><input type="date" className={inputCls} value={form.deadline} onChange={e=>setForm({...form,deadline:e.target.value})}/></Field>
              <Field label="Status"><select className={selectCls} value={form.status} onChange={e=>setForm({...form,status:e.target.value as JobStatus})}>{['Open','Closed','Draft'].map(s=><option key={s}>{s}</option>)}</select></Field>
            </div>
            <Field label="Description"><textarea className={inputCls+' min-h-[80px] resize-none'} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="Role description…"/></Field>
            <div className="flex gap-3 pt-2">
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
              <button onClick={save} className="flex-1 py-2.5 text-sm font-bold text-white bg-[#2B2D31] hover:bg-primary rounded-xl flex items-center justify-center gap-2">{Ic.save()} {modal==='add'?'Post Job':'Save'}</button>
            </div>
          </div>
        </Modal>
      )}

      {modal==='view' && selected && (
        <Modal title="Job Details" onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <div className="p-4 bg-[#F7F8F8] rounded-2xl space-y-1">
              <h4 className="font-heading font-extrabold text-[#2B2D31] text-lg">{selected.title}</h4>
              <p className="text-sm text-neutral-500">{selected.company} — {selected.location}</p>
              <Badge label={selected.status} color={statusColor[selected.status]}/>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {([['Type',selected.type],['Salary',selected.salary],['Deadline',selected.deadline],['Posted',selected.posted],['Applicants',String(selected.applicants)]] as [string,string][]).map(([k,v])=>(
                <div key={k} className="p-3 bg-[#F7F8F8] rounded-xl"><div className="font-bold text-neutral-400 mb-0.5">{k}</div><div className="font-bold text-[#2B2D31]">{v}</div></div>
              ))}
            </div>
            <div className="p-3 bg-[#F7F8F8] rounded-xl text-xs"><div className="font-bold text-neutral-400 mb-1">Description</div><p className="text-[#2B2D31] leading-relaxed">{selected.description}</p></div>
            <button onClick={()=>{setModal(null);setForm({...selected});setModal('edit');}} className="w-full py-2.5 text-sm font-bold bg-[#2B2D31] text-white rounded-xl hover:bg-primary flex items-center justify-center gap-2">{Ic.edit()} Edit Listing</button>
          </div>
        </Modal>
      )}

      {confirmId && <ConfirmDialog msg="Remove this job listing?" onConfirm={()=>del(confirmId)} onCancel={()=>setConfirmId(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   CERTIFICATES PANEL
══════════════════════════════════════════ */
const CertificatesPanel = ({ certs, setCerts, students, toast }: {
  certs: Certificate[]; setCerts: (c:Certificate[])=>void; students: Student[]; toast: (m:string)=>void;
}) => {
  const [modal, setModal] = useState<null|'issue'|'view'>(null);
  const [selected, setSelected] = useState<Certificate|null>(null);
  const [form, setForm] = useState({ studentId:'', course:'AI & Machine Learning', issueDate:new Date().toISOString().slice(0,10) });
  const [confirmId, setConfirmId] = useState<string|null>(null);
  const [search, setSearch] = useState('');

  const filtered = certs.filter(c=>c.studentName.toLowerCase().includes(search.toLowerCase())||c.studentId.toLowerCase().includes(search.toLowerCase())||c.verifyCode.toLowerCase().includes(search.toLowerCase()));

  const issueCert = async () => {
    const st = students.find(s=>s.id===form.studentId);
    if(!st) return;
    const code = `EUR-CERT-${form.studentId.replace(/\D/g,'').slice(-6)}-${Date.now().toString().slice(-4)}`;
    const newCert: Certificate = { id:`C${Date.now()}`, studentId:st.id, studentName:st.name, course:form.course, issueDate:form.issueDate, status:'Issued', verifyCode:code };
    try {
      const res = await fetch('/api/certificates', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(newCert) });
      const saved = await res.json();
      setCerts([...certs, saved]);
    } catch { setCerts([...certs, newCert]); }
    setModal(null);
    toast(`Certificate issued to ${st.name}!`);
  };

  const updateStatus = async (id:string, status:CertStatus) => {
    const cert = certs.find(c=>c.id===id);
    if(!cert) return;
    try { await fetch(`/api/certificates/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...cert,status}) }); } catch { /* local fallback */ }
    setCerts(certs.map(c=>c.id===id?{...c,status}:c));
    toast(`Certificate marked as ${status}.`);
  };

  const del = async (id:string) => {
    try { await fetch(`/api/certificates/${id}`, { method:'DELETE' }); } catch { /* local fallback */ }
    setCerts(certs.filter(c=>c.id!==id)); setConfirmId(null); toast('Certificate record removed.');
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div><h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Certificate Management</h2><p className="text-xs text-neutral-400 mt-0.5">{certs.filter(c=>c.status==='Issued').length} issued • {certs.filter(c=>c.status==='Pending').length} pending</p></div>
        <button onClick={()=>setModal('issue')} className="flex items-center gap-2 bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">{Ic.award()} Issue Certificate</button>
      </div>
      <div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl px-3 py-2">
        {Ic.search('w-4 h-4 text-neutral-400')}
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by student, ID, or verify code…" className="flex-1 text-xs outline-none placeholder-neutral-400"/>
      </div>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-[#F7F8F8] border-b border-neutral-100">
              <tr>{['Student','Course','Issue Date','Verify Code','Status','Actions'].map(h=>(
                <th key={h} className="text-left px-5 py-3 text-[11px] font-bold text-neutral-400 uppercase tracking-wide whitespace-nowrap">{h}</th>
              ))}</tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map(c=>(
                <tr key={c.id} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-5 py-3.5"><div className="font-bold text-[#2B2D31]">{c.studentName}</div><div className="text-neutral-400 font-mono text-[10px]">{c.studentId}</div></td>
                  <td className="px-5 py-3.5 text-neutral-600">{c.course}</td>
                  <td className="px-5 py-3.5 font-mono text-neutral-500">{c.issueDate||'—'}</td>
                  <td className="px-5 py-3.5 font-mono text-[10px] text-neutral-500 max-w-[180px] truncate">{c.verifyCode}</td>
                  <td className="px-5 py-3.5"><Badge label={c.status} color={statusColor[c.status]}/></td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>{setSelected(c);setModal('view');}} className="p-1.5 rounded-lg hover:bg-blue-50 text-neutral-400 hover:text-blue-600">{Ic.eye()}</button>
                      {c.status==='Pending'&&<button onClick={()=>updateStatus(c.id,'Issued')} className="text-[11px] font-bold text-emerald-600 hover:underline px-2 py-1 rounded-lg hover:bg-emerald-50">Issue</button>}
                      {c.status==='Issued'&&<button onClick={()=>updateStatus(c.id,'Revoked')} className="text-[11px] font-bold text-red-500 hover:underline px-2 py-1 rounded-lg hover:bg-red-50">Revoke</button>}
                      {c.status==='Revoked'&&<button onClick={()=>updateStatus(c.id,'Issued')} className="text-[11px] font-bold text-emerald-600 hover:underline px-2 py-1 rounded-lg hover:bg-emerald-50">Re-issue</button>}
                      <button onClick={()=>setConfirmId(c.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-500">{Ic.trash()}</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length===0&&<tr><td colSpan={6} className="px-5 py-10 text-center text-xs text-neutral-400">No certificates found.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>

      {modal==='issue' && (
        <Modal title="Issue New Certificate" onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <Field label="Select Student">
              <select className={selectCls} value={form.studentId} onChange={e=>setForm({...form,studentId:e.target.value})}>
                <option value="">— Select a student —</option>
                {students.map(s=><option key={s.id} value={s.id}>{s.name} ({s.id})</option>)}
              </select>
            </Field>
            <Field label="Course">
              <select className={selectCls} value={form.course} onChange={e=>setForm({...form,course:e.target.value})}>
                {['AI & Machine Learning','Digital Marketing','Full Stack Web Dev','Graphic Design Pro','Advanced Accounting'].map(c=><option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Issue Date"><input type="date" className={inputCls} value={form.issueDate} onChange={e=>setForm({...form,issueDate:e.target.value})}/></Field>
            <div className="flex gap-3 pt-2">
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
              <button onClick={issueCert} disabled={!form.studentId} className="flex-1 py-2.5 text-sm font-bold text-white bg-[#2B2D31] hover:bg-primary rounded-xl disabled:opacity-50 flex items-center justify-center gap-2">{Ic.award()} Issue Certificate</button>
            </div>
          </div>
        </Modal>
      )}

      {modal==='view' && selected && (
        <Modal title="Certificate" onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <div className="p-6 border-2 border-dashed border-neutral-300 rounded-2xl text-center space-y-2">
              <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Euro Training Center — Nepal</div>
              <div className="font-heading font-extrabold text-[#2B2D31] text-xl mt-2">Certificate of Completion</div>
              <div className="text-sm text-neutral-500">This certifies that</div>
              <div className="font-heading font-extrabold text-primary text-2xl">{selected.studentName}</div>
              <div className="text-sm text-neutral-500">has successfully completed</div>
              <div className="font-heading font-bold text-[#2B2D31]">{selected.course}</div>
              {selected.issueDate&&<div className="text-xs text-neutral-400">Issued on: {selected.issueDate}</div>}
              <div className="text-[11px] font-mono text-neutral-500 p-2 bg-neutral-50 rounded-xl">{selected.verifyCode}</div>
            </div>
            <Badge label={selected.status} color={statusColor[selected.status]}/>
            <div className="flex gap-3">
              {selected.status==='Pending'&&<button onClick={()=>{updateStatus(selected.id,'Issued');setModal(null);}} className="flex-1 py-2.5 text-sm font-bold text-white bg-emerald-600 rounded-xl">Issue Certificate</button>}
              {selected.status==='Issued'&&<button onClick={()=>{updateStatus(selected.id,'Revoked');setModal(null);}} className="flex-1 py-2.5 text-sm font-bold text-white bg-red-500 rounded-xl">Revoke</button>}
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Close</button>
            </div>
          </div>
        </Modal>
      )}

      {confirmId && <ConfirmDialog msg="Remove this certificate?" onConfirm={()=>del(confirmId)} onCancel={()=>setConfirmId(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   ANNOUNCEMENTS PANEL
══════════════════════════════════════════ */
const AnnouncementsPanel = ({ announcements, setAnnouncements, toast }: {
  announcements: Announcement[]; setAnnouncements: (a:Announcement[])=>void; toast: (m:string)=>void;
}) => {
  const [modal, setModal] = useState<null|'add'|'edit'>(null);
  const [form, setForm] = useState<Announcement|null>(null);
  const [confirmId, setConfirmId] = useState<string|null>(null);
  const blank: Announcement = { id:'', title:'', message:'', type:'General', date:new Date().toISOString().slice(0,10), audience:'All Students', pinned:false };

  const typeColor: Record<string,string> = {
    Workshop:'bg-blue-50 text-blue-700 border-blue-200',
    Holiday:'bg-orange-50 text-orange-700 border-orange-200',
    Exam:'bg-purple-50 text-purple-700 border-purple-200',
    General:'bg-neutral-100 text-neutral-600 border-neutral-200',
  };

  const save = async () => {
    if(!form||!form.title||!form.message) return;
    try {
      if(modal==='add') {
        const res = await fetch('/api/announcements', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form,pinned:form.pinned?1:0}) });
        const saved = await res.json();
        setAnnouncements([...announcements, {...saved,pinned:!!saved.pinned}]);
      } else {
        const res = await fetch(`/api/announcements/${form.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...form,pinned:form.pinned?1:0}) });
        const saved = await res.json();
        setAnnouncements(announcements.map(a=>a.id===form!.id?{...saved,pinned:!!saved.pinned}:a));
      }
    } catch {
      if(modal==='add') setAnnouncements([...announcements, form]);
      else setAnnouncements(announcements.map(a=>a.id===form!.id?form!:a));
    }
    setModal(null);
    toast(`Announcement "${form.title}" ${modal==='add'?'published':'updated'}!`);
  };

  const del = async (id:string) => {
    try { await fetch(`/api/announcements/${id}`, { method:'DELETE' }); } catch { /* local fallback */ }
    setAnnouncements(announcements.filter(a=>a.id!==id)); setConfirmId(null); toast('Announcement removed.');
  };
  const togglePin = async (id:string) => {
    const ann = announcements.find(a=>a.id===id);
    if(!ann) return;
    const updated = {...ann, pinned:!ann.pinned};
    try { await fetch(`/api/announcements/${id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({...updated,pinned:updated.pinned?1:0}) }); } catch { /* local fallback */ }
    setAnnouncements(announcements.map(a=>a.id===id?updated:a)); toast('Pin status updated.');
  };

  const sorted = [...announcements].sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0));

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div><h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Announcements</h2><p className="text-xs text-neutral-400 mt-0.5">{announcements.length} total • {announcements.filter(a=>a.pinned).length} pinned</p></div>
        <button onClick={()=>{setForm({...blank,id:`A${Date.now()}`});setModal('add');}} className="flex items-center gap-2 bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors">{Ic.plus()} New Announcement</button>
      </div>
      <div className="space-y-4">
        {sorted.map(a=>(
          <div key={a.id} className={`bg-white rounded-2xl border shadow-xs p-5 space-y-3 ${a.pinned?'border-primary/30 bg-green-50/20':'border-neutral-200'}`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-2">
                  {a.pinned&&<span className="text-[10px] font-bold text-primary bg-green-100 px-2 py-0.5 rounded-full border border-green-200">PINNED</span>}
                  <Badge label={a.type} color={typeColor[a.type]}/>
                  <span className="text-[11px] text-neutral-400">{a.date} • {a.audience}</span>
                </div>
                <h4 className="font-heading font-extrabold text-[#2B2D31]">{a.title}</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{a.message}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={()=>togglePin(a.id)} className={`p-2 rounded-xl border transition-colors ${a.pinned?'border-primary text-primary bg-green-50':'border-neutral-200 text-neutral-400 hover:border-primary hover:text-primary'}`} title={a.pinned?'Unpin':'Pin'}>{Ic.pin()}</button>
                <button onClick={()=>{setForm({...a});setModal('edit');}} className="p-2 rounded-xl border border-neutral-200 text-neutral-400 hover:border-amber-300 hover:text-amber-600 hover:bg-amber-50">{Ic.edit()}</button>
                <button onClick={()=>setConfirmId(a.id)} className="p-2 rounded-xl border border-neutral-200 text-neutral-400 hover:border-red-300 hover:text-red-500 hover:bg-red-50">{Ic.trash()}</button>
              </div>
            </div>
          </div>
        ))}
        {announcements.length===0&&<div className="py-12 text-center text-xs text-neutral-400">No announcements yet.</div>}
      </div>

      {(modal==='add'||modal==='edit') && form && (
        <Modal title={modal==='add'?'New Announcement':'Edit Announcement'} onClose={()=>setModal(null)}>
          <div className="space-y-4">
            <Field label="Title *"><input className={inputCls} value={form.title} onChange={e=>setForm({...form,title:e.target.value})} placeholder="e.g. Workshop Tomorrow!"/></Field>
            <Field label="Message *"><textarea className={inputCls+' min-h-[90px] resize-none'} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Announcement details…"/></Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Type"><select className={selectCls} value={form.type} onChange={e=>setForm({...form,type:e.target.value as AnnouncementType})}>{['Workshop','Holiday','Exam','General'].map(t=><option key={t}>{t}</option>)}</select></Field>
              <Field label="Date"><input type="date" className={inputCls} value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/></Field>
            </div>
            <Field label="Target Audience"><input className={inputCls} value={form.audience} onChange={e=>setForm({...form,audience:e.target.value})} placeholder="All Students / AI Batch…"/></Field>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="pinned" checked={form.pinned} onChange={e=>setForm({...form,pinned:e.target.checked})} className="w-4 h-4 accent-primary"/>
              <label htmlFor="pinned" className="text-xs font-bold text-neutral-600">Pin this announcement</label>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={()=>setModal(null)} className="flex-1 py-2.5 text-sm font-bold text-neutral-600 border border-neutral-200 rounded-xl hover:bg-neutral-50">Cancel</button>
              <button onClick={save} className="flex-1 py-2.5 text-sm font-bold text-white bg-[#2B2D31] hover:bg-primary rounded-xl flex items-center justify-center gap-2">{Ic.save()} {modal==='add'?'Publish':'Save'}</button>
            </div>
          </div>
        </Modal>
      )}
      {confirmId && <ConfirmDialog msg="Delete this announcement?" onConfirm={()=>del(confirmId)} onCancel={()=>setConfirmId(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   REPORTS PANEL
══════════════════════════════════════════ */
const ReportsPanel = ({ students, batches, jobs, certs }: {
  students: Student[]; batches: Batch[]; jobs: Job[]; certs: Certificate[];
}) => {
  const exportCSV = (data: Record<string,string|number>[], filename: string) => {
    if(!data.length) return;
    const headers = Object.keys(data[0]);
    const rows = data.map(r=>headers.map(h=>`"${r[h]}"`).join(','));
    const blob = new Blob([[headers.join(','),...rows].join('\n')],{type:'text/csv'});
    const a = document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${filename}.csv`; a.click();
  };

  const collected = students.filter(s=>s.feePaid).reduce((a,s)=>a+s.fee,0);
  const pending   = students.filter(s=>!s.feePaid).reduce((a,s)=>a+s.fee,0);

  const reports = [
    { title:'Student Register', desc:`${students.length} students`, count:students.length, color:'bg-blue-50 border-blue-200 text-blue-700', fn:()=>exportCSV(students.map(s=>({ID:s.id,Name:s.name,Email:s.email,Phone:s.phone,Course:s.course,Batch:s.batch,Status:s.status,Progress:s.progress,Attendance:s.attendance,Fee:s.fee,FeePaid:s.feePaid?'Yes':'No',JoinDate:s.joinDate})),'students_register') },
    { title:'Batch Summary', desc:`${batches.length} batches`, count:batches.length, color:'bg-emerald-50 border-emerald-200 text-emerald-700', fn:()=>exportCSV(batches.map(b=>({ID:b.id,Name:b.name,Course:b.course,Instructor:b.instructor,Shift:b.shift,Room:b.room,Enrolled:b.enrolled,Capacity:b.capacity,StartDate:b.startDate,EndDate:b.endDate,Status:b.status})),'batches_summary') },
    { title:'Job Placements', desc:`${jobs.length} listings`, count:jobs.length, color:'bg-violet-50 border-violet-200 text-violet-700', fn:()=>exportCSV(jobs.map(j=>({ID:j.id,Title:j.title,Company:j.company,Location:j.location,Type:j.type,Salary:j.salary,Status:j.status,Deadline:j.deadline,Applicants:j.applicants})),'job_placements') },
    { title:'Certificate Register', desc:`${certs.filter(c=>c.status==='Issued').length} issued`, count:certs.length, color:'bg-amber-50 border-amber-200 text-amber-700', fn:()=>exportCSV(certs.map(c=>({ID:c.id,StudentID:c.studentId,Name:c.studentName,Course:c.course,IssueDate:c.issueDate,Status:c.status,VerifyCode:c.verifyCode})),'certificates_register') },
    { title:'Fee Collection', desc:`Rs ${collected.toLocaleString()} collected`, count:students.filter(s=>s.feePaid).length, color:'bg-pink-50 border-pink-200 text-pink-700', fn:()=>exportCSV(students.map(s=>({ID:s.id,Name:s.name,Course:s.course,FeeAmount:s.fee,FeePaid:s.feePaid?'Yes':'No'})),'fee_collection') },
    { title:'Attendance Alerts', desc:`${students.filter(s=>s.attendance<80).length} below 80%`, count:students.filter(s=>s.attendance<80).length, color:'bg-red-50 border-red-200 text-red-700', fn:()=>exportCSV(students.filter(s=>s.attendance<80).map(s=>({ID:s.id,Name:s.name,Batch:s.batch,Attendance:`${s.attendance}%`,Status:s.status})),'attendance_alerts') },
  ];

  return (
    <div className="space-y-6">
      <div><h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Reports & Data Export</h2><p className="text-xs text-neutral-400 mt-0.5">Download CSV files for any section.</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {reports.map((r,i)=>(
          <div key={i} className={`rounded-2xl border p-5 space-y-3 ${r.color}`}>
            <div><div className="font-heading font-extrabold text-sm">{r.title}</div><p className="text-xs mt-0.5 opacity-80">{r.desc}</p></div>
            <div className="text-3xl font-heading font-extrabold">{r.count}</div>
            <button onClick={r.fn} className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold bg-white/80 hover:bg-white border border-white/50 rounded-xl transition-all">{Ic.download()} Export CSV</button>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
        <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm">Quick Summary</h3>
        <table className="w-full text-xs">
          <thead className="bg-[#F7F8F8]"><tr>{['Metric','Value','Notes'].map(h=><th key={h} className="text-left px-4 py-2.5 text-[11px] font-bold text-neutral-400 uppercase tracking-wide">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-neutral-100">
            {([
              ['Total Students',students.length,'All enrolled'],
              ['Active Students',students.filter(s=>s.status==='Active').length,'Currently enrolled'],
              ['Total Batches',batches.length,'Running batches'],
              ['Total Capacity',batches.reduce((a,b)=>a+b.capacity,0),'Combined seats'],
              ['Open Jobs',jobs.filter(j=>j.status==='Open').length,'Active listings'],
              ['Certificates Issued',certs.filter(c=>c.status==='Issued').length,'Verified'],
              ['Fee Collected (Rs)',collected.toLocaleString(),'Paid'],
              ['Fee Pending (Rs)',pending.toLocaleString(),'Outstanding'],
            ] as [string,string|number,string][]).map(([k,v,n])=>(
              <tr key={String(k)} className="hover:bg-[#FAFAFA]">
                <td className="px-4 py-2.5 font-bold text-[#2B2D31]">{k}</td>
                <td className="px-4 py-2.5 font-heading font-extrabold text-primary">{v}</td>
                <td className="px-4 py-2.5 text-neutral-400">{n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   SETTINGS PANEL
══════════════════════════════════════════ */
const SettingsPanel = ({ toast }: { toast: (m:string)=>void }) => {
  const [profile, setProfile] = useState({ name:'Admin User', email:'admin@eurotraining.edu.np', phone:'+977-9768808890', org:'Euro Training Center', address:'Samakhusi, Kathmandu, Nepal' });
  const [pass, setPass] = useState({ current:'', newPass:'', confirm:'' });
  const [notifs, setNotifs] = useState({ email:true, enrollment:true, attendance:true, feeAlert:true, jobs:false });

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Settings</h2>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
        <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm border-b border-neutral-100 pb-3">Admin Profile</h3>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Full Name"><input className={inputCls} value={profile.name} onChange={e=>setProfile({...profile,name:e.target.value})}/></Field>
          <Field label="Email"><input type="email" className={inputCls} value={profile.email} onChange={e=>setProfile({...profile,email:e.target.value})}/></Field>
          <Field label="Phone"><input className={inputCls} value={profile.phone} onChange={e=>setProfile({...profile,phone:e.target.value})}/></Field>
          <Field label="Organization"><input className={inputCls} value={profile.org} onChange={e=>setProfile({...profile,org:e.target.value})}/></Field>
        </div>
        <Field label="Address"><input className={inputCls} value={profile.address} onChange={e=>setProfile({...profile,address:e.target.value})}/></Field>
        <button onClick={()=>toast('Profile saved!')} className="flex items-center gap-2 bg-[#2B2D31] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary transition-colors">{Ic.save()} Save Profile</button>
      </div>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
        <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm border-b border-neutral-100 pb-3">Change Password</h3>
        <Field label="Current Password"><input type="password" className={inputCls} value={pass.current} onChange={e=>setPass({...pass,current:e.target.value})} placeholder="••••••••"/></Field>
        <div className="grid grid-cols-2 gap-4">
          <Field label="New Password"><input type="password" className={inputCls} value={pass.newPass} onChange={e=>setPass({...pass,newPass:e.target.value})} placeholder="••••••••"/></Field>
          <Field label="Confirm"><input type="password" className={inputCls} value={pass.confirm} onChange={e=>setPass({...pass,confirm:e.target.value})} placeholder="••••••••"/></Field>
        </div>
        <button onClick={()=>{if(pass.current&&pass.newPass&&pass.newPass===pass.confirm){setPass({current:'',newPass:'',confirm:''});toast('Password updated!');}else toast('Check password fields.');}} className="flex items-center gap-2 bg-[#2B2D31] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary transition-colors">{Ic.save()} Update Password</button>
      </div>
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 space-y-4">
        <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm border-b border-neutral-100 pb-3">Notification Preferences</h3>
        <div className="space-y-3">
          {([['email','Email Notifications','Receive all notifications by email'],['enrollment','New Enrollment Alerts','When a new student enrolls'],['attendance','Low Attendance Alerts','When attendance drops below 80%'],['feeAlert','Unpaid Fee Reminders','About pending fee collections'],['jobs','Job Applications','When students apply to listings']] as [keyof typeof notifs,string,string][]).map(([key,label,desc])=>(
            <div key={key} className="flex items-center justify-between p-3 rounded-xl bg-[#F7F8F8] border border-neutral-200">
              <div><div className="text-xs font-bold text-[#2B2D31]">{label}</div><div className="text-[11px] text-neutral-400">{desc}</div></div>
              <button onClick={()=>setNotifs({...notifs,[key]:!notifs[key]})} className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all ${notifs[key]?'bg-primary justify-end':'bg-neutral-300 justify-start'}`}>
                <span className="w-5 h-5 bg-white rounded-full shadow-sm"/>
              </button>
            </div>
          ))}
        </div>
        <button onClick={()=>toast('Preferences saved!')} className="flex items-center gap-2 bg-[#2B2D31] text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary transition-colors">{Ic.save()} Save Preferences</button>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════ */
const navItems = [
  { id:'overview',      label:'Overview',      Icon:Ic.grid },
  { id:'students',      label:'Students',      Icon:Ic.users },
  { id:'batches',       label:'Batches',       Icon:Ic.book },
  { id:'jobs',          label:'Job Board',     Icon:Ic.briefcase },
  { id:'certificates',  label:'Certificates',  Icon:Ic.award },
  { id:'announcements', label:'Announcements', Icon:Ic.megaphone },
  { id:'reports',       label:'Reports',       Icon:Ic.bar },
  { id:'settings',      label:'Settings',      Icon:Ic.settings },
];

const Sidebar = ({ active, setActive, collapsed, setCollapsed, counts }: {
  active: string; setActive: (s:string)=>void; collapsed: boolean; setCollapsed: (b:boolean)=>void; counts: Record<string,number>;
}) => (
  <aside className={`${collapsed?'w-[60px]':'w-56'} flex-shrink-0 bg-[#2B2D31] text-white flex flex-col transition-all duration-300 overflow-hidden`}>
    <div className={`flex items-center ${collapsed?'justify-center px-2':'gap-3 px-4'} py-5 border-b border-[#3F4147]`}>
      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-heading font-extrabold text-white text-sm flex-shrink-0">E</div>
      {!collapsed && <span className="font-heading font-extrabold text-sm text-white whitespace-nowrap">Euro <span className="text-primary">Admin</span></span>}
    </div>
    <nav className="flex-1 py-4 space-y-0.5 px-2 overflow-y-auto">
      {navItems.map(({id,label,Icon})=>(
        <button key={id} onClick={()=>setActive(id)} title={collapsed?label:undefined}
          className={`w-full flex items-center ${collapsed?'justify-center':'gap-3'} px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative group ${active===id?'bg-primary text-white font-bold':'text-neutral-400 hover:text-white hover:bg-[#35373C]'}`}
        >
          {Icon()}
          {!collapsed&&<span className="truncate">{label}</span>}
          {!collapsed&&counts[id]>0&&<span className="ml-auto text-[10px] font-bold bg-white/20 px-1.5 py-0.5 rounded-full">{counts[id]}</span>}
          {collapsed&&counts[id]>0&&<span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">{counts[id]}</span>}
        </button>
      ))}
    </nav>
    <div className="border-t border-[#3F4147] p-2">
      <button onClick={()=>setCollapsed(!collapsed)} className={`w-full flex items-center ${collapsed?'justify-center':'gap-3'} px-3 py-2.5 rounded-xl text-neutral-500 hover:text-white hover:bg-[#35373C] text-sm font-medium transition-all`}>
        {Ic.menu()}
        {!collapsed&&<span>Collapse</span>}
      </button>
    </div>
  </aside>
);

/* ══════════════════════════════════════════
   ADMIN CREDENTIALS (change here to update)
══════════════════════════════════════════ */
const ADMIN_EMAIL    = 'admin@eurotraining.edu.np';
const ADMIN_PASSWORD = 'Euro@Admin2026@#';

/* ══════════════════════════════════════════
   LOGIN SCREEN
══════════════════════════════════════════ */
const LoginScreen = ({ onLogin }: { onLogin: ()=>void }) => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      if (res.ok) {
        onLogin();
      } else {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      }
    } catch {
      // Fallback: if API is unreachable, use hardcoded credentials
      if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        onLogin();
      } else {
        setError('Invalid email or password. Please try again.');
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#2B2D31] bg-grid-pattern-dark flex items-center justify-center p-4">
      {/* Glow blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"/>
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-heading font-extrabold text-white text-2xl mx-auto mb-4 shadow-lg shadow-primary/30">
            E
          </div>
          <h1 className="font-heading font-extrabold text-white text-2xl">Admin Portal</h1>
          <p className="text-neutral-400 text-sm mt-1">Euro Training Center</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-5">
          <div className="space-y-1">
            <h2 className="font-heading font-extrabold text-[#2B2D31] text-lg">Sign in</h2>
            <p className="text-xs text-neutral-400">Enter your admin credentials to continue</p>
          </div>

          {error && (
            <div className="flex items-center gap-2.5 p-3 bg-red-50 border border-red-200 rounded-xl">
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
              <p className="text-xs font-medium text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-600">Email Address</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <input
                  id="admin-email"
                  type="email"
                  required
                  autoComplete="username"
                  value={email}
                  onChange={e=>{setEmail(e.target.value);setError('');}}
                  placeholder="admin@eurotraining.edu.np"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl text-sm text-[#2B2D31] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white placeholder-neutral-300"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-600">Password</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <input
                  id="admin-password"
                  type={showPass ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={e=>{setPassword(e.target.value);setError('');}}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-12 py-3 border border-neutral-200 rounded-xl text-sm text-[#2B2D31] focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white placeholder-neutral-300"
                />
                <button
                  type="button"
                  onClick={()=>setShowPass(v=>!v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  tabIndex={-1}
                >
                  {showPass
                    ? <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#2B2D31] hover:bg-primary text-white font-heading font-bold text-sm rounded-xl transition-all shadow-sm disabled:opacity-70 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                  Verifying…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                  Sign In to Dashboard
                </>
              )}
            </button>
          </form>

          <div className="pt-2 border-t border-neutral-100 flex items-center gap-2 text-[11px] text-neutral-400">
            <svg className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>Access restricted to authorised staff only</span>
          </div>
        </div>

        <p className="text-center text-neutral-600 text-xs mt-6">
          <a href="/" className="hover:text-white transition-colors">← Back to main website</a>
        </p>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   DASHBOARD (shown only after login)
══════════════════════════════════════════ */
const DashboardApp = ({ onLogout }: { onLogout: ()=>void }) => {
  const [activeNav, setActiveNav] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  const [toast, setToast] = useState<string|null>(null);

  const [students, setStudents]           = useState<Student[]>([]);
  const [batches, setBatches]             = useState<Batch[]>([]);
  const [jobs, setJobs]                   = useState<Job[]>([]);
  const [certs, setCerts]                 = useState<Certificate[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  // Load all data from API on mount
  useEffect(() => {
    const load = async () => {
      try {
        const [s, b, j, c, a] = await Promise.all([
          fetch('/api/students').then(r=>r.json()),
          fetch('/api/batches').then(r=>r.json()),
          fetch('/api/jobs').then(r=>r.json()),
          fetch('/api/certificates').then(r=>r.json()),
          fetch('/api/announcements').then(r=>r.json()),
        ]);
        setStudents(s.map((x:Student)=>({...x, feePaid:!!x.feePaid})));
        setBatches(b);
        setJobs(j);
        setCerts(c);
        setAnnouncements(a);
      } catch { /* API not reachable – fall back to seed data */
        setStudents(seedStudents);
        setBatches(seedBatches);
        setJobs(seedJobs);
        setCerts(seedCerts);
        setAnnouncements(seedAnnouncements);
      }
    };
    load();
  }, []);

  const showToast = (msg: string) => { setToast(msg); setTimeout(()=>setToast(null), 3500); };

  const counts: Record<string,number> = {
    overview:0, students:students.filter(s=>s.status==='Pending').length,
    batches:0, jobs:jobs.filter(j=>j.status==='Open').length,
    certificates:certs.filter(c=>c.status==='Pending').length,
    announcements:announcements.filter(a=>a.pinned).length, reports:0, settings:0,
  };

  const panels: Record<string,React.ReactNode> = {
    overview:      <OverviewPanel students={students} batches={batches} jobs={jobs} certs={certs} announcements={announcements}/>,
    students:      <StudentsPanel students={students} setStudents={setStudents} batches={batches} toast={showToast}/>,
    batches:       <BatchesPanel batches={batches} setBatches={setBatches} toast={showToast}/>,
    jobs:          <JobsPanel jobs={jobs} setJobs={setJobs} toast={showToast}/>,
    certificates:  <CertificatesPanel certs={certs} setCerts={setCerts} students={students} toast={showToast}/>,
    announcements: <AnnouncementsPanel announcements={announcements} setAnnouncements={setAnnouncements} toast={showToast}/>,
    reports:       <ReportsPanel students={students} batches={batches} jobs={jobs} certs={certs}/>,
    settings:      <SettingsPanel toast={showToast}/>,
  };

  const currentNav = navItems.find(n=>n.id===activeNav);

  return (
    <div className="flex bg-[#F7F8F8]" style={{height:'100dvh', minHeight:'100vh'}}>
      <Sidebar active={activeNav} setActive={setActiveNav} collapsed={collapsed} setCollapsed={setCollapsed} counts={counts}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-neutral-200 px-6 py-3.5 flex items-center justify-between flex-shrink-0">
          <div>
            <h1 className="font-heading font-extrabold text-[#2B2D31] text-base">{currentNav?.label}</h1>
            <p className="text-[11px] text-neutral-400">Euro Training Center — Admin Portal</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-neutral-400 bg-[#F7F8F8] border border-neutral-200 px-3 py-1.5 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"/>
              <span>Live</span>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-neutral-100 text-neutral-500">
              {Ic.bell()}
              {(counts.students+counts.certificates)>0&&<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"/>}
            </button>
            <div className="flex items-center gap-2.5 pl-3 border-l border-neutral-200">
              <div className="w-8 h-8 rounded-xl bg-[#2B2D31] text-white font-heading font-bold text-xs flex items-center justify-center">AD</div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-[#2B2D31]">Admin</div>
                <div className="text-[10px] text-neutral-400">{ADMIN_EMAIL}</div>
              </div>
            </div>
            <a href="/" className="p-2 rounded-xl hover:bg-neutral-100 text-neutral-500 transition-colors" title="Back to Website">{Ic.home()}</a>
            {/* Logout button */}
            <button
              onClick={onLogout}
              title="Sign out"
              className="p-2 rounded-xl hover:bg-red-50 text-neutral-400 hover:text-red-500 transition-colors border border-transparent hover:border-red-200"
            >
              {Ic.logout()}
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{panels[activeNav]}</main>
      </div>
      {toast && <Toast msg={toast} onClose={()=>setToast(null)}/>}
    </div>
  );
};

/* ══════════════════════════════════════════
   ROOT COMPONENT — gate login → dashboard
══════════════════════════════════════════ */
const AdminDashboard = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  }

  return <DashboardApp onLogout={() => setLoggedIn(false)} />;
};

export default AdminDashboard;

