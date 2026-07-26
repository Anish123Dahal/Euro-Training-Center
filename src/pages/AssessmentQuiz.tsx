import { useState, ReactNode } from 'react';
import { CheckCircle, RotateCcw, BookOpen, Zap, DollarSign, Laptop, Coffee, Users, Brain, BarChart3, Globe, Sprout, Smartphone, Rocket, GraduationCap, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    icon: ReactNode;
    points: Record<string, number>; // categorizing: 'ai', 'freelance', 'tech', 'vocational'
  }[];
}

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ ai: 0, freelance: 0, tech: 0, vocational: 0 });
  const [isCompleted, setIsCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is your primary career goal for 2026?",
      subtitle: "Choose the statement that resonates most with your immediate ambitions.",
      options: [
        { label: "Boost workplace productivity with AI tools & automate reports", icon: <Zap className="w-5 h-5 text-primary" />, points: { ai: 3, tech: 1 } },
        { label: "Earn remote income in USD working with global clients online", icon: <DollarSign className="w-5 h-5 text-primary" />, points: { freelance: 3, ai: 1 } },
        { label: "Build software, web applications & master coding languages", icon: <Laptop className="w-5 h-5 text-primary" />, points: { tech: 3 } },
        { label: "Master hands-on skills in early education, culinary arts or barista hospitality", icon: <Coffee className="w-5 h-5 text-primary" />, points: { vocational: 3 } },
      ]
    },
    {
      id: 2,
      question: "How do you prefer to spend your working hours?",
      subtitle: "Select your comfort zone regarding work environments.",
      options: [
        { label: "Collaborating in a dynamic classroom, busy cafe, or corporate office", icon: <Users className="w-5 h-5 text-primary" />, points: { vocational: 2, ai: 1 } },
        { label: "Independently solving logic puzzles and designing software architecture", icon: <Brain className="w-5 h-5 text-primary" />, points: { tech: 3, freelance: 1 } },
        { label: "Crafting digital content, ChatGPT prompts & analyzing business Excel data", icon: <BarChart3 className="w-5 h-5 text-primary" />, points: { ai: 3, freelance: 2 } },
        { label: "Managing overseas freelance gigs on Upwork and Fiverr from home", icon: <Globe className="w-5 h-5 text-primary" />, points: { freelance: 3, tech: 1 } },
      ]
    },
    {
      id: 3,
      question: "What is your current computer & technical background?",
      subtitle: "Be honest! We have beginner-friendly to advanced programs.",
      options: [
        { label: "Beginner: I know basic web browsing and typing", icon: <Sprout className="w-5 h-5 text-primary" />, points: { ai: 2, vocational: 2 } },
        { label: "Intermediate: Comfortable with MS Office, email, and basic tools", icon: <Smartphone className="w-5 h-5 text-primary" />, points: { ai: 3, freelance: 2 } },
        { label: "Technical: I have exposure to programming or digital marketing", icon: <Rocket className="w-5 h-5 text-primary" />, points: { tech: 3, freelance: 2 } },
        { label: "Educator / Professional: Looking to upgrade traditional career with smart tech", icon: <GraduationCap className="w-5 h-5 text-primary" />, points: { ai: 3, vocational: 1 } },
      ]
    },
    {
      id: 4,
      question: "How much time can you commit to career training each week?",
      subtitle: "Euro Training Center offers flexible Morning, Day, and Evening shifts.",
      options: [
        { label: "Fast-Track (4 to 6 weeks): Intensive quick skill boost", icon: <Zap className="w-5 h-5 text-primary" />, points: { ai: 3, vocational: 2 } },
        { label: "Comprehensive (2 to 3 months): Deep dive into freelancing or digital skills", icon: <Target className="w-5 h-5 text-primary" />, points: { freelance: 3, ai: 2 } },
        { label: "Full Transformation (5 to 6 months): Complete Job Guarantee & Internship Program", icon: <Award className="w-5 h-5 text-primary" />, points: { tech: 3, freelance: 2 } },
      ]
    }
  ];

  const handleSelectOption = (points: Record<string, number>) => {
    const newScores = { ...scores };
    Object.keys(points).forEach(key => {
      newScores[key] = (newScores[key] || 0) + points[key];
    });
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setScores({ ai: 0, freelance: 0, tech: 0, vocational: 0 });
    setIsCompleted(false);
  };

  // Determine top score category
  const getResult = () => {
    let topCategory = 'ai';
    let maxScore = -1;
    Object.entries(scores).forEach(([cat, score]) => {
      if (score > maxScore) {
        maxScore = score;
        topCategory = cat;
      }
    });

    const recommendations: Record<string, { title: string; badge: string; desc: string; courses: string[] }> = {
      ai: {
        title: "Artificial Intelligence & Office Transformation",
        badge: "AI & Productivity Specialist",
        desc: "Your answers show a strong motivation to modernize daily workflows and lead in 2026. Mastering ChatGPT, prompt engineering, Excel Copilot, and business automation will multiply your professional output.",
        courses: ["Basic to Advanced Artificial Intelligence (AI)", "AI for Office Professionals", "Microsoft Office & Corporate Productivity"]
      },
      freelance: {
        title: "Global Freelancing & Online Earning (USD)",
        badge: "Remote Digital Earner",
        desc: "You thrive on independence, financial freedom, and digital entrepreneurship. Our specialized freelancing training equips you with portfolio creation, international pricing models, and direct high-ticket conversion on Upwork and Fiverr.",
        courses: ["Global Freelancing & Online Earning", "Digital Marketing & Social Media Pro", "Graphic Design, Branding & Video Editing"]
      },
      tech: {
        title: "Full-Stack Software & Web Development",
        badge: "Future Software Engineer",
        desc: "You enjoy logical problem-solving and building scalable tech architectures. Our intensive development track teaches React, Python, cloud databases, and places you directly into high-paying IT company internships.",
        courses: ["Web & Software Development (React, Python & DBs)", "Data Analytics with Power BI, SQL & Python", "Cyber Security & Ethical Hacking Basics"]
      },
      vocational: {
        title: "Professional Hospitality & Modern Teacher Training",
        badge: "Industry Certified Pro",
        desc: "You excel in engaging social environments and hands-on operational excellence. Our commercial labs in Samakhusi provide international-standard Barista calibrations, Montessori ECCD child psychology, and hotel management protocols.",
        courses: ["Professional Barista, Bakery & Culinary Arts", "Montessori & ECCD Teacher Training (Smart Class)", "Business Accounting (Tally, Tax), Sales & Leadership"]
      }
    };

    return recommendations[topCategory] || recommendations['ai'];
  };

  const resultData = isCompleted ? getResult() : null;

  return (
    <div className="pb-12 md:pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern overflow-x-hidden">
      {/* Header Banner - Soft Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-10 sm:py-12 md:py-14 mb-8 md:mb-12 border-b border-[#3F4147] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#35373C] text-primary border border-primary/50 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-block mb-3 sm:mb-4">
            2026 Career Diagnostic Tool
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
            Career Assessment Quiz
          </h1>
          <p className="text-neutral-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Not sure which course best suits your skillset? Answer 4 quick questions and our diagnostic engine will match you with your ideal professional transformation program.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isCompleted ? (
          <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 md:sm:p-12 shadow-xl border border-neutral-200">
            {/* Progress Bar */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between text-[11px] md:text-xs font-extrabold text-[#2B2D31] mb-2">
                <span>Question {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31] mb-2 leading-tight">
                {questions[currentStep].question}
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-neutral-500 font-medium leading-relaxed">
                {questions[currentStep].subtitle}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3 md:space-y-4">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.points)}
                  className="w-full text-left p-3.5 sm:p-4 md:p-5 rounded-xl md:rounded-2xl bg-[#F7F8F8] border border-neutral-200 hover:border-primary hover:bg-green-50/50 transition-all flex items-start gap-3 md:gap-4 group shadow-xs active:scale-[0.98] sm:active:scale-100"
                >
                  <span className="p-2 rounded-xl md:p-2.5 bg-white border border-neutral-200 flex-shrink-0">
                    {option.icon}
                  </span>
                  <span className="text-xs sm:text-sm md:text-sm font-extrabold text-[#2B2D31] group-hover:text-primary transition-colors leading-relaxed pt-0.5">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Result Showcase */
          resultData && (
            <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 md:sm:p-12 shadow-2xl border border-[#3F4147] text-center space-y-6 md:space-y-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/20 border-2 border-primary rounded-2xl md:rounded-3xl mx-auto flex items-center justify-center text-primary shadow-md">
                <CheckCircle className="w-7 h-7 md:w-9 md:h-9" />
              </div>

              <div className="space-y-2 md:space-y-3">
                <span className="bg-primary text-white text-[11px] md:text-xs font-bold px-3 md:px-4 py-1 rounded-full uppercase tracking-widest inline-block shadow-xs">
                  {resultData.badge}
                </span>
                <h2 className="text-xl sm:text-2xl md:text-4xl font-heading font-extrabold text-white leading-tight">
                  {resultData.title}
                </h2>
                <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium pt-1 md:pt-2">
                  {resultData.desc}
                </p>
              </div>

              <div className="bg-[#35373C] p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-[#3F4147] text-left space-y-3">
                <span className="text-[11px] md:text-xs font-bold text-primary uppercase tracking-widest block flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4" /> Top Recommended Programs For You:
                </span>
                <div className="grid grid-cols-1 gap-2 md:gap-2.5">
                  {resultData.courses.map((course, i) => (
                    <div key={i} className="bg-[#2B2D31] p-3 md:p-3.5 rounded-xl border border-[#3F4147] flex items-start md:items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm md:text-sm font-extrabold text-white flex items-start gap-2 leading-snug">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block mt-1 flex-shrink-0"></span>
                        <span>{course}</span>
                      </span>
                      <Link 
                        to={`/contact?course=${encodeURIComponent(course)}`} 
                        className="text-[11px] md:text-xs font-extrabold text-primary hover:underline flex-shrink-0"
                      >
                        Apply Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 pt-4 border-t border-[#3F4147]">
                <Link
                  to="/programs"
                  className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-heading font-bold text-xs sm:text-sm transition-all shadow-md text-center active:scale-[0.98] sm:active:scale-100"
                >
                  Browse Full Course Catalog
                </Link>
                <button
                  onClick={restartQuiz}
                  className="w-full sm:w-auto bg-[#35373C] hover:bg-[#3F4147] text-neutral-200 border border-[#3F4147] px-5 md:px-6 py-3.5 md:py-4 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] sm:active:scale-100"
                >
                  <RotateCcw className="w-4 h-4" /> Retake Quiz
                </button>
              </div>
            </div>
          )
        )}

        {/* Assistance Help */}
        <div className="mt-6 md:mt-8 text-center text-[11px] md:text-xs text-neutral-500 font-semibold leading-relaxed px-2">
          Need personalized advice? Call our academic counselors at <a href="tel:+9779768808890" className="text-primary font-mono font-bold hover:underline whitespace-nowrap">+977-9768808890</a> or chat via WhatsApp.
        </div>
      </div>
    </div>
  );
};

export default AssessmentQuiz;
