import React, { useRef } from 'react';
import DancePage from '../components/Events/DancePage';
import Speaking from '../components/Events/Speaking';
import DramaEvents from '../components/Events/DramaEvents';
import MusicEvents from '../components/Events/MusicEvents';
import PhotographyEvents from '../components/Events/PhotographyEvents';
import ArtEvents from '../components/Events/ArtEvents';
import QuizzingaEvents from '../components/Events/QuizzingaEvents';
import FashionEvents from '../components/Events/FashionEvents';
import Sahyog from '../components/Events/SocialEvents';
import Exciting from '../components/Events/ExcitingEvents';
import IndexEvents from '../components/Events/EventsIndex';

function EventsPage() {
  const danceRef = useRef(null);
  const musicRef = useRef(null);
  const dramaRef = useRef(null);
  const speakingArtsRef = useRef(null);
  const photographyRef = useRef(null);
  const artRef = useRef(null);
  const quizzingaRef = useRef(null);
  const fashionRef = useRef(null);
  const socialRef = useRef(null);
  const manyMoreRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      dance: danceRef,
      music: musicRef,
      drama: dramaRef,
      speakingArts: speakingArtsRef,
      photography: photographyRef,
      art: artRef,
      quizzinga: quizzingaRef,
      fashion: fashionRef,
      social: socialRef,
      manymore: manyMoreRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <IndexEvents scrollToSection={scrollToSection} />
      <div ref={danceRef}><DancePage /></div>
      <div ref={speakingArtsRef}><Speaking /></div>
      <div ref={dramaRef}><DramaEvents /></div>
      <div ref={musicRef}><MusicEvents /></div>
      <div ref={photographyRef}><PhotographyEvents /></div>
      <div ref={artRef}><ArtEvents /></div>
      <div ref={quizzingaRef}><QuizzingaEvents /></div>
      <div ref={fashionRef}><FashionEvents /></div>
      <div ref={socialRef}><Sahyog /></div>
      <div ref={manyMoreRef}><Exciting /></div>
    </div>
  );
}

export default EventsPage;
