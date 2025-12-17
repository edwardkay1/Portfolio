import React from 'react';
import type { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;

  return (
    <div className="p-6 transition-all duration-300 border border-gray-800 cursor-pointer md:p-8 rounded-xl bg-gray-950 hover:border-teal-400 hover:-translate-y-1 hover:shadow-lg group">
      
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className="flex-shrink-0 p-3 transition-colors duration-300 bg-gray-800 rounded-lg group-hover:bg-teal-400">
          <Icon className="w-6 h-6 text-teal-400 transition-colors duration-300 group-hover:text-black" />
        </div>

        {/* Content */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-white transition-colors duration-300 group-hover:text-teal-400">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
