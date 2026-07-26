import aiMasterProgramImg from '../assets/ai-master-program.jpg';
import aiOfficeProfessionalsImg from '../assets/ai-office-professionals.jpg';
import aiTeachersImg from '../assets/ai-teachers.jpg';

export interface Course {
  id: string;
  title: string;
  category: 'Premium & AI' | 'IT & Digital Technology' | 'Teacher Training' | 'Hotel & Hospitality' | 'Business & Career' | 'Data & Creative';
  duration: string;
  eligibility: string;
  description: string;
  badge?: string;
  isPremium?: boolean;
  image: string;
  modules: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  position: string;
  company: string;
  review: string;
  image: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  deadline: string;
  tags: string[];
}

export const COURSES: Course[] = [
  // Premium & AI Courses
  {
    id: 'ai-master-program',
    title: 'Basic to Advanced Artificial Intelligence (AI)',
    category: 'Premium & AI',
    duration: '2.5 Months',
    eligibility: 'Open to All / Basic Computing',
    description: 'Master AI productivity tools, Generative AI, prompt engineering, and business automation to stay ahead in the modern digital landscape.',
    badge: 'Trending',
    isPremium: true,
    image: aiMasterProgramImg,
    modules: [
      'Introduction to Artificial Intelligence & Ecosystems',
      'ChatGPT, Claude & Generative AI Mastery',
      'Advanced AI Prompt Engineering for Precision',
      'AI Content Creation (Copywriting, Marketing, Scripts)',
      'AI Automation Tools & Workflow Integration',
      'AI Image & Video Generation (Midjourney, DALL-E, Runway)',
      'AI-Based Data Analysis & Excel Copilot',
      'Future Trends in AI & Ethics in Business'
    ]
  },
  {
    id: 'ai-office-professionals',
    title: 'AI for Office Professionals',
    category: 'Premium & AI',
    duration: '1.5 Months',
    eligibility: 'Working Professionals / Students',
    description: 'Supercharge daily workplace productivity using AI assistants. Write reports faster, design professional presentations, and automate repetitive office workflows.',
    badge: 'Highly Recommended',
    isPremium: true,
    image: aiOfficeProfessionalsImg,
    modules: [
      'Using ChatGPT & Microsoft Copilot in daily office work',
      'AI Report Writing & Professional Correspondence',
      'Automated Presentation Design with AI Tools',
      'Data Summarization & Email Inbox Management with AI',
      'Smart Task Automation & Meeting Notes Transcription'
    ]
  },
  {
    id: 'ai-teachers',
    title: 'AI for Teachers & Educators',
    category: 'Premium & AI',
    duration: '1 Month',
    eligibility: 'Teachers / Aspiring Educators',
    description: 'Transform classroom teaching with Educational Technology and AI. Easily generate interactive lesson plans, quizzes, and manage modern digital classrooms.',
    badge: 'Future Educator',
    isPremium: true,
    image: aiTeachersImg,
    modules: [
      'Creating interactive lesson plans using AI assistants',
      'AI diagnostic teaching & automated grading assistance',
      'Digital classroom management & collaborative tools',
      'Gamification of education using modern edtech',
      'Engaging neurodiverse learners with customized AI aids'
    ]
  },
  {
    id: 'freelancing-masterclass',
    title: 'Global Freelancing & Online Earning',
    category: 'Premium & AI',
    duration: '2 Months',
    eligibility: 'Any Specific Skill / Beginner Friendly',
    description: 'Learn how to monetize your skills on Upwork, Fiverr, and LinkedIn. From high-converting portfolio creation to direct client acquisition in USD.',
    badge: 'Earn in USD',
    isPremium: true,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Upwork, Fiverr & Toptal Profile setup and algorithm mastery',
      'Creating high-converting proposals & gig thumbnails',
      'Portfolio building and live showcasing techniques',
      'International client negotiation and email communication',
      'Payment gateways in Nepal (Payoneer, Bank Wire, SWIFT)',
      'Scaling from freelancer to agency owner'
    ]
  },
  {
    id: 'job-guarantee-placement',
    title: 'Job Guarantee & Career Transformation Program',
    category: 'Premium & AI',
    duration: '6 Months',
    eligibility: '+2 Pass / Bachelor Students & Grads',
    description: 'A comprehensive career bootcamp that blends modern technical skills, immersive real-world internships, mock interview sessions, and placement support.',
    badge: 'Career Guarantee',
    isPremium: true,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Intensive specialized skill training (IT, Marketing, or Business)',
      '3-Month paid/unpaid industry internship placement',
      'Executive CV & LinkedIn optimization by HR veterans',
      'Weekly corporate soft skills & behavioral interview drills',
      'Direct employer introductions and personalized placement mentorship'
    ]
  },

  // IT & Digital Technology
  {
    id: 'fullstack-web-dev',
    title: 'Web & Software Development (React, Python & DBs)',
    category: 'IT & Digital Technology',
    duration: '5 Months',
    eligibility: '+2 Pass / Beginners',
    description: 'Build robust web applications and modern software from scratch using HTML5, CSS3, JavaScript, React, Python, and cloud databases.',
    badge: 'High Demand',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'HTML5, CSS3, Flexbox, Grid & Modern Tailwind CSS',
      'JavaScript (ES6+) & TypeScript Essentials',
      'Frontend Development with React.js & Redux Toolkit',
      'Backend Logic with Python & Node.js basics',
      'Database Management (MongoDB & SQL fundamentals)',
      'Git, GitHub & Cloud Deployment (Vercel, AWS basics)'
    ]
  },
  {
    id: 'office-productivity-mastery',
    title: 'Microsoft Office & Corporate Productivity Masterclass',
    category: 'IT & Digital Technology',
    duration: '2 Months',
    eligibility: 'Beginner / School & College Students',
    description: 'Comprehensive Basic to Advanced Office Package. Master computer fundamentals, Windows, professional document styling in Word, Dashboard creation in Excel, and Outlook.',
    badge: 'Essential Skill',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Computer Fundamentals, Windows OS & File Management',
      'MS Word Professional (Reports, Templates, CV Design)',
      'MS Excel Fundamental to Advanced (Formulas, Pivot Tables, Dashboards)',
      'MS PowerPoint (Animated Business Presentations)',
      'MS Outlook (Professional Corporate Email Etiquette)',
      'Typing Mastery & Cloud Storage Integration (OneDrive/Drive)'
    ]
  },
  {
    id: 'digital-marketing-360',
    title: 'Digital Marketing & Social Media Pro',
    category: 'IT & Digital Technology',
    duration: '2.5 Months',
    eligibility: 'Basic Computer Knowledge',
    description: 'Drive traffic, generate leads, and boost sales with SEO, Meta Ads (Facebook/Instagram), Google Ads, email automation, and graphic design with Canva.',
    badge: 'Growth Specialist',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Search Engine Optimization (On-page, Off-page & Technical SEO)',
      'Social Media Marketing & Strategy (Meta, TikTok, LinkedIn)',
      'Facebook & Instagram Paid Advertising (Ads Manager Mastery)',
      'Google Ads & SEM Strategy',
      'Content Marketing & Commercial Copywriting',
      'Email Marketing Automation & Canva Pro Graphic Creation'
    ]
  },
  {
    id: 'cyber-security-fundamentals',
    title: 'Cyber Security & Ethical Hacking Basics',
    category: 'IT & Digital Technology',
    duration: '2.5 Months',
    eligibility: '+2 Science/IT or Computing Interest',
    description: 'Learn network defending, vulnerability assessment, online safety, and ethical hacking essentials to protect digital infrastructures against modern threats.',
    badge: 'Security Shield',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Cyber Security Fundamentals & Modern Threat Landscapes',
      'Ethical Hacking Methodologies & Footprinting',
      'Network Security, Firewalls & VPN Architecture',
      'System Vulnerability Scanning & Penetration Basics',
      'Online Enterprise Safety & Data Encryption Standards'
    ]
  },

  // Data & Creative
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics with Power BI, SQL & Python',
    category: 'Data & Creative',
    duration: '3 Months',
    eligibility: 'Graduates / Professionals',
    description: 'Transform raw data into meaningful business insights. Learn Data Analysis with Excel, SQL Database extraction, Python for Data Science, and immersive Power BI dashboards.',
    badge: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Advanced Data Cleaning & Analysis with Excel',
      'SQL Queries & Database Management for Analysts',
      'Python for Data Science (Pandas, NumPy, Matplotlib)',
      'Interactive Dashboard & Report Building in Power BI',
      'Data Storytelling & Real-time Business Analytics'
    ]
  },
  {
    id: 'graphic-design-motion',
    title: 'Graphic Design, Branding & Video Editing',
    category: 'Data & Creative',
    duration: '3 Months',
    eligibility: 'Creative Enthusiasts',
    description: 'Bring creative visions to life using Adobe Photoshop, Illustrator, Video Editing tools, and Motion Graphics. Perfect for branding design and modern advertising.',
    badge: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Raster Magic with Adobe Photoshop (Photo editing, composites)',
      'Vector Graphics with Adobe Illustrator (Logos, Icons, Illustrations)',
      'Brand Identity Development & Typography Theory',
      'Professional Video Editing (Premiere Pro / CapCut PC)',
      'Introduction to Motion Graphics (After Effects)',
      'Canva Pro Design for Rapid Marketing Assets'
    ]
  },

  // Teacher Training Expansion
  {
    id: 'montessori-eccd-advanced',
    title: 'Montessori & ECCD Teacher Training (Smart Class)',
    category: 'Teacher Training',
    duration: '3 Months',
    eligibility: 'SEE / +2 Pass / Educators',
    description: 'Comprehensive Early Childhood Care & Development (ECCD) training blended with modern digital teaching tools and smart classroom management strategies.',
    badge: 'Accredited',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Child Psychology & Early Childhood Milestones',
      'Montessori Philosophy & Didactic Material Guidance',
      'ECCD Curriculum Planning & Inclusive Education',
      'Digital Teaching Tools & Smart Whiteboard Techniques',
      'Classroom Behavior Management & Parent-Teacher Collaboration',
      'Micro-teaching Practice & Practical School Internship'
    ]
  },

  // Hotel & Hospitality
  {
    id: 'barista-hospitality-pro',
    title: 'Professional Barista, Bakery & Culinary Arts',
    category: 'Hotel & Hospitality',
    duration: '1.5 - 3 Months',
    eligibility: 'No Prior Experience Needed',
    description: 'Master espresso extraction, latte art, professional cooking techniques, bakery fundamentals, and front office & customer service standards in our modern labs.',
    badge: 'Global Opportunity',
    image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Barista Foundations: Bean Chemistry, Roasting & Grinding',
      'Espresso Extraction & Advanced Free-pour Latte Art',
      'International Bakery, Pastry & Dessert Fundamentals',
      'Professional Cooking Techniques & Hygiene Standard (HACCP)',
      'Front Office Management, Reservation Systems & Hospitality Courtesy',
      'Café Operations & Cost Inventory Management'
    ]
  },

  // Business & Career
  {
    id: 'business-accounting-entrepreneurship',
    title: 'Business Accounting (Tally, Tax), Sales & Leadership',
    category: 'Business & Career',
    duration: '2.5 Months',
    eligibility: '+2 Commerce / Business Owners & Managers',
    description: 'Essential practical skills for entrepreneurs and corporate managers. Master computerized accounting software, digital business management, high-ticket sales, and leadership.',
    badge: 'Corporate Leader',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Computerized Accounting Software (Tally Prime, Swastik & Excel Billing)',
      'Nepal Vat, PAN, Taxation Concepts & Financial Auditing Preparation',
      'Entrepreneurship Development & Lean Business Plan Creation',
      'B2B & B2C Sales Psychology, Objection Handling & Closing',
      'Executive Leadership Skills & Team Delegation',
      'Small Business Operations & Cash Flow Scaling'
    ]
  },
  {
    id: 'professional-communication-prep',
    title: 'Communication Skills & Career Preparation Program',
    category: 'Business & Career',
    duration: '1.5 Months',
    eligibility: 'Students / Job Seekers / Executives',
    description: 'Transform your confidence. Polish English speaking, public speaking, executive group presentation skills, and complete thorough workplace career preparation.',
    badge: 'Confidence Boost',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    modules: [
      'Spoken English Fluency & Accent Neutralization',
      'Public Speaking, Stage Presence & Voice Modulation',
      'Executive CV Writing & LinkedIn Profile Optimization',
      'Behavioral Mock Interviews (STAR Method Mastery)',
      'Workplace Etiquette, Negotiation & Conflict Resolution'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aayushma Shrestha",
    course: "Fullstack Web & AI Tools",
    position: "Frontend Developer",
    company: "Tech Nep Solutions",
    review: "Euro Training Center Nepal provided me with the future-focused practical skills I needed. Integrating AI productivity tools with React coding made me stand out immediately in job interviews!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ritesh Gurung",
    course: "Professional Barista & Hospitality",
    position: "Head Barista",
    company: "Himalayan Java & Roasters",
    review: "The modern training lab in Samakhusi and hands-on guidance from veteran trainers gave me unmatched confidence. Within two weeks of completing my course, I was hired with an attractive package!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sita Thapa",
    course: "Montessori & AI for Teachers",
    position: "ECCD Coordinator",
    company: "Kathmandu Valley International School",
    review: "Learning how to blend classic Montessori methodologies with smart classroom and AI teaching aids was a revelation. The career counseling and placement support here are second to none.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export const JOB_VACANCIES: JobVacancy[] = [
  {
    id: "job-01",
    title: "Junior React / Frontend Developer",
    company: "CloudTech Nepal Pvt. Ltd.",
    location: "Kathmandu / Hybrid",
    type: "Full-Time",
    salary: "NPR 35,000 - 55,000 / month",
    deadline: "March 15, 2026",
    tags: ["React.js", "Tailwind CSS", "AI Prompting", "Git"]
  },
  {
    id: "job-02",
    title: "Senior Barista & Cafe Shift Supervisor",
    company: "Urban Espresso Lounge",
    location: "Thamel, Kathmandu",
    type: "Full-Time",
    salary: "NPR 28,000 - 40,000 + Incentives",
    deadline: "Open until filled",
    tags: ["Latte Art", "Espresso calibration", "Customer Service"]
  },
  {
    id: "job-03",
    title: "Digital Marketing & Content Specialist (AI Assisted)",
    company: "E-Commerce Group Nepal",
    location: "Lalitpur",
    type: "Full-Time",
    salary: "NPR 30,000 - 45,000 / month",
    deadline: "March 20, 2026",
    tags: ["SEO", "Meta Ads", "ChatGPT / Jasper", "Canva"]
  },
  {
    id: "job-04",
    title: "Montessori & ECCD Class Teacher",
    company: "Little Scholars Pre-School",
    location: "Maharajgunj, Kathmandu",
    type: "Full-Time",
    salary: "NPR 25,000 - 35,000 / month",
    deadline: "March 10, 2026",
    tags: ["ECCD Certified", "Child Psychology", "English Fluency"]
  },
  {
    id: "job-05",
    title: "Data Analyst / Excel & Power BI Associate",
    company: "Summit Financial Consulting",
    location: "Kathmandu",
    type: "Full-Time / Internship",
    salary: "NPR 32,000 - 48,000 / month",
    deadline: "March 25, 2026",
    tags: ["Advanced Excel", "Power BI", "SQL", "Dashboarding"]
  }
];
