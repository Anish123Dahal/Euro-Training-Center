import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Award, QrCode } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-[#2B2D31] bg-grid-pattern-dark text-neutral-300 pt-16 pb-12 border-t border-[#3F4147]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-white border border-[#3F4147] rounded-xl flex items-center justify-center shadow-md overflow-hidden">
                <img src={logoImg} alt="Euro Training Center Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-xl leading-none text-white">Euro Training Center</span>
                <span className="text-xs text-primary font-extrabold tracking-wider mt-1">NEPAL | Career Institute</span>
              </div>
            </Link>
            
            <div className="p-3.5 bg-[#35373C] rounded-2xl border border-[#3F4147] inline-block w-full">
              <span className="text-xs font-heading font-bold text-primary block mb-1">
                Skill Development & Career Transformation Institute
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Empowering individuals with practical skills, Artificial Intelligence mastery, and global career opportunities since 2075 B.S. in Samakhusi, Kathmandu.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-neutral-400">
              <Award className="w-4 h-4 text-primary" />
              <span>Accredited Vocational & Professional Institute</span>
            </div>

            <div className="flex space-x-3 pt-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-[#35373C] border border-[#3F4147] flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white font-bold text-xs shadow-sm" title="Facebook">FB</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-[#35373C] border border-[#3F4147] flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white font-bold text-xs shadow-sm" title="Instagram">IG</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-[#35373C] border border-[#3F4147] flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white font-bold text-xs shadow-sm" title="LinkedIn">IN</a>
              <a href="#" className="w-9 h-9 rounded-xl bg-[#35373C] border border-[#3F4147] flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white shadow-sm" title="Website"><Globe className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-5 pb-2 border-b border-[#3F4147]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-neutral-400 hover:text-primary transition-colors">About Our Institute</Link></li>
              <li><Link to="/programs" className="text-neutral-300 hover:text-primary transition-colors font-bold text-white">All Courses (2026 Ready)</Link></li>
              <li><Link to="/quiz" className="text-primary font-extrabold hover:underline">Career Quiz</Link></li>
              <li><Link to="/verify" className="text-neutral-400 hover:text-primary transition-colors flex items-center gap-1.5"><QrCode className="w-3.5 h-3.5 text-primary" /> Certificate & QR Verify</Link></li>
              <li><Link to="/portal" className="text-neutral-400 hover:text-primary transition-colors">Student & Admin Portal</Link></li>
              <li><Link to="/jobs" className="text-neutral-400 hover:text-primary transition-colors">Job Opportunities & CV Upload</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors">Online Admission & Inquiries</Link></li>
            </ul>
          </div>

          {/* Top Programs */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-5 pb-2 border-b border-[#3F4147]">
              Future & AI Skills
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/programs" className="text-primary font-semibold hover:underline">AI for Office & Teachers</Link></li>
              <li><Link to="/programs" className="text-neutral-300 hover:text-primary transition-colors">Basic to Advanced AI</Link></li>
              <li><Link to="/programs" className="text-neutral-400 hover:text-primary transition-colors">Global Freelancing (USD)</Link></li>
              <li><Link to="/programs" className="text-neutral-400 hover:text-primary transition-colors">Web & React Development</Link></li>
              <li><Link to="/programs" className="text-neutral-400 hover:text-primary transition-colors">Digital Marketing 360</Link></li>
              <li><Link to="/programs" className="text-neutral-400 hover:text-primary transition-colors">Barista & Hospitality Pro</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-bold text-base mb-5 pb-2 border-b border-[#3F4147]">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="p-1.5 rounded bg-[#35373C] text-primary mt-0.5 flex-shrink-0 border border-[#3F4147]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-neutral-300">Samakhusi, Kathmandu, Nepal (Near Chowk)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#35373C] text-primary flex-shrink-0 border border-[#3F4147]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col font-mono text-neutral-300">
                  <a href="tel:+9779768808890" className="hover:text-primary">+977-9768808890</a>
                  <a href="tel:014975711" className="hover:text-primary text-xs text-neutral-400">01-4975711</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#35373C] text-primary flex-shrink-0 border border-[#3F4147]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:eurotraining2075@gmail.com" className="text-neutral-300 hover:text-primary transition-colors text-xs break-all font-mono">
                  eurotraining2075@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="w-full block text-center bg-primary/20 hover:bg-primary border border-primary/50 hover:border-primary text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Inquire or Visit Institute
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3F4147] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>
            &copy; 2075–{new Date().getFullYear()} Euro Training Center Nepal. All rights reserved. Designed for Career Transformation.
          </p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/verify" className="hover:text-white transition-colors font-bold text-primary">Certificate Verification</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
