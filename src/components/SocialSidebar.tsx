'use client';

import { Github, Linkedin, Code } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/chedibaakapro-ui', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chedi-baaka-968178386/', label: 'LinkedIn' },
    
    // Add these when you create Instagram/Twitter accounts:
    // { icon: Instagram, href: 'https://www.instagram.com/your_username', label: 'Instagram' },
    // { icon: Twitter, href: 'https://twitter.com/your_username', label: 'Twitter' },
  ];

  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 z-10">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link p-2"
            aria-label={social.label}
          >
            <Icon size={20} />
          </a>
        );
      })}

      {/* Vertical line */}
      <div className="w-px h-24 bg-slate-600"></div>
    </div>
  );
};

export default SocialSidebar;