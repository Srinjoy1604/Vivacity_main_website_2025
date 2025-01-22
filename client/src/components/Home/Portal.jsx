import React, { useEffect, useRef } from "react";
import ring1 from "../../assets/images/ring1.svg";
import ring2 from "../../assets/images/ring2.svg";
import ring3 from "../../assets/images/ring3.svg";
import ring4 from "../../assets/images/ring4.svg";
import styles from "./Portal.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import MouseAnimation from "../../assets/videos/Mouse.json";

gsap.registerPlugin(ScrollTrigger);

const animatePortal = (
  ring1Ref,
  ring2Ref,
  ring3Ref,
  ring4Ref,
  textRef,
  containerRef,
  onAnimationComplete
) => {
  const rings = [ring1Ref, ring2Ref, ring3Ref, ring4Ref];
  // Enable GPU acceleration for the rings
  rings.forEach((ringRef) => {
    if (ringRef.current) {
      ringRef.current.style.willChange = "transform, opacity";
    }
  });

  // Create a timeline for the animation
  const tl = gsap.timeline({
    defaults: { duration: 1, ease: "none" },
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      anticipatePin: 1,
      fastScrollEnd: true,
      smooth: true,
      onLeave: () => onAnimationComplete(), // Callback for triggering scroll
    },
  });

  // Ring rotation and exit animation
  rings.forEach((ringRef, index) => {
    if (ringRef.current) {
      const rotationAngle =
        index % 2 === 0 ? 360 + index * 90 : -360 + -index * 90; // Adjust rotation angle for each ring
      const exitDistance = 0; // Distance to move out of the screen

      gsap.set(ringRef.current, {
        transformOrigin: "50% 50%",
        rotation: index === 3 ? -30 : 0,
        scale:
          index === 1
            ? 2.7
            : index === 2
            ? 3.3
            : index === 3
            ? 3.8
            : index === 4
            ? 1.5
            : 2.3,
        force3D: true,
      });

      tl.to(
        ringRef.current,
        {
          rotation: rotationAngle, // Rotate
          scale: 5, // Scale up
          duration: 1,
          ease: "power2.inOut",
        },
        0 // Start all at the same time
      ).to(
        ringRef.current,
        {
          // y: -exitDistance, // Move upward out of the screen
          opacity: 0, // Fade out
          ease: "power2.out",
          duration: 1,
        },
        0.5 // Start slightly after the rotation begins
      );
    }
  });

  // Text zoom animation
  if (textRef.current) {
    tl.fromTo(
      textRef.current,
      { scale: 0.6 },
      { scale: 1, ease: "power2.out", duration: 1 },
      0 // Sync with the start of ring animations
    );
  }
};

function Portal({ onAnimationComplete }) {
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const ring3Ref = useRef(null);
  const ring4Ref = useRef(null); // New ring reference
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      animatePortal(
        ring1Ref,
        ring2Ref,
        ring3Ref,
        ring4Ref,
        textRef,
        containerRef,
        onAnimationComplete
      );
    });

    return () => ctx.revert(); // Clean up animations on unmount
  }, [onAnimationComplete]);

  return (
    <div className="relative overflow-hidden">
      <section
        ref={containerRef}
        className={`w-screen h-[100vh] relative overflow-hidden ${styles.PortalMain}`}
      >
        <img
          ref={ring1Ref}
          className="absolute sm:w-[70%] sm:h-[55%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] lg:w-[43%] lg:h-[43%]"
          src={ring1}
          alt="Ring 1"
        />
        <img
          ref={ring2Ref}
          className="absolute sm:w-[85%] sm:h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] lg:w-[62%] lg:h-[62%]"
          src={ring2}
          alt="Ring 2"
        />
        <img
          ref={ring3Ref}
          className="absolute sm:w-[100%] sm:h-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] lg:w-[70%] lg:h-[70%]"
          src={ring3}
          alt="Ring 3"
        />
        <img
          ref={ring4Ref}
          className="hidden 1980:block absolute sm:w-[110%] sm:h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] lg:w-[95%] lg:h-[95%]"
          src={ring4} // Using ring1 for the new ring
          alt="Ring 4"
        />
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center z-[-1] pb-10"
        >
          <div className="w-[100%] text-center h-[90%] flex items-center justify-center align-middle flex-col">
            <div
              className={`relative w-[300px] h-[80px] ${styles.HeadingBar} mx-auto mb-4`}
            >
              <h1 className="w-full h-full text-black text-3xl flex items-center justify-center font-rfabb font-[400] text-[2.9rem] p-[1%] leading-[3rem]">
                Tela Indrae
              </h1>
            </div>
            <p className="lg:max-w-[28rem] mt-1 w-[88%] sm:w-[60%] md:w-[60%] lg:w-[37%] text-white text-[1.625rem] text-center font-vetosans font-light max-[566px]:text-[1rem]">
              Latin for "the Web of Indra,"{" "}
              <span className="text-[#16C2FD]">Tela Indrae</span> draws
              inspiration from Indra's Web, symbolizing unity in diversity and
              infinite interconnection. Like jewels reflecting one another, we
              come together as unique individuals, weaving a vibrant tapestry of
              shared brilliance. Let's celebrate the power of connection at
              Vivacity!
            </p>
            <Lottie
              animationData={MouseAnimation}
              loop
              autoplay
              className="p-[2%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portal;
