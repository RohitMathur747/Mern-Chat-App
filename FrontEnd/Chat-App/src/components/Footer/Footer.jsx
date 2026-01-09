import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; 2026 Company Name. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="https://www.company.com"
              className="hover:text-blue-400 transition-colors duration-200 text-sm"
            >
              www.company.com
            </a>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out transform"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out transform"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out transform"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-blue-400 hover:scale-110 transition-all duration-300 ease-in-out transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
