import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingAssistant from './components/FloatingAssistant';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Jobs from './pages/Jobs';
import Contact from './pages/Contact';
import AssessmentQuiz from './pages/AssessmentQuiz';
import CertificateVerify from './pages/CertificateVerify';
import DashboardPortal from './pages/DashboardPortal';
import AdminDashboard from './pages/AdminDashboard';

function AppShell() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-grid-pattern bg-white text-[#2B2D31]">
      <Navbar />
      <main className="flex-grow pt-16 sm:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/quiz" element={<AssessmentQuiz />} />
          <Route path="/verify" element={<CertificateVerify />} />
          <Route path="/portal" element={<DashboardPortal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FloatingAssistant />
      <Footer />
    </div>
  );
}

function App() {
  return <AppShell />;
}

export default App;
