'use client';

import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: 'Revenue Analytics Dashboard',
      description: 'A comprehensive analytics platform that helped a SaaS startup identify their highest-value customer segments. Built with Next.js and D3.js, it processes millions of data points in real-time. Result: 34% increase in customer lifetime value through targeted retention strategies.',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL', 'Stripe API'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'E-commerce Conversion Optimizer',
      description: 'Complete checkout flow redesign and optimization for an online retailer. Implemented smart form validation, progress indicators, and abandoned cart recovery. Features A/B testing framework and heat-map integration for continuous improvement.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'SendGrid'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro',
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Lead Generation Automation',
      description: 'Intelligent lead scoring and nurturing platform that qualifies prospects automatically. Integrates with HubSpot, processes form submissions, and triggers personalized email sequences. Increased qualified leads by 200% while reducing manual work by 75%.',
      tech: ['React', 'Express', 'HubSpot API', 'AWS Lambda', 'Twilio'],
      external: 'https://chedibaaka.pro',
      image: '/api/placeholder/600/400'
    }
  ];

  const otherProjects = [
    {
      title: 'SaaS Customer Portal',
      description: 'Self-service customer dashboard that reduced support tickets by 60%. Features billing management, usage analytics, and knowledge base integration.',
      tech: ['Next.js', 'Prisma', 'Stripe', 'Intercom API'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro'
    },
    {
      title: 'Real Estate CRM',
      description: 'Custom CRM for property management company handling 500+ properties. Automated tenant screening, lease management, and maintenance requests.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro'
    },
    {
      title: 'Restaurant Ordering System',
      description: 'Complete online ordering platform with real-time kitchen display, inventory management, and customer loyalty program integration.',
      tech: ['Next.js', 'Socket.io', 'Stripe', 'Twilio'],
      external: 'https://chedibaaka.pro'
    },
    {
      title: 'Healthcare Appointment Scheduler',
      description: 'HIPAA-compliant booking system with automated reminders, telehealth integration, and patient portal. Reduced no-shows by 45%.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Zoom API'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro'
    },
    {
      title: 'Inventory Management Suite',
      description: 'Multi-warehouse inventory system with predictive restocking, barcode scanning, and supplier integration for manufacturing company.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'QuickBooks API'],
      github: 'https://github.com/chedibaaka',
      external: 'https://chedibaaka.pro'
    },
    {
      title: 'Content Management Platform',
      description: 'Headless CMS with drag-and-drop page builder, SEO optimization tools, and multi-site management for digital agencies.',
      tech: ['React', 'GraphQL', 'MongoDB', 'AWS CDN'],
      external: 'https://chedibaaka.pro'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <h2 className="numbered-section text-2xl md:text-3xl font-bold text-slate-200 whitespace-nowrap">
            Solutions That Drive Growth
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
            More Business Solutions
          </h3>

          <div className="text-center mb-12">
            <a
              href="https://github.com/chedibaaka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-300 mono text-sm"
            >
              view more on GitHub
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