import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const courseParam = searchParams.get('course');
    const queryParam = searchParams.get('q');
    
    if (courseParam) {
      setSelectedCourse(courseParam);
    }
    if (queryParam) {
      setMessage(`Inquiry regarding: ${queryParam}`);
    }
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern overflow-x-hidden">
      {/* Header Banner - Soft Charcoal */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-10 md:py-12 sm:py-16 mb-10 md:mb-16 border-b border-[#3F4147] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="bg-[#35373C] text-primary border border-primary/50 px-3 md:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest inline-block mb-3 md:mb-4 max-w-full">
            Admissions & Student Support
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-heading font-extrabold text-white mb-3 md:mb-4 tracking-tight leading-tight">
            Contact Euro Training Center Nepal
          </h1>
          <p className="text-neutral-300 text-sm md:text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about 2026 course syllabus, fees, class timings, or career placement? Visit our institute in Samakhusi or drop us a message below.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: Location Info & Contacts */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="bg-white p-5 md:p-8 rounded-2xl md:rounded-3xl border border-neutral-200 shadow-sm space-y-5 md:space-y-6">
              <h2 className="text-lg md:text-xl font-heading font-extrabold text-[#2B2D31] border-b border-neutral-100 pb-2 md:pb-3">
                Institute Headquarters
              </h2>

              <ul className="space-y-4 md:space-y-6 text-sm">
                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-100">
                    <MapPin className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#2B2D31] text-sm mb-1">Visit Us In Person</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Samakhusi, Kathmandu, Nepal <br />
                      <span className="text-neutral-500 font-medium">(Near Samakhusi Chowk / Main Highway Entrance)</span>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-100">
                    <Phone className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#2B2D31] text-sm mb-1">Direct Call Helplines</h3>
                    <div className="flex flex-col text-xs font-mono">
                      <a href="tel:+9779768808890" className="text-primary font-bold hover:underline break-all">+977-9768808890</a>
                      <a href="tel:014975711" className="text-neutral-600 hover:underline mt-0.5">01-4975711 (Landline)</a>
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-100">
                    <Mail className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading font-bold text-[#2B2D31] text-sm mb-1">Email Correspondence</h3>
                    <a href="mailto:eurotraining2075@gmail.com" className="text-xs text-primary font-mono hover:underline break-all font-bold block">
                      eurotraining2075@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-green-50 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-100">
                    <Clock className="w-4.5 h-4.5 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-[#2B2D31] text-sm mb-1">Institute Office Hours</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      Sunday – Friday: 6:30 AM – 6:30 PM <br />
                      Saturday: 7:00 AM – 1:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              {/* Direct WhatsApp Callout */}
              <div className="p-3 md:p-4 bg-green-50 rounded-xl md:rounded-2xl border border-green-200 text-xs space-y-2">
                <span className="font-extrabold text-primary flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4" /> Quick WhatsApp Support
                </span>
                <p className="text-neutral-600 font-medium leading-relaxed">
                  Chat directly with our admissions officer on WhatsApp for syllabus PDFs and fee structures.
                </p>
                <a
                  href="https://wa.me/9779768808890?text=Hello%20Euro%20Training%20Center,%20I%20want%20to%20know%20more%20about%202026%20course%20admission."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto text-center bg-primary text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xs hover:bg-primary-hover transition-colors active:scale-[0.98] sm:active:scale-100"
                >
                  Start WhatsApp Chat
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Online Form */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white p-5 sm:p-6 sm:p-8 sm:p-10 rounded-2xl md:rounded-3xl border border-neutral-200 shadow-xl">
              <h2 className="text-xl md:text-2xl font-heading font-extrabold text-[#2B2D31] mb-2 leading-tight">
                Send Inquiry or Enroll Online
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mb-6 md:mb-8 font-medium leading-relaxed">
                Fill in your details and select your desired training program. We will reach out with fees, syllabus brochure, and class shift options.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 md:p-8 rounded-xl md:rounded-2xl text-center space-y-4">
                  <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto" />
                  <h3 className="text-lg md:text-xl font-heading font-extrabold text-[#2B2D31]">Thank You, {fullName}!</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto font-medium">
                    Your inquiry regarding <strong className="text-primary font-bold">{selectedCourse || "Euro Training Courses"}</strong> has been submitted. An academic advisor will contact your phone (<strong className="break-all">{phone}</strong>) shortly.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFullName(''); setPhone(''); setEmail(''); setMessage(''); }}
                    className="text-xs font-extrabold text-primary hover:underline"
                  >
                    Submit another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs font-extrabold text-neutral-700 mb-1.5 md:mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all font-medium text-[#2B2D31]"
                        placeholder="e.g. Aayushma Shrestha"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-neutral-700 mb-1.5 md:mb-2">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all font-medium text-[#2B2D31]"
                        placeholder="+977-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs font-extrabold text-neutral-700 mb-1.5 md:mb-2">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all font-medium text-[#2B2D31]"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-neutral-700 mb-1.5 md:mb-2">Select Program of Interest</label>
                      <select
                        value={selectedCourse}
                        onChange={(e) => setSelectedCourse(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all font-semibold text-[#2B2D31]"
                      >
                        <option value="">-- Choose a Program --</option>
                        <option value="Basic to Advanced AI (Artificial Intelligence)">Basic to Advanced AI (Artificial Intelligence)</option>
                        <option value="AI for Office Professionals">AI for Office Professionals</option>
                        <option value="AI for Teachers & Educators">AI for Teachers & Educators</option>
                        <option value="Global Freelancing & Online Earning (USD)">Global Freelancing & Online Earning (USD)</option>
                        <option value="Job Guarantee & Placement Bootcamp">Job Guarantee & Placement Bootcamp</option>
                        <option value="Web & Software Development (React/Python)">Web & Software Development</option>
                        <option value="Microsoft Office & Corporate Productivity">Microsoft Office & Corporate Productivity</option>
                        <option value="Digital Marketing & Social Media Pro">Digital Marketing & Social Media Pro</option>
                        <option value="Montessori & ECCD Smart Class Training">Montessori & ECCD Smart Class Training</option>
                        <option value="Professional Barista & Hospitality Pro">Professional Barista & Hospitality Pro</option>
                        <option value="Business Accounting (Tally & Tax) & Sales">Business Accounting & Sales Leadership</option>
                        <option value="Communication Skills & Career Preparation">Communication Skills & Career Prep</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-neutral-700 mb-1.5 md:mb-2">Message or Special Requirements</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-neutral-200 text-sm focus:bg-white focus:border-primary focus:outline-none transition-all font-medium text-[#2B2D31]"
                      placeholder="Mention preferred class shifts (Morning / Day / Evening), questions about course duration, fees, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 md:px-9 py-3.5 md:py-4 bg-primary hover:bg-primary-hover text-white font-heading font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.98] sm:active:scale-100"
                  >
                    <span>Send Online Inquiry / Application</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
