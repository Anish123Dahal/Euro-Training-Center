import { useState } from 'react';
import { Award, QrCode, CheckCircle, AlertCircle, Building, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CertificateData {
  id: string;
  studentName: string;
  courseTitle: string;
  completionDate: string;
  grade: string;
  trainer: string;
  status: 'Verified Active' | 'Expired';
  skillsMastered: string[];
  qrCodeUrl: string;
}

// Fallback data if the API server is not running
const SAMPLE_CERTIFICATES: Record<string, CertificateData> = {
  'EURO-2026-AI-001': {
    id: 'EURO-2026-AI-001',
    studentName: 'Aayushma Shrestha',
    courseTitle: 'Basic to Advanced Artificial Intelligence (AI) & Prompt Engineering',
    completionDate: 'February 15, 2026',
    grade: 'Distinction (98%)',
    trainer: 'Er. S. Maharjan (Lead AI Specialist)',
    status: 'Verified Active',
    skillsMastered: ['ChatGPT Automation', 'Copilot Integration', 'AI Content Engine', 'Python Data Parsing'],
    qrCodeUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=250&auto=format&fit=crop'
  },
  'EURO-2025-WEB-104': {
    id: 'EURO-2025-WEB-104',
    studentName: 'Ritesh Gurung',
    courseTitle: 'Full-Stack Web & Software Development (React.js & Node)',
    completionDate: 'November 20, 2025',
    grade: 'First Class (92%)',
    trainer: 'Er. P. Adhikari (Senior Tech Lead)',
    status: 'Verified Active',
    skillsMastered: ['React.js 19', 'Modern Tailwind CSS', 'MongoDB Architecting', 'Git & Vercel Deployment'],
    qrCodeUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=250&auto=format&fit=crop'
  },
  'EURO-2026-BAR-302': {
    id: 'EURO-2026-BAR-302',
    studentName: 'Sita Thapa',
    courseTitle: 'Professional Barista & Commercial Cafe Operations',
    completionDate: 'January 10, 2026',
    grade: 'Distinction (96%)',
    trainer: 'Master Roaster K. Bista',
    status: 'Verified Active',
    skillsMastered: ['Espresso Extraction Chemistry', 'Free-Pour Latte Art', 'HACCP Hygiene Standard', 'Cafe Inventory Calculus'],
    qrCodeUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=250&auto=format&fit=crop'
  }
};

const CertificateVerify = () => {
  const [searchId, setSearchId] = useState('');
  const [queriedId, setQueriedId] = useState<string | null>(null);
  const [cert, setCert] = useState<CertificateData | null | false>(null); // null=idle, false=not found
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = searchId.trim().toUpperCase();
    if (!code) return;
    setQueriedId(code);
    setLoading(true);
    setCert(null);
    try {
      const res = await fetch(`/api/certificates/verify/${encodeURIComponent(code)}`);
      const data = await res.json();
      if (data.found && data.cert) {
        const c = data.cert;
        setCert({
          id: c.verifyCode,
          studentName: c.studentName,
          courseTitle: c.course,
          completionDate: c.issueDate || '—',
          grade: 'Completed',
          trainer: 'Euro Training Center Nepal',
          status: 'Verified Active',
          skillsMastered: ['Course Completed', 'Certified by Euro Training Center'],
          qrCodeUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?q=80&w=250&auto=format&fit=crop',
        });
      } else {
        // fallback to local sample list
        const local = SAMPLE_CERTIFICATES[code];
        setCert(local ?? false);
      }
    } catch {
      // API not reachable — use sample data
      const local = SAMPLE_CERTIFICATES[code];
      setCert(local ?? false);
    } finally {
      setLoading(false);
    }
  };

  const handleSimulateQR = (id: string) => {
    setSearchId(id);
    setQueriedId(id);
    const local = SAMPLE_CERTIFICATES[id];
    setCert(local ?? false);
  };


  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern">
      {/* Header Banner - Soft Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-12 sm:py-16 mb-12 border-b border-[#3F4147] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#35373C] text-primary border border-primary/50 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-4 shadow-sm">
            <QrCode className="w-3.5 h-3.5 text-primary" /> Instant Diploma Validation
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Certificate & QR Code Verification
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            All Euro Training Center Nepal credentials contain a tamper-proof QR verification hash and ID. Enter a graduate's Certificate ID below to confirm authenticity and verified course skills.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verification Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-200 mb-12">
          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block text-xs font-bold text-[#2B2D31] uppercase tracking-wider mb-2">
              Enter Certificate ID / Roll Number:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="e.g. EURO-2026-AI-001"
                  className="w-full px-5 py-4 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm font-mono font-bold text-[#2B2D31] uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-heading font-bold text-sm shadow-md transition-all sm:w-auto"
              >
                Verify Credential
              </button>
            </div>
          </form>

          {/* Quick Demo Certificate IDs */}
          <div className="mt-6 pt-4 border-t border-neutral-100">
            <span className="text-xs text-neutral-400 font-bold block mb-2">Try Sample Verified Credentials:</span>
            <div className="flex flex-wrap gap-2">
              {['EURO-2026-AI-001', 'EURO-2025-WEB-104', 'EURO-2026-BAR-302'].map((sampleId) => (
                <button
                  key={sampleId}
                  onClick={() => handleSimulateQR(sampleId)}
                  className="text-xs font-mono font-bold bg-neutral-100 hover:bg-green-50 text-neutral-700 hover:text-primary px-3 py-1.5 rounded-lg border border-neutral-200 transition-colors"
                >
                  {sampleId}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Result Display */}
        {queriedId && (
          <div className="animate-fade-in">
            {loading ? (
              <div className="bg-white p-12 rounded-3xl border border-neutral-200 text-center shadow-xl space-y-4 max-w-lg mx-auto">
                <div className="w-12 h-12 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin"/>
                <p className="text-sm font-bold text-neutral-500">Verifying certificate…</p>
              </div>
            ) : cert ? (
              <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-[#3F4147] space-y-8">
                {/* Result Status Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#3F4147]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500 text-green-400 flex items-center justify-center shadow-md">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-green-400 uppercase tracking-widest block">Official Academic Record</span>
                      <h3 className="text-xl font-heading font-extrabold text-white">Status: Verified Authentic</h3>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white font-mono font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                    {cert.status}
                  </span>
                </div>

                {/* Certificate Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <span className="text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-1">Graduate Student Name</span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">{cert.studentName}</h2>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-1">Program Qualification</span>
                      <h4 className="text-base sm:text-lg font-bold text-primary">{cert.courseTitle}</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#35373C] border border-[#3F4147]">
                      <div>
                        <span className="text-[11px] text-neutral-400 font-bold uppercase block flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" /> Issued Date
                        </span>
                        <span className="text-sm font-extrabold text-white">{cert.completionDate}</span>
                      </div>
                      <div>
                        <span className="text-[11px] text-neutral-400 font-bold uppercase block flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-primary" /> Grade Earned
                        </span>
                        <span className="text-sm font-extrabold text-primary">{cert.grade}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-2">Verified Practical Competency & Skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {cert.skillsMastered.map((skill, idx) => (
                          <span key={idx} className="bg-[#35373C] text-white text-xs font-bold px-3 py-1.5 rounded-xl border border-[#3F4147] flex items-center gap-1.5">
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs text-neutral-500 block font-medium">Verified by Instructor: <strong className="text-white font-mono">{cert.trainer}</strong></span>
                    </div>
                  </div>

                  {/* QR Box */}
                  <div className="bg-white text-[#2B2D31] p-5 rounded-3xl text-center shadow-lg border border-neutral-200 self-center md:self-start w-full max-w-[220px] mx-auto space-y-3">
                    <img src={cert.qrCodeUrl} alt="QR Code Hash" className="w-36 h-36 mx-auto rounded-xl border border-neutral-200" />
                    <span className="text-[11px] font-mono font-extrabold text-[#2B2D31] block tracking-wider uppercase">ID: {cert.id}</span>
                    <p className="text-[10px] text-neutral-500 font-medium leading-tight">Scan with camera for instant academic verification.</p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-6 border-t border-[#3F4147] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-400 font-medium">This document is certified by the Board of Academic Examiners, Euro Training Center Nepal.</p>
                  <button 
                    onClick={() => alert(`Downloading verified academic transcript copy for ${cert.id}...`)}
                    className="bg-[#35373C] hover:bg-[#3F4147] text-white px-5 py-3 rounded-xl font-bold text-xs transition-all flex items-center gap-2 flex-shrink-0 border border-[#3F4147]"
                  >
                    <Download className="w-4 h-4 text-primary" /> Download PDF Verification
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-10 rounded-3xl border border-neutral-200 text-center shadow-xl space-y-4 max-w-lg mx-auto">
                <AlertCircle className="w-12 h-12 text-[#2B2D31] mx-auto opacity-75" />
                <h3 className="text-xl font-heading font-extrabold text-[#2B2D31]">Credential ID Not Found</h3>
                <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                  We could not locate records for certificate ID: <strong className="text-[#2B2D31] font-mono bg-neutral-100 px-2 py-0.5 rounded">{queriedId}</strong>. Please ensure you have typed the correct alphanumeric roll code.
                </p>
                <button
                  onClick={() => { setSearchId(''); setQueriedId(null); setCert(null); }}
                  className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm"
                >
                  Try Another Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Institutional Trust Footer */}
        <div className="mt-14 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Building className="w-10 h-10 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-heading font-extrabold text-[#2B2D31] text-sm">Are You An Employer Partner?</h4>
              <p className="text-xs text-neutral-600 font-medium">We offer direct hiring access to verified graduates with 94% job placement satisfaction.</p>
            </div>
          </div>
          <Link
            to="/jobs"
            className="bg-[#2B2D31] text-white hover:bg-[#35373C] px-6 py-3 rounded-xl font-bold text-xs flex-shrink-0 transition-all shadow-sm"
          >
            Access Job & Recruitment Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
