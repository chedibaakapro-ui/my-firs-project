'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', number: '01' },
    { name: 'Experience', href: '#experience', number: '02' },
    { name: 'Work', href: '#work', number: '03' },
    { name: 'Contact', href: '#contact', number: '04' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 transition-all duration-300',
        isScrolled ? 'bg-navy-900 bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-12 h-12 border-2 border-teal rounded transform rotate-45 flex items-center justify-center group-hover:border-teal-300 transition-colors duration-300">
            <span className="text-teal text-xl font-bold transform -rotate-45 mono">C</span>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link group"
            >
              <span className="text-teal">{item.number}.</span>{' '}
              <span className="group-hover:text-teal transition-colors duration-300">
                {item.name}
              </span>
            </Link>
          ))}

          {/* Fixed Hire Me Button - Now links to Google Calendar */}
          <a
            href="https://calendar.app.google/CLSLRgvkLvPJnjc48"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline ml-4"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 group">
          <span className="w-6 h-0.5 bg-teal transform transition-all duration-300 group-hover:bg-teal-300"></span>
          <span className="w-6 h-0.5 bg-teal transform transition-all duration-300 group-hover:bg-teal-300"></span>
          <span className="w-6 h-0.5 bg-teal transform transition-all duration-300 group-hover:bg-teal-300"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;