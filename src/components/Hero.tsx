import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Hi, I'm <span className="text-blue-400">Edwin Yordan Laksono</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Full Stack Developer | Problem Solver
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/edwinjordan" className="transform hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/edwin-yordan-laksono" className="transform hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:edwinlaksono12@gmail.com" className="transform hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            View My Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </div>
  );
}