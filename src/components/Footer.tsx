import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Talya Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
