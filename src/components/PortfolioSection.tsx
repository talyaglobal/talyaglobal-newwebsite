import React from 'react';

export const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'FinTech Innovations',
      description: 'Revolutionizing digital payments and financial services',
      category: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/portfolio/fintech-innovations'
    },
    {
      id: 2,
      title: 'Green Energy Solutions',
      description: 'Sustainable energy for a better tomorrow',
      category: 'Renewable Energy',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/portfolio/green-energy'
    },
    {
      id: 3,
      title: 'HealthTech Advancements',
      description: 'Transforming healthcare through technology',
      category: 'Healthcare Technology',
      image: 'https://images.unsplash.com/photo-1576091160391-9deec2723348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/portfolio/healthtech'
    },
    {
      id: 4,
      title: 'E-commerce Platform',
      description: 'Next-generation online retail solutions',
      category: 'Retail Technology',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/portfolio/ecommerce-platform'
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Portfolio
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Discover our successful projects and investments
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {item.category}
                  </p>
                  <a href={item.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {item.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href={item.link}
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
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

export default PortfolioSection;
