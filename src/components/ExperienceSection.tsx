'use client';

import { useState } from 'react';

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: 'Upstatement',
      title: 'Lead Engineer',
      period: 'May 2018 - Present',
      url: 'https://www.upstatement.com/',
      points: [
        'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
        'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
        'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
        'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
      ]
    },
    {
      company: 'Apple',
      title: 'UI Engineer',
      period: 'July 2017 - December 2017',
      url: 'https://www.apple.com/',
      points: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full song playback in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps'
      ]
    },
    {
      company: 'Starry',
      title: 'Software Engineer',
      period: 'December 2016 - May 2017',
      url: 'https://starry.com/',
      points: [
        "Engineered and maintained major features of Starry's customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
        'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry hardware',
        "Collaborated with designers and product managers to develop new features for Starry's mobile app",
        "Contributed to Starry's design system to ensure consistency across projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <h2 className="numbered-section text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
            Where I've Worked
          </h2>
          <div className="ml-6 h-px bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            <div className="flex md:flex-col border-b-2 md:border-b-0 md:border-l-2 border-slate-700 min-w-max md:min-w-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 text-left transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap ${
                    activeTab === index
                      ? 'text-teal border-teal bg-teal bg-opacity-5'
                      : 'text-slate-400 border-transparent hover:text-teal hover:bg-slate-800 hover:bg-opacity-50'
                  }`}
                >
                  <span className="mono text-sm">{exp.company}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[400px]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`${activeTab === index ? 'block' : 'hidden'} space-y-6`}
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">
                    {exp.title} <span className="text-teal">@</span>
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-teal-300 transition-colors duration-300"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="mono text-sm text-slate-400">{exp.period}</p>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-teal mr-4 mt-1">▹</span>
                      <span className="text-slate-400 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
