import { motion } from 'framer-motion';
import { Users, BookOpen, Briefcase, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COURSES, TESTIMONIALS } from '../data/mockData';

const Home = () => {
  const stats = [
    { label: "Students Trained", value: "5,500+", icon: <Users className="w-6 h-6 text-primary" />, detail: "Successfully graduated" },
    { label: "Courses & Workshops", value: "35+", icon: <BookOpen className="w-6 h-6 text-primary" />, detail: "Industry practicals" },
    { label: "Placement Rate", value: "94%", icon: <Briefcase className="w-6 h-6 text-primary" />, detail: "Hiring & Freelance income" },
    { label: "Established", value: "2075 B.S.", icon: <Award className="w-6 h-6 text-primary" />, detail: "Samakhusi, Kathmandu" },
  ];

  const corePillars = [
    { title: "IT & Artificial Intelligence", desc: "Generative AI, React Development, Cyber Security & Digital Marketing.", link: "/programs" },
    { title: "Corporate Office & Productivity", desc: "MS Excel Dashboards, Word formatting, Outlook & daily automation tools.", link: "/programs" },
    { title: "Teacher Training Expansion", desc: "Montessori, ECCD, Smart Classroom aids & lesson planning.", link: "/programs" },
    { title: "Hotel & Hospitality Arts", desc: "Professional Barista, Culinary art, bakery, front office & hotel software.", link: "/programs" },
    { title: "Business & Global Freelancing", desc: "Tally Prime, Nepal VAT/Tax, Leadership, Upwork & Fiverr earning in USD.", link: "/programs" }
  ];

  const whyChoosePoints = [
    "Industry Veteran Trainers & Practicing Professionals",
    "2026 Ready Curriculum with AI Productivity Integration",
    "Modern Computer & Hospitality Training Labs in Samakhusi",
    "Affordable Fees with Flexible Morning/Day/Evening Shifts",
    "Internally Accredited Diploma & QR-Code Verification",
    "Dedicated Job Placement Cell & Corporate Partnerships",
    "Free Executive CV Building & Mock Interview Sessions",
    "Lifetime Access to Alumni Network & Refresher Material"
  ];

  // Pick our Premium AI and Job courses to highlight on home page
  const premiumCourses = COURSES.filter(c => c.isPremium).slice(0, 3);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-6rem)] flex items-center bg-[#2B2D31] bg-grid-pattern-dark overflow-hidden py-10 md:py-16 lg:py-20">
        <div className="absolute inset-0 z-0 opacity-35 md:opacity-30 lg:opacity-45">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Euro Training Center Students" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#232428] via-[#2B2D31]/92 to-[#2B2D31]/70 md:bg-gradient-to-r md:from-[#232428] md:via-[#2B2D31]/95 md:to-transparent"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 py-4 md:py-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 md:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-3.5 md:py-1 rounded-full bg-primary/20 border border-primary/50 text-primary font-bold text-[11px] sm:text-xs md:text-sm tracking-wide max-w-full">
                <span className="text-white font-semibold">Nepal's Premier Skill Development & Career Institute</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.15] md:leading-[1.1] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-orange-500">
                  Empowering Skills.
                </span>
                <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-300 to-primary">
                  Creating Careers.
                </span>
              </h1>

              <p className="text-sm md:text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed font-normal">
                Learn Today. Lead Tomorrow. Since <strong className="text-white font-bold">2075 B.S.</strong>, we equip aspiring professionals with cutting-edge <strong className="text-primary font-semibold">AI productivity tools</strong>, corporate IT mastery, teaching excellence, and global job placement opportunities in Nepal and abroad.
              </p>
              
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3 md:gap-4 pt-1 md:pt-2">
                <Link 
                  to="/programs" 
                  className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-heading font-bold text-sm md:text-base sm:text-lg transition-all shadow-md text-center active:scale-[0.98] md:active:scale-100"
                >
                  Explore 2026 Courses
                </Link>
                <Link 
                  to="/jobs" 
                  className="w-full md:w-auto bg-[#35373C] hover:bg-[#3F4147] text-white border border-[#3F4147] px-5 md:px-7 py-3.5 md:py-4 rounded-xl font-heading font-bold text-sm md:text-base sm:text-lg transition-all shadow-xs flex items-center justify-center gap-2 text-center active:scale-[0.98] md:active:scale-100"
                >
                  <span>Job Guarantee Program</span>
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded font-mono uppercase font-extrabold">NEW</span>
                </Link>
              </div>

              {/* Highlights bar */}
              <div className="pt-4 md:pt-6 border-t border-[#3F4147] flex flex-col sm:flex-row flex-wrap gap-3 md:gap-5 text-[11px] sm:text-xs md:text-sm text-neutral-300">
                <span className="flex items-center gap-2 font-medium text-white">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" /> Generative AI Tool Mastery
                </span>
                <span className="flex items-center gap-2 font-medium text-white">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" /> Global Freelancing in USD
                </span>
                <span className="flex items-center gap-2 font-medium text-white">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary flex-shrink-0" /> 100% Practical Labs
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white relative z-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 border border-neutral-200 bg-grid-pattern">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center md:items-center sm:items-start text-center md:text-center sm:text-left p-1 md:p-2 border-b md:border-b sm:border-b-0 sm:border-r border-neutral-200/60 last:border-0"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3 shadow-xs border border-green-100">
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#2B2D31] tracking-tight">{stat.value}</h3>
                <p className="text-[#2B2D31] font-bold text-xs md:text-sm mt-1">{stat.label}</p>
                <p className="text-neutral-400 text-[11px] md:text-xs mt-0.5">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Programs */}
      <section className="py-12 md:py-16 bg-[#F7F8F8] bg-grid-pattern border-b border-neutral-200/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 md:mb-12 gap-5 md:gap-6">
            <div className="max-w-2xl space-y-2 md:space-y-3">
              <span className="bg-white text-[#2B2D31] border border-neutral-300 text-[11px] sm:text-xs font-bold px-3 md:px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
                Recommended for 2026 & Beyond
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#2B2D31] tracking-tight">
                Future-Ready AI & Premium Programs
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                Stay competitive by integrating Artificial Intelligence into daily workflows. Whether you are an office executive, educator, entrepreneur, or aspiring global freelancer, our signature programs give you a distinct competitive advantage.
              </p>
            </div>
            <Link 
              to="/programs?cat=AI" 
              className="inline-flex items-center text-[#2B2D31] hover:text-primary font-heading font-bold transition-all text-xs sm:text-sm md:text-base self-start md:self-start lg:self-auto bg-white px-4 md:px-5 py-2.5 md:py-3 rounded-xl border border-neutral-200 w-full md:w-auto justify-center active:scale-[0.98] md:active:scale-100"
            >
              <span>View All 35+ Courses</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {premiumCourses.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 md:h-52 overflow-hidden relative">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D31]/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-[#2B2D31] text-white font-extrabold text-[10px] md:text-xs px-2.5 md:px-3 py-1 rounded-full border border-[#3F4147]">
                      {course.category}
                    </div>
                    {course.badge && (
                      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-primary text-white font-extrabold text-[10px] md:text-xs px-2.5 md:px-3 py-1 rounded-full">
                        {course.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 md:left-4 text-white text-[11px] md:text-xs font-extrabold flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-light" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="p-5 md:p-7">
                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-[#2B2D31] mb-2 md:mb-3 line-clamp-2 hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-neutral-600 text-xs sm:text-sm mb-4 md:mb-5 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    <div className="space-y-2 mb-4 md:mb-6 p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-[#F7F8F8] border border-neutral-200">
                      <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-wider text-[#2B2D31] block">Core Competencies:</span>
                      <ul className="space-y-1.5 text-xs text-neutral-700">
                        {course.modules.slice(0, 3).map((m, i) => (
                          <li key={i} className="flex items-center gap-2 truncate">
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="truncate font-semibold">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-5 md:px-7 pb-5 md:pb-7 pt-1 md:pt-2">
                  <Link
                    to="/programs"
                    className="w-full py-3 md:py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-heading font-extrabold text-xs sm:text-sm text-center block transition-all active:scale-[0.98] md:active:scale-100"
                  >
                    View Complete Syllabus & Enroll
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Core Pillars of Training */}
      <section className="py-12 md:py-16 bg-white bg-grid-pattern">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-2 md:space-y-3">
            <span className="text-[11px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest block">Comprehensive Curriculum</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#2B2D31]">
              Our Training Domains
            </h2>
            <p className="text-neutral-600 text-sm md:text-base">
              Euro Training Center Nepal offers structured vocational certifications across 5 essential high-growth industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {corePillars.map((pillar, idx) => (
              <Link 
                key={idx} 
                to={pillar.link}
                className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#F7F8F8] border border-neutral-200 hover:border-primary/50 hover:bg-white transition-all duration-300 flex flex-col justify-between active:scale-[0.98] md:active:scale-100"
              >
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-heading font-extrabold text-[#2B2D31]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-5 md:pt-6 text-xs font-extrabold text-primary">
                  <span>Browse Category Courses</span>
                </div>
              </Link>
            ))}
            
            {/* Direct Placement card */}
            <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-[#2B2D31] bg-grid-pattern-dark text-white border border-[#3F4147] shadow-lg flex flex-col justify-between">
              <div className="space-y-3 md:space-y-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary text-white flex items-center justify-center font-bold">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-heading font-extrabold text-white">
                  Job Placement Assistance & CV Bank
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Looking for direct hiring? Connect with our dedicated employer placement network and internship partners across Nepal.
                </p>
              </div>
              <div className="pt-5 md:pt-6">
                <Link 
                  to="/jobs" 
                  className="w-full py-2.5 md:py-3 bg-white text-[#2B2D31] hover:bg-neutral-100 rounded-xl font-heading font-extrabold text-xs block text-center transition-all shadow-xs active:scale-[0.98] md:active:scale-100"
                >
                  Go to Job Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-[#F7F8F8] bg-grid-pattern border-t border-b border-neutral-200/60">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative order-1 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1571260899304-4250701120a6?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Computer Lab Training" 
                className="rounded-2xl md:rounded-3xl shadow-xl relative z-10 border-4 border-white w-full max-w-full"
              />
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 bg-white/95 backdrop-blur p-3.5 md:p-5 rounded-xl md:rounded-2xl shadow-md border border-neutral-100 max-w-[80%] md:max-w-xs">
                <span className="text-xl md:text-2xl font-extrabold text-primary block">2075 B.S.</span>
                <p className="text-[11px] md:text-xs text-neutral-600 font-semibold">Over half a decade of training excellence in Samakhusi, Kathmandu.</p>
              </div>
            </div>

            <div className="space-y-5 md:space-y-6 order-2 lg:order-2">
              <span className="text-[11px] sm:text-xs font-bold text-primary uppercase tracking-widest">Why Euro Training Center Nepal</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#2B2D31] leading-tight">
                Not Just Another Institute — A True Career Accelerator
              </h2>
              <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                We design our curriculum in partnership with corporate HR managers and tech founders. You learn exact skills required to execute tasks independently in office environments or score high-paying overseas freelance gigs.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-1 md:pt-2">
                {whyChoosePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 md:p-3.5 rounded-xl md:rounded-2xl border border-neutral-200/80 shadow-xs">
                    <CheckCircle className="w-4.5 h-4.5 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-[#2B2D31] text-[11px] md:text-xs font-bold leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 md:pt-4">
                <Link to="/about" className="inline-flex items-center font-heading font-extrabold text-[#2B2D31] hover:text-primary hover:underline text-sm">
                  <span>Learn more about our Vision & Mission</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-12 md:py-16 bg-[#2B2D31] bg-grid-pattern-dark text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 space-y-2 md:space-y-3">
            <span className="bg-[#35373C] text-primary px-3 md:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider inline-block border border-[#3F4147]">
              Proven Career Impact
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-white tracking-tight">
              Student Success Stories
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              Hear directly from our alumni who transformed their practical knowledge into rewarding professions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#35373C] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-[#3F4147] flex flex-col justify-between space-y-5 md:space-y-6 shadow-md">
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-[#3F4147]">
                  <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-extrabold font-heading text-white text-sm truncate">{testimonial.name}</h4>
                    <p className="text-xs font-bold text-primary truncate">{testimonial.position}</p>
                    <p className="text-[11px] text-neutral-400 truncate">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5 md:space-y-6">
          <span className="bg-white text-[#2B2D31] text-[11px] sm:text-xs font-bold px-3.5 md:px-4 py-1 md:py-1.5 rounded-full uppercase tracking-widest inline-block shadow-sm">
            Admissions Open for 2026 Batches
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.2] md:leading-tight">
            Ready to Accelerate Your Career & Master Modern Skills?
          </h2>
          <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base sm:text-lg font-medium">
            Visit our institute at Samakhusi, Kathmandu or apply online today. Take the first step towards career transformation.
          </p>
          <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-3 md:gap-4 pt-3 md:pt-4">
            <Link 
              to="/contact" 
              className="w-full md:w-auto bg-white text-[#2B2D31] hover:bg-neutral-100 px-6 md:px-9 py-3.5 md:py-4 rounded-xl font-heading font-extrabold text-sm md:text-base transition-all shadow-md text-center active:scale-[0.98] md:active:scale-100"
            >
              Enroll / Get in Touch Online
            </Link>
            <a 
              href="tel:+9779768808890" 
              className="w-full md:w-auto bg-[#2B2D31] text-white hover:bg-[#35373C] px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-heading font-extrabold text-sm md:text-base transition-all shadow-sm border border-[#3F4147] text-center active:scale-[0.98] md:active:scale-100"
            >
              <span>Call: +977-9768808890</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
