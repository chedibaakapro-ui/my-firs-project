'use client';

import { Github, Instagram, Twitter, Linkedin, Code, Star, GitFork } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/bchiang7', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/bchiang7', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/bchiang7', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/bchiang7', label: 'LinkedIn' },
    { icon: Code, href: 'https://codepen.io/bchiang7', label: 'CodePen' },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24">
      <div className="container">
        {/* Social Links for Mobile */}
        <div className="flex justify-center gap-6 mb-8 lg:hidden">
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
        </div>

        {/* Attribution */}
        <div className="text-center">
          <a
            href="https://github.com/bchiang7/v4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-teal transition-colors duration-300 mono text-sm"
          >
            <span>Designed & Built by Brittany Chiang</span>
            <div className="flex items-center gap-1">
              <Star size={14} />
              <span>8,063</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork size={14} />
              <span>4,145</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;