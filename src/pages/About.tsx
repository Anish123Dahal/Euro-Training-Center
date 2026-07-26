import { CheckCircle, Award, Target, Eye } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: "2075 B.S.", title: "Foundation in Samakhusi", desc: "Established with a single vision to bridge the skills gap in IT, Hospitality, and Teacher training across Nepal." },
    { year: "2077 B.S.", title: "Expansion of Hospitality & Montessori Labs", desc: "Launched dedicated commercial espresso baristas labs and ECCD interactive teacher training suites." },
    { year: "2080 B.S.", title: "Corporate Employer Partnership Network", desc: "Formed strategic alliances with 40+ corporate employers for guaranteed shortlisting and placement support." },
    { year: "2026 Era", title: "Skill Development & Career Transformation", desc: "Evolved into an AI-driven transformation institute, integrating generative AI tools across office, teaching, and freelancing curriculums." }
  ];

  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern overflow-x-hidden">
      {/* Header Banner - Soft Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-10 md:py-12 sm:py-16 mb-10 md:mb-16 border-b border-[#3F4147] text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <span className="bg-[#35373C] text-white border border-primary/50 px-3 md:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-block mb-3 md:mb-4 shadow-xs max-w-full">
            Established 2075 B.S. | Samakhusi, Kathmandu
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mb-3 md:mb-4 tracking-tight leading-tight">
            About Euro Training Center Nepal
          </h1>
          <p className="text-neutral-300 text-sm md:text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Positioned as a prominent <strong className="text-primary font-bold">Skill Development & Career Transformation Institute</strong>, we empower aspiring Nepalese professionals to excel locally and on the global stage.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-20">
          <div className="bg-white p-6 sm:p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-neutral-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3 md:space-y-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center border border-green-100">
                <Target className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31]">Our Mission</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-medium">
                To empower individuals with practical skills, Artificial Intelligence fluency, professional training, and career opportunities that prepare them for ultimate success in Nepal and the global job market.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 sm:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-neutral-200 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3 md:space-y-4">
              <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center border border-green-100">
                <Eye className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31]">Our Vision</h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base font-medium">
                To become Nepal's most trusted and innovative professional career transformation institute, producing skilled, AI-empowered, confident, and globally competitive graduates.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story & Philosophy */}
        <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-neutral-200 flex flex-col lg:flex-row mb-12 md:mb-20">
          <div className="lg:w-1/2 relative min-h-[280px] md:min-h-[350px] flex-shrink-0">
            <img src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=1000&auto=format&fit=crop" alt="Training Center Atmosphere" className="w-full h-full object-cover absolute inset-0" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur p-3 md:p-4 rounded-xl md:rounded-2xl shadow-md border border-neutral-100 max-w-[90%] md:max-w-none">
              <div className="flex items-center gap-2 text-[#2B2D31] font-heading font-extrabold text-xs md:text-sm">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span>Samakhusi, Kathmandu, Nepal</span>
              </div>
              <p className="text-[11px] md:text-xs text-neutral-600 mt-1 font-semibold">Equipping over 5,500+ professionals with real-world skills.</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-6 sm:p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-4 md:space-y-6">
            <span className="text-[11px] sm:text-xs font-bold text-primary uppercase tracking-widest">Our Transformation Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#2B2D31] leading-tight">
              Why We Evolved from a "Training Center" to a Career Institute
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed font-medium">
              In 2026 and beyond, theoretical knowledge alone is obsolete. Businesses require dynamic talent capable of using modern productivity packages and AI automation from day one.
            </p>
            <p className="text-neutral-600 text-sm leading-relaxed font-medium">
              Euro Training Center Nepal bridges this void by redesigning courses around functional productivity: whether teaching educators how to design AI lesson plans, training Baristas on commercial cafe management, or empowering freelancers to earn directly in USD.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Practical Learning First',
                'Modern Training Labs',
                'AI Automation & Tools',
                'Recognized Certificates',
                'Job Placement Cell',
                'Affordable Fee Structure'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-extrabold text-[#2B2D31]">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline Since 2075 B.S. */}
        <div className="bg-[#F7F8F8] py-4 md:py-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-14 space-y-2">
            <span className="text-[11px] sm:text-xs font-extrabold text-neutral-400 uppercase tracking-widest">
              Our Journey Since 2075 B.S.
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#2B2D31]">
              Key Milestones & Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border border-neutral-200 space-y-2 md:space-y-3">
                <span className="text-xs font-bold text-primary font-mono block bg-green-50 px-2.5 py-1 rounded w-max border border-green-200">
                  {item.year}
                </span>
                <h3 className="font-heading font-extrabold text-[#2B2D31] text-sm md:text-base">{item.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
