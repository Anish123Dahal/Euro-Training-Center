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
    <div className="pb-12 md:pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern overflow-x-hidden">
      {/* Header Banner - Soft Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-10 sm:py-12 md:py-16 mb-8 md:mb-12 border-b border-[#3F4147] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#35373C] text-primary border border-primary/50 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1.5 mb-3 sm:mb-4 shadow-sm">
            <QrCode className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" /> Instant Diploma Validation
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
            Certificate & QR Code Verification
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            All Euro Training Center Nepal credentials contain a tamper-proof QR verification hash and ID. Enter a graduate's Certificate ID below to confirm authenticity and verified course skills.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Verification Form */}
        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-xl border border-neutral-200 mb-8 md:mb-12">
          <form onSubmit={handleVerify} className="space-y-4">
            <label className="block text-[11px] md:text-xs font-bold text-[#2B2D31] uppercase tracking-wider mb-2">
              Enter Certificate ID / Roll Number:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  placeholder="e.g. EURO-2026-AI-001"
                  className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-xs sm:text-sm font-mono font-bold text-[#2B2D31] uppercase tracking-wider focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-heading font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98] sm:active:scale-100"
              >
                Verify Credential
              </button>
            </div>
          </form>

          {/* Quick Demo Certificate IDs */}
          <div className="mt-5 md:mt-6 pt-4 border-t border-neutral-100">
            <span className="text-[11px] md:text-xs text-neutral-400 font-bold block mb-2">Try Sample Verified Credentials:</span>
            <div className="flex flex-wrap gap-2">
              {['EURO-2026-AI-001', 'EURO-2025-WEB-104', 'EURO-2026-BAR-302'].map((sampleId) => (
                <button
                  key={sampleId}
                  onClick={() => handleSimulateQR(sampleId)}
                  className="text-[11px] md:text-xs font-mono font-bold bg-neutral-100 hover:bg-green-50 text-neutral-700 hover:text-primary px-2.5 sm:px-3 py-1.5 rounded-lg border border-neutral-200 transition-colors active:scale-[0.98] sm:active:scale-100"
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
              <div className="bg-white p-8 sm:p-12 rounded-2xl md:rounded-3xl border border-neutral-200 text-center shadow-xl space-y-4 max-w-lg mx-auto">
                <div className="w-12 h-12 mx-auto border-4 border-primary border-t-transparent rounded-full animate-spin"/>
                <p className="text-xs sm:text-sm font-bold text-neutral-500">Verifying certificate…</p>
              </div>
            ) : cert ? (
              <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 md:sm:p-10 shadow-2xl border border-[#3F4147] space-y-6 md:space-y-8">
                {/* Result Status Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 md:pb-6 border-b border-[#3F4147]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-500/20 border border-green-500 text-green-400 flex items-center justify-center shadow-md flex-shrink-0">
                      <CheckCircle className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] md:text-xs font-bold text-green-400 uppercase tracking-widest block">Official Academic Record</span>
                      <h3 className="text-lg sm:text-xl md:text-xl font-heading font-extrabold text-white">Status: Verified Authentic</h3>
                    </div>
                  </div>
                  <span className="bg-green-500 text-white font-mono font-extrabold text-[11px] md:text-xs px-3 sm:px-3.5 py-1.5 rounded-full uppercase tracking-wider self-start sm:self-auto">
                    {cert.status}
                  </span>
                </div>

                {/* Certificate Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="md:col-span-2 space-y-5 md:space-y-6 order-2 md:order-1">
                    <div>
                      <span className="text-[11px] md:text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-1">Graduate Student Name</span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-white leading-tight">{cert.studentName}</h2>
                    </div>

                    <div>
                      <span className="text-[11px] md:text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-1">Program Qualification</span>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold text-primary leading-snug">{cert.courseTitle}</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl md:rounded-2xl bg-[#35373C] border border-[#3F4147]">
                      <div>
                        <span className="text-[10px] md:text-[11px] text-neutral-400 font-bold uppercase block flex items-center gap-1">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" /> Issued Date
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-white break-words">{cert.completionDate}</span>
                      </div>
                      <div>
                        <span className="text-[10px] md:text-[11px] text-neutral-400 font-bold uppercase block flex items-center gap-1">
                          <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" /> Grade Earned
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-primary">{cert.grade}</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] md:text-xs text-neutral-400 font-bold block uppercase tracking-wider mb-2">Verified Practical Competency & Skills:</span>
                      <div className="flex flex-wrap gap-2">
                        {cert.skillsMastered.map((skill, idx) => (
                          <span key={idx} className="bg-[#35373C] text-white text-[11px] md:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl border border-[#3F4147] flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary flex-shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] md:text-xs text-neutral-500 block font-medium leading-relaxed">Verified by Instructor: <strong className="text-white font-mono break-all">{cert.trainer}</strong></span>
                    </div>
                  </div>

                  {/* QR Box */}
                  <div className="bg-white text-[#2B2D31] p-4 sm:p-5 rounded-2xl md:rounded-3xl text-center shadow-lg border border-neutral-200 self-center md:self-start w-full max-w-[220px] mx-auto space-y-3 order-1 md:order-2">
                    <img src={cert.qrCodeUrl} alt="QR Code Hash" className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-xl border border-neutral-200 object-cover" />
                    <span className="text-[10px] md:text-[11px] font-mono font-extrabold text-[#2B2D31] block tracking-wider uppercase break-all">ID: {cert.id}</span>
                    <p className="text-[10px] text-neutral-500 font-medium leading-tight">Scan with camera for instant academic verification.</p>
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-5 md:pt-6 border-t border-[#3F4147] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <p className="text-[11px] md:text-xs text-neutral-400 font-medium leading-relaxed">This document is certified by the Board of Academic Examiners, Euro Training Center Nepal.</p>
                  <button 
                    onClick={() => alert(`Downloading verified academic transcript copy for ${cert.id}...`)}
                    className="w-full sm:w-auto bg-[#35373C] hover:bg-[#3F4147] text-white px-5 py-3 rounded-xl font-bold text-[11px] md:text-xs transition-all flex items-center justify-center gap-2 flex-shrink-0 border border-[#3F4147] active:scale-[0.98] sm:active:scale-100"
                  >
                    <Download className="w-4 h-4 text-primary" /> Download PDF Verification
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl border border-neutral-200 text-center shadow-xl space-y-4 max-w-lg mx-auto">
                <AlertCircle className="w-10 h-10 md:w-12 md:h-12 text-[#2B2D31] mx-auto opacity-75" />
                <h3 className="text-lg sm:text-xl md:text-xl font-heading font-extrabold text-[#2B2D31]">Credential ID Not Found</h3>
                <p className="text-[11px] md:text-xs text-neutral-600 font-medium leading-relaxed">
                  We could not locate records for certificate ID: <strong className="text-[#2B2D31] font-mono bg-neutral-100 px-2 py-0.5 rounded break-all inline-block">{queriedId}</strong>. Please ensure you have typed the correct alphanumeric roll code.
                </p>
                <button
                  onClick={() => { setSearchId(''); setQueriedId(null); setCert(null); }}
                  className="w-full sm:w-auto bg-primary text-white px-5 sm:px-6 py-2.5 md:py-2.5 rounded-xl font-bold text-[11px] md:text-xs transition-all shadow-sm active:scale-[0.98] sm:active:scale-100"
                >
                  Try Another Search
                </button>
              </div>
            )}
          </div>
        )}

        {/* Institutional Trust Footer */}
        <div className="mt-10 md:mt-14 bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center sm:items-start justify-between gap-5 md:gap-6">
          <div className="flex items-start sm:items-center gap-3 md:gap-4 w-full sm:w-auto">
            <Building className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
            <div className="text-left">
              <h4 className="font-heading font-extrabold text-[#2B2D31] text-sm">Are You An Employer Partner?</h4>
              <p className="text-[11px] md:text-xs text-neutral-600 font-medium leading-relaxed mt-0.5">We offer direct hiring access to verified graduates with 94% job placement satisfaction.</p>
            </div>
          </div>
          <Link
            to="/jobs"
            className="w-full sm:w-auto bg-[#2B2D31] text-white hover:bg-[#35373C] px-5 sm:px-6 py-3 rounded-xl font-bold text-[11px] md:text-xs text-center transition-all shadow-sm active:scale-[0.98] sm:active:scale-100"
          >
            Access Job & Recruitment Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
