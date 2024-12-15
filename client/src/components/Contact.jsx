import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-text">Get Involved</h2>
        <p className="mb-8 text-xl max-w-2xl mx-auto text-text/80">Interested in implementing this system for your state? We're here to help you bring transparent and secure voting to your constituents.</p>
        <a
          href="mailto:contact@nigeriadvoting.com"
          className="bg-primary text-background px-8 py-3 rounded-full font-bold hover:bg-secondary transition duration-300 inline-block"
        >
          Contact Us
        </a>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50"></div>
    </section>
  );
};

export default Contact;

