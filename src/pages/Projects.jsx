import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
// image imports
import projectImg1 from '../assets/images/E-CommerceProject.png';
import projectImg2 from '../assets/images/Weather-App.png';
import projectImg3 from '../assets/images/Task-App.png';


const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website UI",
    category: "frontend",
    description:
      "Simple e-commerce website UI with product listing and cart design.",
    longDescription:
      "A frontend e-commerce project built with React. It includes product display, add to cart UI, and responsive design for practice.",
    image: projectImg1,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://mengm2464ff4.github.io/E-CommerceProject/",
    githubUrl: "https://github.com/Mengm2464ff4/E-CommerceProject",
    features: [
      "Product listing UI",
      "Add to cart design",
      "Responsive layout",
      "Clean UI design",
    ],
  },
  {
    id: 2,
    title: "Weather App",
    category: "frontend",
    description:
      "Weather app showing real-time weather information using API.",
    longDescription:
      "A simple weather application built with React using a weather API to display temperature and conditions.",
    image: projectImg2,
    tech: ["React", "API", "Tailwind CSS", "Fetch API"],
    liveUrl: "https://weather-d91roh5j0-mengsong954-9653s-projects.vercel.app/",
    githubUrl: "https://github.com/Mengm2464ff4/Weather-App",
    features: [
      "Search city weather",
      "Display temperature",
      "Weather status UI",
      "Responsive design",
    ],
  },
  {
    id: 3,
    title: "Task Manager UI",
    category: "frontend",
    description:
      "Simple task manager UI for adding and managing tasks.",
    longDescription:
      "A frontend task manager project built with React to practice state management and UI design.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS", "Local Storage"],
    liveUrl: "https://task-manager-gamma-sooty-58.vercel.app/",
    githubUrl: "https://github.com/Mengm2464ff4/Task-Manager",
    features: [
      "Add tasks UI",
      "Delete tasks UI",
      "Simple state handling",
      "Responsive design",
    ],
  },
];

const categories = ["all", "frontend", "backend", "fullstack"];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-white/10 flex justify-between items-center">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition">
            <FiX size={24} />
          </button>
        </div>
        <div className="p-6">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <p className="text-gray-300 mb-6">{project.longDescription}</p>
          <h3 className="text-lg font-semibold mb-3">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-semibold mb-3">Technologies</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(tech => (
              <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:shadow-lg transition">
              Live Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-6 py-2 border border-purple-500 rounded-lg hover:bg-purple-500/10 transition">
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => 
    selectedCategory === "all" ? true : project.category === selectedCategory
  );

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my best works. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;