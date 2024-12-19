import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Code2 className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fullstack Development</h3>
            <p className="text-gray-600">
              Crafting beautiful and responsive user interfaces using modern web technologies and build scalable APIS.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Globe className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
              Building robust and scalable server-side applications and APIs.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Palette className="w-12 h-12 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">
              Creating intuitive and engaging user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}