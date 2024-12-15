import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Features', 'How It Works', 'Contact'];

  return (
    <header className="bg-background/80 backdrop-blur-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Nigeria DVoting</h1>
          <button
            className="lg:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-background lg:bg-transparent`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    to={item.toLowerCase().replace(/\s+/g, '-')}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-text hover:text-primary cursor-pointer transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

