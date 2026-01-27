import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c1b]/95 backdrop-blur-sm border-b border-[#3f4816]/30">
      <div className="max-w-[87.5rem] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            className="text-[#d9fb06] font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
          >
            {personalInfo.name.split(' ')[0]}<span className="text-[#888680]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[#dfddd6] text-sm font-medium px-4 py-2 rounded-full hover:text-[#d9fb06] hover:bg-[#302f2c] transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden md:inline-flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] font-semibold text-sm px-6 py-3 rounded-full hover:scale-[1.02] hover:opacity-90 transition-all duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#dfddd6] p-2 hover:text-[#d9fb06] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#3f4816]/30">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[#dfddd6] text-base font-medium px-4 py-3 rounded-lg hover:text-[#d9fb06] hover:bg-[#302f2c] transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-4 flex items-center justify-center bg-[#d9fb06] text-[#1a1c1b] font-semibold text-base px-6 py-4 rounded-full hover:opacity-90 transition-all duration-300"
              >
                Let's Talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
