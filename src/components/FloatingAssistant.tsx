import { useState } from 'react';
import { MessageCircle, X, ChevronRight, Send, Award, BookOpen, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [chatStep, setChatStep] = useState<'welcome' | 'recommendation' | 'custom_question'>('welcome');
  const [userQuery, setUserQuery] = useState('');

  const profileRecommendations: Record<string, { title: string; desc: string; courseLink: string; courseTitle: string; badge: string }> = {
    student: {
      title: "Student / College Graduate",
      desc: "For rapid job entry, combining modern web skills or data analytics with practical workflow automation is recommended.",
      courseLink: "/programs",
      courseTitle: "Basic to Advanced AI or Web & Software Development",
      badge: "High Placement Rate"
    },
    teacher: {
      title: "Educator / Teacher",
      desc: "Upgrade your teaching career with our AI for Teachers program and Montessori ECCD Smart Class training.",
      courseLink: "/programs",
      courseTitle: "AI for Teachers & Educators / ECCD Training",
      badge: "Modern Educator"
    },
    professional: {
      title: "Office Worker / Executive",
      desc: "Boost workplace productivity with AI report writing, advanced Excel dashboards, and business presentation automation.",
      courseLink: "/programs",
      courseTitle: "AI for Office Professionals & MS Office Mastery",
      badge: "Corporate Productivity"
    },
    entrepreneur: {
      title: "Business Owner / Entrepreneur",
      desc: "Scale your business with Digital Marketing 360, marketing automation, and business accounting (Tally Prime).",
      courseLink: "/programs",
      courseTitle: "Digital Marketing 360 & Business Accounting",
      badge: "Revenue Growth"
    },
    freelancer: {
      title: "Aspiring Freelancer / Remote Worker",
      desc: "Monetize your skills on international marketplaces like Upwork & Fiverr to earn in USD.",
      courseLink: "/programs",
      courseTitle: "Global Freelancing & Online Earning",
      badge: "Earn in USD"
    }
  };

  const resetChat = () => {
    setSelectedProfile(null);
    setChatStep('welcome');
  };

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Interactive Window */}
      {isOpen && (
        <div className="w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-full bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden mb-3 md:mb-4 pointer-events-auto transition-all duration-300 flex flex-col max-h-[500px]">
          {/* Header - Soft Charcoal */}
          <div className="bg-[#2B2D31] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-[#3F4147]">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/20 border border-primary flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
                  <span className="font-heading font-bold text-[12px] sm:text-sm text-white truncate">Career & Program Advisor</span>
                  <span className="bg-primary text-white text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-mono font-bold flex-shrink-0">2026</span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 truncate">Skill & Career Counseling</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors p-1 flex-shrink-0"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3 sm:p-4 overflow-y-auto flex-grow bg-neutral-50/70 space-y-3 sm:space-y-4 text-sm">
            {chatStep === 'welcome' && (
              <div className="space-y-3">
                <div className="bg-white p-3 sm:p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-neutral-200/80 text-neutral-700 space-y-2">
                  <p className="font-medium text-[#2B2D31] text-[12px] sm:text-sm">Namaste! Welcome to Euro Training Center.</p>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                    As Nepal's premier <strong className="text-primary">Skill Development & Career Transformation Institute</strong>, we offer industry-aligned professional training programs.
                  </p>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#2B2D31] pt-1">What is your primary career goal?</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  {[
                    { id: 'student', label: 'Student / College Grad seeking job' },
                    { id: 'teacher', label: 'Educator wanting digital & AI skills' },
                    { id: 'professional', label: 'Working Office Professional' },
                    { id: 'entrepreneur', label: 'Business Owner / Entrepreneur' },
                    { id: 'freelancer', label: 'Want to Freelance online in USD' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedProfile(item.id);
                        setChatStep('recommendation');
                      }}
                      className="w-full text-left bg-white hover:bg-green-50 hover:border-green-200 border border-neutral-200 px-2.5 sm:px-3 py-2.5 rounded-xl text-[11px] sm:text-xs font-medium text-neutral-700 transition-all flex items-center justify-between gap-2 group shadow-xs active:scale-[0.98] sm:active:scale-100"
                    >
                      <span className="leading-snug flex-1 min-w-0">{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {chatStep === 'recommendation' && selectedProfile && (
              <div className="space-y-3">
                <div className="bg-white p-3 sm:p-3.5 rounded-2xl shadow-sm border border-neutral-200/80 text-neutral-700 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-100 text-primary text-[10px] sm:text-[11px] font-bold">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    {profileRecommendations[selectedProfile].badge}
                  </div>
                  <h4 className="font-heading font-bold text-[#2B2D31] text-[13px] sm:text-sm leading-snug">
                    Recommendation for {profileRecommendations[selectedProfile].title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed">
                    {profileRecommendations[selectedProfile].desc}
                  </p>
                  <div className="p-2.5 sm:p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-neutral-400 block mb-1">Top Recommended Program</span>
                    <span className="text-[11px] sm:text-xs font-bold text-primary block leading-snug">
                      {profileRecommendations[selectedProfile].courseTitle}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link
                    to={profileRecommendations[selectedProfile].courseLink}
                    onClick={() => setIsOpen(false)}
                    className="flex-1 bg-primary hover:bg-primary-hover text-white py-2 px-2.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-bold text-center transition-all shadow-sm flex items-center justify-center gap-1 active:scale-[0.98] sm:active:scale-100"
                  >
                    <BookOpen className="w-3.5 h-3.5 flex-shrink-0" /> Explore Program
                  </Link>
                  <button
                    onClick={resetChat}
                    className="bg-neutral-200 hover:bg-neutral-300 text-[#2B2D31] px-2.5 sm:px-3 py-2 rounded-xl text-[11px] sm:text-xs font-semibold transition-all flex-shrink-0 active:scale-[0.98] sm:active:scale-100"
                  >
                    Back
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input / Support */}
          <div className="p-2.5 sm:p-3 bg-white border-t border-neutral-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] sm:text-xs mb-2 gap-1.5 sm:gap-2">
              <span className="text-neutral-500 font-medium">Need instant admissions guidance?</span>
              <a
                href="https://wa.me/9779768808890?text=Hello%20Euro%20Training%20Center,%20I%20am%20interested%20in%20your%202026%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-bold flex items-center gap-1 self-start sm:self-auto"
              >
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current flex-shrink-0" /> WhatsApp Us
              </a>
            </div>
            <div className="relative flex items-center">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && userQuery.trim()) {
                    window.location.href = `/contact?q=${encodeURIComponent(userQuery)}`;
                  }
                }}
                placeholder="Ask anything or search courses..."
                className="w-full pl-3 pr-9 py-2 rounded-xl text-[11px] sm:text-xs border border-neutral-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-neutral-50"
              />
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="absolute right-2 text-primary hover:text-primary-hover p-1 flex-shrink-0"
              >
                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Buttons */}
      <div className="flex items-center gap-2.5 md:gap-3 pointer-events-auto">
        <a
          href="https://wa.me/9779768808890?text=Hello%20Euro%20Training%20Center,%20I%20am%20interested%20in%20your%20training%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all transform hover:scale-105 flex-shrink-0 active:scale-[0.98] sm:active:scale-100"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#2B2D31] hover:bg-[#35373C] text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-full font-heading font-semibold text-[11px] sm:text-xs md:text-sm shadow-xl flex items-center gap-1.5 sm:gap-2 border border-[#3F4147] transition-all active:scale-[0.98] sm:active:scale-100"
        >
          <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
          <span className="hidden sm:inline">Career Advisor</span>
          <span className="sm:hidden">Advisor</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingAssistant;
