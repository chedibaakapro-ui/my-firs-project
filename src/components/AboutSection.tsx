'use client';

import { useEffect, useState } from 'react';

const AboutSection = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Eleventy',
    'Node.js',
    'WordPress'
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <h2 className="numbered-section text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
            About Me
          </h2>
          <div className="ml-6 h-px bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-400 leading-relaxed">
              Hello! My name is Brittany and I enjoy creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog button taught
              me a lot about HTML & CSS!
            </p>

            <p className="text-slate-400 leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at{' '}
              <a href="https://us.mullenlowe.com/" className="text-teal hover:text-teal-300 transition-colors duration-300">
                an advertising agency
              </a>, {' '}
              <a href="https://starry.com/" className="text-teal hover:text-teal-300 transition-colors duration-300">
                a start-up
              </a>, {' '}
              <a href="https://www.apple.com/" className="text-teal hover:text-teal-300 transition-colors duration-300">
                a huge corporation
              </a>, and {' '}
              <a href="https://scout.camd.northeastern.edu/" className="text-teal hover:text-teal-300 transition-colors duration-300">
                a student-led design studio
              </a>. My main focus these days is building accessible,
              inclusive products and digital experiences at{' '}
              <a href="https://upstatement.com/" className="text-teal hover:text-teal-300 transition-colors duration-300">
                Upstatement
              </a> for a variety of clients.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I also recently{' '}
              <a href="https://www.newline.co/courses/build-a-spotify-connected-app" className="text-teal hover:text-teal-300 transition-colors duration-300">
                launched a course
              </a> that covers everything you need to build a web app with the
              Spotify API using Node & React.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Technologies List */}
            <div className="grid grid-cols-2 gap-2 max-w-md">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-teal mr-3">▹</span>
                  <span className="text-slate-400 mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Headshot */}
          <div className="md:col-span-1">
            <div className="relative group max-w-80 mx-auto">
              {/* Image Container */}
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square bg-teal bg-opacity-20 rounded-lg border-2 border-teal flex items-center justify-center">
                  <span className="text-teal text-6xl">👤</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-teal bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Border effect */}
              <div className="absolute top-4 left-4 w-full h-full border-2 border-teal rounded-lg -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;