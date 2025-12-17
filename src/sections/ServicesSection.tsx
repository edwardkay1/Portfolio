import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import whatImage from '../assets/whatImage.jpg'; 

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

          {/* Left Column */}
          <div className="h-full md:sticky md:top-20">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              What I Do
            </h2>
            <p className="max-w-md mb-8 text-lg text-gray-400">
              I help businesses build modern, responsive websites that look great and work flawlessly.
            </p>

            {/* Image Block */}
            <div className="w-full mt-8 overflow-hidden border border-gray-800 rounded-xl bg-gray-950">
              <img
                src={whatImage}
                alt="Web development and design process"
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
