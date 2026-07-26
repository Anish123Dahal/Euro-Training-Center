import { useState } from 'react';
import { BookOpen, Download, Award, Users, Bell, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardPortal = () => {
  const [role, setRole] = useState<'student' | 'admin'>('student');

  // Sample student Data
  const studentInfo = {
    name: "Aayushma Shrestha",
    rollNo: "EUR-2026-AI-104",
    course: "Basic to Advanced Artificial Intelligence (AI)",
    batch: "Morning Shift (7:00 AM - 9:00 AM)",
    progress: 78,
    attendance: "96.5%",
    assignmentsCompleted: "14 / 16",
    materials: [
      { title: "AI Prompt Engineering Guide (2026 Edition).pdf", size: "4.2 MB", type: "PDF Manual" },
      { title: "ChatGPT Automation Excel Macros Workbook.xlsx", size: "1.8 MB", type: "Excel Template" },
      { title: "Module 4 Video Recording & Assignment Drills.zip", size: "124 MB", type: "Archive" },
      { title: "Corporate CV ATS Optimization Template.docx", size: "850 KB", type: "Template" },
    ]
  };

  // Sample admin analytics
  const adminStats = [
    { title: "Total Enrolled Students", value: "5,520+", change: "+14% this month" },
    { title: "Active 2026 Batches", value: "24 Batches", change: "Morning / Day / Evening" },
    { title: "Job Placement Requests", value: "88 Active", change: "42 companies partnered" },
    { title: "Certificate Verification Queries", value: "312 Verified", change: "100% Authentic blockchain" },
  ];

  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern">
      {/* Header Banner */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-12 sm:py-14 mb-10 border-b border-[#3F4147]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="bg-[#35373C] text-primary border border-primary/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
              <Shield className="w-3.5 h-3.5 text-primary" /> Digital Learning & Management Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Euro Cloud Educational Workspace
            </h1>
            <p className="text-neutral-300 text-sm mt-1">
              Preview our interactive student study environment and administrative governance platform.
            </p>
          </div>

          {/* Role switcher */}
          <div className="bg-[#232428] p-1.5 rounded-2xl border border-[#3F4147] inline-flex self-start">
            <button
              onClick={() => setRole('student')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all flex items-center gap-2 ${
                role === 'student' ? 'bg-primary text-white shadow-md' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Student Dashboard</span>
            </button>
            <button
              onClick={() => setRole('admin')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all flex items-center gap-2 ${
                role === 'admin' ? 'bg-[#35373C] text-white shadow-md border border-neutral-600' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Admin Panel</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {role === 'student' ? (
          /* STUDENT DASHBOARD WORKSPACE */
          <div className="space-y-8 animate-fade-in">
            {/* Top Student Banner Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-200 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white font-heading font-extrabold text-2xl flex items-center justify-center shadow-sm flex-shrink-0">
                  AS
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#2B2D31]">{studentInfo.name}</h2>
                    <span className="bg-green-100 text-primary font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-green-200">
                      Active Scholar
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-primary">{studentInfo.course}</p>
                  <p className="text-xs text-neutral-500 font-mono mt-1">Roll No: {studentInfo.rollNo} | {studentInfo.batch}</p>
                </div>
              </div>

              {/* Attendance badge */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto bg-[#F7F8F8] p-4 rounded-2xl border border-neutral-200">
                <div className="text-center px-4 border-r border-neutral-200">
                  <span className="text-[11px] text-neutral-500 font-bold block">Attendance Rate</span>
                  <span className="text-lg font-heading font-extrabold text-primary block mt-0.5">{studentInfo.attendance}</span>
                </div>
                <div className="text-center px-4">
                  <span className="text-[11px] text-neutral-500 font-bold block">Assignments</span>
                  <span className="text-lg font-heading font-extrabold text-[#2B2D31] block mt-0.5">{studentInfo.assignmentsCompleted}</span>
                </div>
              </div>
            </div>

            {/* Main Content Split: 8 cols study materials, 4 cols sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-6">
                {/* Course Progress */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center text-xs font-bold text-[#2B2D31]">
                    <span>Overall Syllabus Progress</span>
                    <span>{studentInfo.progress}% Completed</span>
                  </div>
                  <div className="w-full bg-neutral-200 h-3 rounded-full overflow-hidden">
                    <div className="bg-primary h-full transition-all duration-500" style={{ width: `${studentInfo.progress}%` }}></div>
                  </div>
                  <p className="text-xs text-neutral-500 font-medium">
                    You have successfully completed 6 out of 8 modules. Next lab session starts tomorrow at 7:00 AM.
                  </p>
                </div>

                {/* Course Materials & Downloads */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                    <h3 className="text-lg font-heading font-extrabold text-[#2B2D31] flex items-center gap-2">
                      <Download className="w-5 h-5 text-primary" /> Study Resources & Course Files
                    </h3>
                    <span className="text-xs text-neutral-400 font-bold">{studentInfo.materials.length} Files</span>
                  </div>

                  <div className="space-y-3">
                    {studentInfo.materials.map((file, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#F7F8F8] border border-neutral-200 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 truncate">
                          <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 text-primary flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                            DOC
                          </div>
                          <div className="truncate">
                            <h4 className="text-xs font-bold text-[#2B2D31] truncate">{file.title}</h4>
                            <span className="text-[11px] text-neutral-400">{file.type} • {file.size}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => alert(`Downloading ${file.title}...`)}
                          className="bg-[#2B2D31] hover:bg-primary text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-xs flex items-center gap-1.5 flex-shrink-0"
                        >
                          <Download className="w-3.5 h-3.5" /> Get File
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Notifications & Job Shortcuts */}
              <div className="lg:col-span-4 space-y-6 sticky top-24">
                <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white p-6 rounded-3xl shadow-xl border border-[#3F4147] space-y-4">
                  <div className="flex items-center gap-2 text-primary font-heading font-bold text-sm border-b border-[#3F4147] pb-3">
                    <Bell className="w-4 h-4 text-primary" />
                    <span className="text-white">Live Student Notifications</span>
                  </div>

                  <ul className="space-y-3.5 text-xs">
                    <li className="p-3 bg-[#35373C] rounded-2xl border border-[#3F4147] space-y-1">
                      <span className="text-primary font-bold block">Workshop Tomorrow!</span>
                      <p className="text-neutral-300">Special guest seminar on "Earning USD via Upwork Freelancing" at Samakhusi Lab 2.</p>
                    </li>
                    <li className="p-3 bg-[#35373C] rounded-2xl border border-[#3F4147] space-y-1">
                      <span className="text-white font-bold block">Job Fair Registration</span>
                      <p className="text-neutral-400">CloudTech Nepal is conducting live mock technical interviews this Friday.</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm text-center space-y-4">
                  <Award className="w-10 h-10 text-primary mx-auto" />
                  <div>
                    <h4 className="font-heading font-extrabold text-[#2B2D31] text-sm">Certificate Verification ID</h4>
                    <p className="text-xs text-neutral-500 mt-1">Check your QR credentials or generate transcript copies.</p>
                  </div>
                  <Link
                    to="/verify"
                    className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-heading font-bold text-xs rounded-xl block transition-all shadow-sm"
                  >
                    Go to Verification Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= ADMIN GOVERNANCE PANEL ================= */
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminStats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-neutral-400 block">{stat.title}</span>
                  <span className="text-3xl font-heading font-extrabold text-[#2B2D31] block">{stat.value}</span>
                  <span className="text-xs font-bold text-primary block">{stat.change}</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm space-y-6">
              <h3 className="text-lg font-heading font-extrabold text-[#2B2D31] pb-3 border-b border-neutral-100">
                Institutional Administrative Control
              </h3>
              <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                Euro Training Center governance panel manages active student registries, batch scheduling for Samakhusi labs, certificate issuance, and employer candidate matching.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardPortal;
