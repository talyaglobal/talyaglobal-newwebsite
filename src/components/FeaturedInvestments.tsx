import React from 'react';

export const FeaturedInvestments = () => {
  const investments = [
    {
      id: 1,
      name: 'Tech Startup Inc.',
      description: 'Revolutionary AI platform for enterprise solutions',
      category: 'Technology',
      amount: '$5M',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 2,
      name: 'Green Energy Co.',
      description: 'Sustainable energy solutions for smart cities',
      category: 'Clean Energy',
      amount: '$8.2M',
      year: 2023,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      id: 3,
      name: 'HealthTech Solutions',
      description: 'AI-powered healthcare diagnostics platform',
      category: 'Healthcare',
      amount: '$12M',
      year: 2024,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Investments
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our portfolio of innovative companies and transformative technologies
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {investments.map((investment) => (
            <div key={investment.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={investment.image}
                  alt={investment.name}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {investment.category}
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {investment.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {investment.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Investment: {investment.amount}
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={`${investment.year}-01-01`}>
                          {investment.year}
                        </time>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedInvestments;
