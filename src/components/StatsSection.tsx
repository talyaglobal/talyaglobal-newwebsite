import React from 'react';

const StatsSection = () => {
  const stats = [
    { name: 'Projects Completed', value: '1000+' },
    { name: 'Happy Clients', value: '500+' },
    { name: 'Team Members', value: '50+' },
    { name: 'Countries Served', value: '20+' },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="px-4 py-5 bg-gray-50 rounded-lg overflow-hidden">
              <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
