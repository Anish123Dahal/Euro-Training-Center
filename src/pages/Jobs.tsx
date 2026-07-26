import { useState, useEffect } from 'react';
import { JOB_VACANCIES } from '../data/mockData';
import { Briefcase, Upload, CheckCircle, MapPin, DollarSign, Building, FileText } from 'lucide-react';

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [skillField, setSkillField] = useState('AI Tools & Office Productivity');
  const [fileName, setFileName] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [liveJobs, setLiveJobs] = useState(JOB_VACANCIES);

  useEffect(() => {
    fetch('/api/jobs')
      .then(r => r.json())
      .then((data: { title:string; company:string; location:string; type:string; salary:string; status:string; deadline:string; description:string }[]) => {
        const open = data.filter((j) => j.status !== 'Closed' && j.status !== 'Draft');
        if (open.length > 0) {
          setLiveJobs(open.map(j => ({
            id: j.title.toLowerCase().replace(/\s+/g, '-'),
            title: j.title,
            company: j.company,
            location: j.location,
            type: j.type as 'Full-Time' | 'Part-Time' | 'Contract' | 'Remote',
            salary: j.salary,
            deadline: j.deadline,
            tags: [j.type],
            description: j.description,
          })));
        }
      })
      .catch(() => { /* keep mockData fallback */ });
  }, []);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill out your Name and Phone number.');
      return;
    }
    setFormSubmitted(true);
  };

  const benefits = [
    { title: "Exclusive Employer Partnership", desc: "We have active recruiting agreements with over 40+ leading corporate companies in Kathmandu and online." },
    { title: "Interview Prep & STAR Method", desc: "Free mock behavioral and technical interviews conducted by seasoned corporate HR leaders before your real job interviews." },
    { title: "AI-Optimized CV & LinkedIn", desc: "Our staff guides you to construct an ATS-compliant resume and an impactful LinkedIn profile." },
    { title: "Job Guarantee Bootcamp", desc: "Participate in our intensive 6-month placement program that blends targeted skills, industry internship, and direct employer hiring." }
  ];

  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern overflow-x-hidden">
      {/* Header Banner - Soft Matte Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-10 md:py-12 sm:py-16 mb-8 md:mb-12 border-b border-[#3F4147] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-3.5 py-1 rounded-full bg-[#35373C] border border-primary text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3 md:mb-4 shadow-sm max-w-full">
            Placement & Career Center 2026
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold mb-3 md:mb-4 text-white leading-tight">
            Job Opportunities & Career Transformation
          </h1>
          <p className="text-neutral-300 max-w-3xl mx-auto text-sm md:text-base sm:text-lg leading-relaxed">
            At Euro Training Center Nepal, our goal doesn't end with training—we actively launch careers. Browse active vacancies from our employer network or submit your CV for our job placement cell.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Job Guarantee Highlight Card - Pure Green & White */}
        <div className="bg-primary text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 sm:p-12 mb-10 md:mb-16 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8 border border-green-300/30">
          <div className="space-y-3 md:space-y-4 max-w-2xl">
            <span className="bg-white text-[#2B2D31] text-[11px] sm:text-xs font-bold px-3 md:px-3.5 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 shadow-xs w-fit">
              Highly Recommended Program
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white leading-tight">
              Job Guarantee / Placement Program
            </h2>
            <p className="text-green-50 text-sm md:text-base leading-relaxed font-medium">
              Are you a recent grad or job seeker looking for absolute security? Enroll in our dedicated 6-month Career Transformation track featuring specialized training, structured corporate internship, portfolio assembly, and guaranteed interviews until hired.
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
              {['Technical Training', '3-Month Internship', 'Interview Drills', 'Employer Hiring'].map((item, idx) => (
                <span key={idx} className="bg-white text-[#2B2D31] text-[11px] sm:text-xs font-bold px-3 md:px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" /> {item}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <a 
              href="#cv-upload-section" 
              className="w-full sm:w-auto bg-[#2B2D31] text-white hover:bg-[#35373C] border border-[#3F4147] font-heading font-extrabold px-6 md:px-8 py-3.5 md:py-4 rounded-xl text-center shadow-md transition-all text-sm active:scale-[0.98] sm:active:scale-100"
            >
              Upload CV Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Vacancy Board (Left Column) */}
          <div className="lg:col-span-7 space-y-5 md:space-y-6 order-2 lg:order-1">
            <div className="flex items-center justify-between border-b border-neutral-200 pb-3 md:pb-4">
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31] flex items-center gap-2">
                <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" /> Active Job Vacancies
              </h2>
              <span className="text-[11px] sm:text-xs bg-green-100 text-primary font-bold px-2.5 md:px-3.5 py-1 rounded-full border border-green-200">
                {liveJobs.length} Live
              </span>
            </div>

            <p className="text-sm text-neutral-600 font-medium">
              Our placement candidates receive priority shortlisting for these active employer partner requisitions:
            </p>

            <div className="space-y-3 md:space-y-4">
              {liveJobs.map((job) => (
                <div key={job.id} className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all space-y-3 md:space-y-4 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base md:text-lg font-heading font-extrabold text-[#2B2D31] group-hover:text-primary transition-colors leading-snug">
                        {job.title}
                      </h3>
                      <p className="text-xs font-bold text-neutral-500 flex items-center gap-1.5 mt-1">
                        <Building className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" /> <span className="truncate">{job.company}</span>
                      </p>
                    </div>
                    <span className="self-start sm:self-center bg-green-50 text-primary border border-green-200 text-[11px] sm:text-xs font-extrabold px-2.5 md:px-3 py-1 rounded-full flex-shrink-0">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs text-neutral-600">
                    <span className="flex items-center gap-1 font-medium"><MapPin className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" /> <span className="truncate">{job.location}</span></span>
                    <span className="flex items-center gap-1 font-extrabold text-[#2B2D31]"><DollarSign className="w-3.5 h-3.5 text-primary flex-shrink-0" /> <span className="truncate">{job.salary}</span></span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-3 pt-3 border-t border-neutral-100">
                    <div className="flex flex-wrap gap-1.5">
                      {job.tags.map((tag, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-700 text-[11px] font-bold px-2.5 py-0.5 rounded-lg border border-neutral-200/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        setSelectedJob(job.title + " at " + job.company);
                        const formElem = document.getElementById('cv-upload-section');
                        if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-extrabold text-primary hover:text-primary-hover flex items-center gap-1 hover:underline self-start sm:self-center"
                    >
                      Apply for this role →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Our Placement Cell */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-neutral-200">
              <h3 className="text-lg md:text-xl font-heading font-extrabold text-[#2B2D31] mb-4 md:mb-6">How Euro Training Center Transforms Your Career</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {benefits.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-neutral-200 shadow-xs space-y-2">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <h4 className="font-heading font-extrabold text-sm text-[#2B2D31]">{item.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CV Upload & Apply Drawer (Right Column) */}
          <div id="cv-upload-section" className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-200 shadow-xl space-y-5 md:space-y-6">
              <div className="border-b border-neutral-100 pb-3 md:pb-4">
                <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest block mb-1">Direct Placement Registry</span>
                <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31] leading-tight">
                  Submit CV / Apply Online
                </h2>
                <p className="text-xs text-neutral-500 mt-1 font-medium">
                  Upload your resume for shortlisting, internship matching, or career counseling.
                </p>
              </div>

              {selectedJob && (
                <div className="bg-green-50 p-3 md:p-3.5 rounded-xl md:rounded-2xl border border-green-200 text-xs flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span className="font-bold text-neutral-600 block">Applying For Role:</span>
                    <span className="font-extrabold text-primary break-words">{selectedJob}</span>
                  </div>
                  <button onClick={() => setSelectedJob('')} className="text-neutral-400 hover:text-neutral-700 font-bold text-xs flex-shrink-0">Clear</button>
                </div>
              )}

              {formSubmitted ? (
                <div className="bg-green-50 p-6 md:p-8 rounded-xl md:rounded-2xl text-center border border-green-200 space-y-4">
                  <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto" />
                  <h3 className="text-base md:text-lg font-heading font-extrabold text-[#2B2D31]">Application Received!</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                    Thank you, <strong className="text-[#2B2D31]">{fullName}</strong>. Our Placement Officer in Samakhusi will review your skill dossier and reach out via phone/WhatsApp within 24 hours.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFullName(''); setPhone(''); setEmail(''); }}
                    className="mt-2 text-xs text-primary font-extrabold hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Aayushma Shrestha"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:border-primary transition-all font-medium text-[#2B2D31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+977-9768808890"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:border-primary transition-all font-medium text-[#2B2D31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:border-primary transition-all font-medium text-[#2B2D31]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5">Primary Skill / Interest Domain</label>
                    <select
                      value={skillField}
                      onChange={(e) => setSkillField(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:outline-none focus:border-primary font-semibold text-[#2B2D31]"
                    >
                      <option value="AI Tools & Office Productivity">AI Tools & Office Productivity</option>
                      <option value="Web & Software Development">Web & Software Development</option>
                      <option value="Digital Marketing & Social Media">Digital Marketing & Social Media</option>
                      <option value="Montessori & ECCD Teaching">Montessori & ECCD Teaching</option>
                      <option value="Barista & Hospitality Arts">Barista & Hospitality Arts</option>
                      <option value="Business Accounting (Tally & Tax)">Business Accounting & Finance</option>
                      <option value="General Internship & Placement Support">General Internship & Placement Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5">Upload CV / Resume (PDF, DOCX)</label>
                    <label className="w-full border-2 border-dashed border-neutral-200 hover:border-primary bg-[#F7F8F8] rounded-xl md:rounded-2xl p-4 md:p-6 text-center cursor-pointer flex flex-col items-center justify-center gap-2 transition-all group">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-green-50 text-primary flex items-center justify-center border border-green-100">
                        {fileName ? <FileText className="w-4 h-4 md:w-5 md:h-5 text-primary" /> : <Upload className="w-4 h-4 md:w-5 md:h-5 text-primary" />}
                      </div>
                      <span className="text-xs font-extrabold text-[#2B2D31] break-words max-w-full">
                        {fileName ? fileName : "Click to select file or drag & drop"}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-medium">Max file size: 10MB (Optional)</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 md:py-4 bg-primary hover:bg-primary-hover text-white font-heading font-extrabold text-sm rounded-xl shadow-md transition-all mt-2 active:scale-[0.98] sm:active:scale-100"
                  >
                    Submit CV for Placement Support
                  </button>
                </form>
              )}
            </div>

            {/* Helpline Notice - Soft Matte Charcoal */}
            <div className="mt-3 md:mt-4 p-3 md:p-4 bg-[#2B2D31] text-neutral-300 border border-[#3F4147] rounded-xl md:rounded-2xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div>
                <span className="font-bold text-white block">Need Career Counseling?</span>
                <span className="text-neutral-400">Call our placement counselor directly.</span>
              </div>
              <a href="tel:014975711" className="bg-primary hover:bg-primary-hover text-white px-3.5 py-2 rounded-xl font-mono font-extrabold transition-all shadow-xs self-start sm:self-center">
                01-4975711
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
