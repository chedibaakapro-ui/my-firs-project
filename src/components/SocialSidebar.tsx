'use client';

import { Github, Instagram, Twitter, Linkedin, Code } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bchiang7', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/bchiang7', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/bchiang7', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bchiang7', label: 'LinkedIn' },
    { icon: Code, href: 'https://codepen.io/bchiang7', label: 'CodePen' },
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
