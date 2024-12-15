import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="bg-background text-text py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Secure and Transparent Voting for Nigeria
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Empowering democracy through blockchain technology. Experience the future of elections with our decentralized voting system.
        </p>
        <Link
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-primary text-background px-8 py-3 rounded-full font-bold hover:bg-secondary transition duration-300 cursor-pointer inline-block"
        >
          Learn More
        </Link>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50"></div>
    </section>
  );
};

export default Hero;

