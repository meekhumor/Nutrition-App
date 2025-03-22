import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full bg-green-50 px-4 py-4 flex justify-between items-center">
      <div>
        <img src="/api/placeholder/40/40" alt="CqMyOE Logo" className="h-10" />
      </div>
      
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <a href="#" className="hover:text-green-700">Introduction</a>
        <a href="#" className="hover:text-green-700">Foundation</a>
        <a href="#" className="hover:text-green-700">Continuation</a>
        <a href="#" className="hover:text-green-700">Recipes</a>
        <a href="#" className="hover:text-green-700">Blogs</a>
        <a href="#" className="hover:text-green-700">Resources</a>
        <a href="#" className="hover:text-green-700">Contact Us</a>
      </nav>
      
      <div className="flex space-x-4 text-gray-600">
        <a href="#" className="hover:text-green-700">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-green-700">
          <Instagram size={20} />
        </a>
        <a href="#" className="hover:text-green-700">
          <Youtube size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;