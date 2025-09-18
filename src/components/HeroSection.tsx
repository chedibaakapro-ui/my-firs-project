'use client';

import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="container">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Introduction */}
          <p className="mono text-teal text-base md:text-lg mb-6">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-200 mb-4 leading-tight">
            Brittany Chiang.
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-500 mb-8 leading-tight">
            I build things for the web.
          </h2>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
              nejem nhotk fi rasi ama nkhaf la ta3mli 9echraaa
              <a
                href="https://upstatement.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-300 transition-colors duration-300"
              >
                Upstatement
              </a>.
            </p>

            {/* CTA Button */}
            <a
              href="https://www.newline.co/courses/build-a-spotify-connected-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-block"
            >
              3AREDHLI!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;