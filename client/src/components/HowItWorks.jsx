import React from 'react';

const Step = ({ number, title, description }) => (
  <li className="mb-10 ml-6">
    <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/20 rounded-full -left-4 ring-4 ring-background text-primary font-bold">
      {number}
    </span>
    <h3 className="font-semibold text-lg mb-1 text-text">{title}</h3>
    <p className="text-text/80">{description}</p>
  </li>
);

const HowItWorks = () => {
  const steps = [
    {
      title: "Voter Registration",
      description: "Electoral board registers voters with their Ethereum address and state."
    },
    {
      title: "Election Creation",
      description: "State-specific elections are created and candidates are added."
    },
    {
      title: "Voting Process",
      description: "Registered voters cast their votes or delegate to others within their state."
    },
    {
      title: "Result Declaration",
      description: "After the election closes, winners are automatically determined."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-text">How It Works</h2>
        <div className="max-w-3xl mx-auto">
          <ol className="relative border-l border-text/20">
            {steps.map((step, index) => (
              <Step key={index} number={index + 1} {...step} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

