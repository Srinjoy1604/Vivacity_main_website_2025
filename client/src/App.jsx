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
import Team from './components/Home/Team';
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/portal' element={<Portal />} />
          <Route path='/events' element={<Events />} />
          <Route path='/legacy' element={<Legacy />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pastartists' element={<PastArtists />} />
          <Route path='/mob' element={<Footer1 />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>

  )
}

export default App
