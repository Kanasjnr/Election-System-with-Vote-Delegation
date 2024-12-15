import React from 'react';
import { Shield, Users, UserCheck } from 'react-feather';

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-background/50 backdrop-blur-md rounded-lg border border-text/10 transition duration-300 hover:border-primary/50">
    <div className="bg-primary/20 p-3 rounded-full mb-4">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-text">{title}</h3>
    <p className="text-text/80">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Voting",
      description: "Blockchain-based voting ensures tamper-proof and verifiable results."
    },
    {
      icon: Users,
      title: "State-Specific Elections",
      description: "Manage elections for each Nigerian state independently."
    },
    {
      icon: UserCheck,
      title: "Vote Delegation",
      description: "Securely delegate your vote to a trusted representative."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-text">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

