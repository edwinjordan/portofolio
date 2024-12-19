import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Backend Pos Cashier Application",
    description: "A Backend Pos Cashier solution with Golang",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/edwinjordan/go-cashier",
    demo: "https://demo.com"
  },
  {
    title: "POS Management App",
    description: "A POS management app built with Angular",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/edwinjordan/posapps-angular",
    demo: "https://demo.com"
  },
  {
    title: "Cashier Management App",
    description: "A Fullstack Apps solution with ionic and codeigniter",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/edwinjordan/cashierapp-ionic",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-700 hover:text-blue-500">
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                 {/* <a href={project.demo} className="flex items-center text-gray-700 hover:text-blue-500">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}