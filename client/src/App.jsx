import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer1 from './components/Mobile_footer';
import Footer from './components/Footer';
import Home from './pages/Home';
import NormalRegistration from './pages/NormalRegistration';
import EventsPage from './pages/EventsPage';
import OurTeams from './pages/OurTeams';
import StartLoader from '../src/assets/videos/StartLoader.gif'; // Replace with the actual path
import Preloader from '../src/assets/videos/PreLoader.gif'; // Replace with the actual path
import Sponsors from './pages/Sponsors';
import Page404 from './pages/404';
import MobileStartLoader from './assets/videos/MobileStartLoader.gif';
function AppContent() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Durations for the loaders
  const startLoaderDuration = 6000; // 4 seconds for StartLoader
  const preloaderDuration = 4100; // ~4.1 seconds for Preloader

  // Initialize `sessionStorage` count
  useEffect(() => {
    const count = sessionStorage.getItem('loadCount') || 0;
    if (parseInt(count, 10) === 0) {
      // First load
      setIsFirstLoad(true);
      sessionStorage.setItem('loadCount', 1); // Increment the count to 1
    }
  }, []);

  // Handle the first load (StartLoader)
  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setIsFirstLoad(false); // Hide StartLoader after 4 seconds
        sessionStorage.setItem('loadCount', 2); // Increment the count to 2
      }, startLoaderDuration);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  // Handle page transitions (Preloader)
  useEffect(() => {
    const count = sessionStorage.getItem('loadCount');
    if (parseInt(count, 10) >= 2) {
      // Show Preloader only after the first load is complete
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), preloaderDuration);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Only show StartLoader for the first load
  if (isFirstLoad) {
    return (
      <div className="loader-container">
        <img src={StartLoader} alt="Start Loading..." className="loader lg:block hidden" />
        <img src={MobileStartLoader} alt="Loading..." className="loaderMob lg:hidden block" style={{
          height:"100%",
          width:"100%"
        }} />
      </div>
    );
  }

  // Show Preloader on subsequent page transitions
  if (isLoading) {
    return (
      <div className="loader-container full-screen">
        <img src={Preloader} alt="Loading..." className="loader" />
        
      </div>
    );
  }

  return (
    <div>
      {location.pathname === '/' ? <div className='hidden'></div>:<Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/NormalRegistration" element={<NormalRegistration />} />
        <Route path="/OurTeam" element={<OurTeams />} />
        <Route path="/Sponsors" element={<Sponsors />} />
        <Route path="/Netra" element={<Sponsors />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* Mobile footer */}
      <div className="block sm:hidden">
        <Footer1 />
      </div>
      {/* Desktop footer */}
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


