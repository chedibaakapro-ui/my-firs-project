'use client';

import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: 'HAHAHAHAAHAH',
      description: 'Manager,.',
      tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      github: 'https://github.com/bchiang7/halcyon-site',
      external: 'https://halcyon-theme.netlify.com/',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
      tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
      github: 'https://github.com/bchiang7/spotify-profile',
      external: 'https://spotify-profile.herokuapp.com/',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Build a Spotify Connected App',
      description: 'Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify\'s OAuth flow and fetching API data in a React app.',
      tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
      external: 'https://www.newline.co/courses/build-a-spotify-connected-app',
      image: '/api/placeholder/600/400'
    }
  ];

  const otherProjects = [
    {
      title: 'OTAKOOOO',
      description: 'IV WATCH 655 ANIME!!!',
      tech: ['Algolia', 'WordPress', 'PHP'],
      external: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c'
    },
    {
      title: 'Time to Have More Fun',
      description: 'A single page web app for helping me choose where to travel, built CLAUDES',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/bchiang7/time-to-have-more-fun',
      external: 'https://time-to-have-more-fun.now.sh/'
    },
    {
      title: 'HAHAHAHAHAHAHAHAHA',
      description: 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHt',
      tech: ['Node', 'Express', 'Firebase', 'Vue'],
      external: 'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9'
    },
    {
      title: 'OctoProfile',
      description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      tech: ['Next.js', 'Chart.js', 'GitHub API'],
      github: 'https://github.com/bchiang7/octoprofile',
      external: 'https://octoprofile.now.sh'
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with Vue and Firebase.',
      tech: ['Vue', 'Firebase'],
      github: 'https://github.com/bchiang7/google-keep-vue-firebase',
      external: 'https://keep-vue.netlify.com/'
    },
    {
      title: 'Apple Music Embeddable Web Player Widget',
      description: 'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
      tech: ['MusicKit.js', 'JS', 'SCSS'],
      external: 'https://tools.applemusic.com/en-us'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <h2 className="numbered-section text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
            Some Things I&apos;ve Built
          </h2>
          <div className="ml-6 h-px bg-slate-700 flex-1 max-w-xs"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                <div className="relative group">
                  <div className="bg-teal bg-opacity-10 rounded-lg aspect-[3/2] border border-teal border-opacity-20 flex items-center justify-center group-hover:border-opacity-40 transition-colors duration-300">
                    <span className="text-teal text-4xl">🖥️</span>
                  </div>
                  <div className="absolute inset-0 bg-navy-900 bg-opacity-80 rounded-lg opacity-0 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-left' : 'md:text-right'}`}>
                <p className="mono text-teal text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-200 mb-4 hover:text-teal transition-colors duration-300">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="project-card mb-6">
                  <p className="text-slate-400 leading-relaxed">{project.description}</p>
                </div>

                <ul className={`flex flex-wrap gap-4 mono text-sm text-slate-400 mb-6 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-teal transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-teal transition-colors duration-300"
                    aria-label="External Link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-200 text-center mb-12">
            Other Noteworthy Projects
          </h3>

          <div className="text-center mb-12">
            <a
              href="/archive"
              className="text-teal hover:text-teal-300 mono text-sm"
            >
              view the archive
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="project-card group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-teal text-4xl">📁</div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal transition-colors duration-300"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal transition-colors duration-300"
                        aria-label="External Link"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-slate-200 mb-3 group-hover:text-teal transition-colors duration-300">
                  <a href={project.external} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h4>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-4 mono text-xs text-slate-400">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex}>{tech}</li>
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

export default ProjectsSection;
