'use client';

import { Github, Instagram, Twitter, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/chedibaaka', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/chedibaaka', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/chedibaaka', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/chedibaaka', label: 'LinkedIn' },
    { icon: Code, href: 'https://codepen.io/chedibaaka', label: 'CodePen' },
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
          <p className="text-slate-400 mono text-sm">
            Built by Chedi Baaka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;