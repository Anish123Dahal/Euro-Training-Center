import { useState } from 'react';
import { COURSES, Course } from '../data/mockData';
import { Search, Clock, CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);

  const categories = [
    'All',
    'Premium & AI',
    'IT & Digital Technology',
    'Teacher Training',
    'Hotel & Hospitality',
    'Business & Career',
    'Data & Creative'
  ];

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.modules.some(mod => mod.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-16 min-h-screen bg-[#F7F8F8] bg-grid-pattern">
      {/* Hero & Header - Soft Matte Charcoal Banner */}
      <div className="bg-[#2B2D31] bg-grid-pattern-dark text-white py-12 sm:py-16 mb-12 border-b border-[#3F4147]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#35373C] border border-primary text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="text-white">2026 Future-Ready Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-white mb-4 tracking-tight">
            Explore Our World-Class Training Programs
          </h1>
          <p className="text-neutral-300 text-sm sm:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            From basic computer fundamentals to advanced <span className="text-primary font-bold">Artificial Intelligence</span>, Corporate MS Office, and Global Freelancing. Position yourself as a skilled professional in Nepal and the global job market.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search course by name, skill, or keyword..."
                className="w-full pl-12 pr-10 py-4 rounded-2xl bg-[#35373C] border border-[#3F4147] text-white placeholder-neutral-400 focus:outline-none focus:border-primary text-sm shadow-md transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-heading font-extrabold whitespace-nowrap transition-all shadow-xs ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-[#2B2D31] hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between mb-8 text-xs text-neutral-500 font-semibold">
          <span>Showing <strong className="text-[#2B2D31]">{filteredCourses.length}</strong> programs</span>
          {searchQuery && <span>Search filter: "{searchQuery}"</span>}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white p-12 rounded-3xl border border-neutral-200 text-center space-y-4 max-w-lg mx-auto">
            <h3 className="text-xl font-heading font-extrabold text-[#2B2D31]">No Courses Found</h3>
            <p className="text-xs text-neutral-500">Try adjusting your search criteria or select a different category filter above.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-primary-hover"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B2D31]/80 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-[#2B2D31] text-white font-extrabold text-xs px-3 py-1 rounded-full border border-[#3F4147]">
                      {course.category}
                    </div>
                    {course.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-xs">
                        {course.badge}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-4 text-white text-xs font-extrabold flex items-center gap-1.5 drop-shadow">
                      <Clock className="w-3.5 h-3.5 text-primary-light" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-heading font-extrabold text-[#2B2D31] mb-2 hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block">Eligibility:</span>
                      <span className="text-xs font-semibold text-neutral-700">{course.eligibility}</span>
                    </div>

                    <p className="text-neutral-600 text-xs sm:text-sm mb-6 leading-relaxed line-clamp-3">
                      {course.description}
                    </p>

                    <div className="p-3.5 rounded-2xl bg-[#F7F8F8] border border-neutral-200 space-y-1.5">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2B2D31] block">Key Modules Covered:</span>
                      <ul className="space-y-1 text-xs text-neutral-700">
                        {course.modules.slice(0, 3).map((mod, idx) => (
                          <li key={idx} className="flex items-center gap-2 truncate">
                            <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="truncate font-semibold">{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedCourseModal(course)}
                    className="flex-1 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#2B2D31] font-heading font-bold text-xs text-center border border-neutral-200 transition-colors"
                  >
                    View Syllabus
                  </button>
                  <Link
                    to={`/contact?course=${encodeURIComponent(course.title)}`}
                    className="flex-1 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-heading font-bold text-xs text-center transition-all shadow-sm"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Course Detail Modal */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col border border-neutral-200">
            {/* Modal Header */}
            <div className="p-6 bg-[#2B2D31] text-white flex items-center justify-between border-b border-[#3F4147]">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  {selectedCourseModal.category} • {selectedCourseModal.duration}
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {selectedCourseModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCourseModal(null)}
                className="text-neutral-400 hover:text-white p-2 rounded-xl bg-[#35373C] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow text-sm">
              <div>
                <h4 className="font-heading font-extrabold text-[#2B2D31] text-base mb-2">Program Overview</h4>
                <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm font-medium">
                  {selectedCourseModal.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F7F8F8] border border-neutral-200 text-xs">
                <div>
                  <span className="font-bold text-neutral-400 uppercase block mb-0.5">Duration</span>
                  <span className="font-extrabold text-[#2B2D31]">{selectedCourseModal.duration}</span>
                </div>
                <div>
                  <span className="font-bold text-neutral-400 uppercase block mb-0.5">Eligibility</span>
                  <span className="font-extrabold text-[#2B2D31]">{selectedCourseModal.eligibility}</span>
                </div>
              </div>

              <div>
                <h4 className="font-heading font-extrabold text-[#2B2D31] text-base mb-3">
                  Complete Course Syllabus & Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedCourseModal.modules.map((mod, idx) => (
                    <div key={idx} className="bg-green-50/70 border border-green-200/80 p-3.5 rounded-2xl flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-extrabold flex-shrink-0 mt-0.5 shadow-xs">
                        {idx + 1}
                      </span>
                      <span className="text-xs font-bold text-[#2B2D31] leading-relaxed">
                        {mod}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 bg-[#F7F8F8] border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold text-[#2B2D31]">Ready to transform your career in 2026?</p>
                <p className="text-xs text-neutral-500">New batches starting soon at Samakhusi, Kathmandu.</p>
              </div>

              <div className="flex w-full sm:w-auto gap-3">
                <button
                  onClick={() => setSelectedCourseModal(null)}
                  className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-neutral-300 text-neutral-700 font-bold text-xs hover:bg-neutral-200 transition-colors"
                >
                  Close
                </button>
                <Link
                  to={`/contact?course=${encodeURIComponent(selectedCourseModal.title)}`}
                  onClick={() => setSelectedCourseModal(null)}
                  className="w-1/2 sm:w-auto px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-heading font-extrabold text-xs shadow-sm transition-all text-center"
                >
                  Enroll Online Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Programs;
