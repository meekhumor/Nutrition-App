import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-12 px-4 bg-white/70 dark:bg-gray-800 border-t border-emerald-100 dark:border-emerald-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-['Montserrat',sans-serif] mb-2">
              Live Healthy Live Fit
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-['Lato',sans-serif]">
              Your journey to holistic wellness starts here
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors duration-300"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-emerald-100 dark:border-emerald-900/30 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-300 font-['Lato',sans-serif]">
          © {new Date().getFullYear()} Live Healthy Live Fit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;