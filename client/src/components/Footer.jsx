import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background text-text/60 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Nigeria DVoting. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

