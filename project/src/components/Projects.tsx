import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import img1Pic from '../assets/img1.png';
import img2Pic from '../assets/img2.jpg';
import img3Pic from '../assets/img3.jpeg';
import img4Pic from '../assets/img4.png';
import img5Pic from '../assets/img5.png';
import img6Pic from '../assets/img6.png';



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website with cart functionality, user authentication, and payment integration.",
      image: img6Pic,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
      category: "full stack",
      github: "https://github.com/arushisingh967072/Shoping-Website-",
      // live: "https://your-ecommerce-demo.com"
    },
    {
      id: 2,
      title: "College Navigation System",
      description: "A web app offering seamless indoor/outdoor campus navigation with 3D maps using Mapbox and Leaflet.js. Features smart AI search with Fuse.js, live routing.",
      image: img4Pic,
      technologies: ["Mapbox","Leaflet.js","Fuse.js","React","Navigation"],
      category: "full stack",
      github: "https://github.com/arushisingh967072/College-Navigation-System",
      // live: "https://your-task-manager.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A clean weather application that displays current conditions and forecasts. Features responsive design and API integration.",
      image: img2Pic,
      technologies: ["React.js","Weather Map API", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/arushisingh967072/Weather-Trackr",
      live: " https://arushisingh967072.github.io/Weather-Trackr/"
    },
    {
      id: 4, 
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills. Features smooth animations and responsive design.",
      image: img1Pic,
      technologies: ["React.js", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/arushisingh967072/Portfolio",
      live: "https://arushisingh967072.github.io/Portfolio/"
    },
    {
      id: 5,
      title: "Food ordering Website",
      description: "A responsive food ordering website for browsing menus, placing orders, and making secure payments easily.",
      image: img3Pic,
      technologies: ["React.js","TypeScript"],
      category: "frontend",
      github: "https://github.com/arushisingh967072/Food-Ordering-Website",
      live: " https://arushisingh967072.github.io/Food-Ordering-Website/"
    },
    {
      id: 6,
      title: "Spotify Clone",
      description: "Created a web app for streaming music with real-time playback and playlist support.",
      image: img5Pic,
      technologies: ["React.js", "Node.js", "MongoDB", "Spotify API", "Tailwind CSS"],
      category: "full stack",
      github: "https://github.com/arushisingh967072/Spotify-Clone",
      // live: "https://your-blog-platform.com"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'full stack', label: 'Full Stack' },
    { key: 'css', label: 'HTML/CSS' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that demonstrate my skills in web development
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-gray-500 mt-3 mr-2" />
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/arushisingh967072"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;