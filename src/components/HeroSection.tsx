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
            Hi, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-200 mb-4 leading-tight">
            Chedi Baaka.
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-500 mb-8 leading-tight">
            I turn code into revenue.
          </h2>

          {/* Description */}
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
              You're tired of developers who deliver pretty websites that don't convert. 
              I build <span className="text-teal">conversion-focused web applications</span> that 
              actually grow your business—not just your browser tab count. From React SPAs 
              to full-stack solutions that turn visitors into customers.
            </p>

            {/* CTA Button */}
            <a
              href="#contact"
              className="btn-outline inline-block"
            >
              Let's Build Something That Sells
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;