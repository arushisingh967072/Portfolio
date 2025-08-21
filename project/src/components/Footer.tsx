import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Arushi Singh</h3>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Web Developer passionate about creating beautiful, functional, and user-friendly websites and applications.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 mb-6">
                <p className="text-gray-400">arushisingh20dec@gmail.com</p>
                <p className="text-gray-400">(+91) 9555318741</p>
                <p className="text-gray-400">Ghaziabad, U.P</p>
              </div>
              
              <div className="flex space-x-4">
                <a
                  href="https://github.com/arushisingh967072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/arushi-singh-77a118352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:arushisingh20dec@gmail.com"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>© {currentYear} Arushi Singh. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and endless creativity.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;