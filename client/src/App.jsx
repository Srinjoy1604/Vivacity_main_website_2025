import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer1 from './components/Mobile_footer';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NormalRegistration from './pages/NormalRegistration';
import EventsPage from './pages/EventsPage';
import OurTeams from './pages/OurTeams';
function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/NormalRegistration" element={<NormalRegistration />} />
          <Route path="/OurTeam" element={<OurTeams />} />
        </Routes>
        {/* Mobile footer */}
        <div className="block sm:hidden">
          <Footer1 />
        </div>
        {/* Desktop footer visible on screens larger than mobile */}
        <div className="hidden sm:block">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App
