import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/Home/About';
import Portal from './components/Home/Portal';
import Events from './components/Home/Events';
import Legacy from './components/Home/Legacy';
import PastArtists from './components/Home/PastArtists';
import Footer1 from './components/Mobile_footer';
import Footer from './components/Footer';
import Hero from './components/Home/Hero';
import Navbar from './components/Navbar';
import Mascot from './components/Home/Mascot';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/hero' element={<Hero/>} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/portal' element={<Portal />} />
          <Route path='/events' element={<Events />} />
          <Route path='/legacy' element={<Legacy />} />
          <Route path='/mascot' element={<Mascot/>} />
          <Route path='/pastartists' element={<PastArtists />} />
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

  )
}

export default App
