import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
// images import
import ecommerceImg from '../assets/images/E-CommerceProject.png';
import weatherImg from '../assets/images/Weather-App.png';
import taskManagerImg from '../assets/images/Task-App.png';
import dashboardImg from '../assets/images/Dashboard-UI.png';
import landingPageImg from '../assets/images/Landing-Page.png';

const projects = [
  {
    id: 1,
    title: "E-Commerce UI",
    description: "Modern e-commerce frontend with product listing, shopping cart UI, and responsive design",
    image: ecommerceImg,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://mengm2464ff4.github.io/E-CommerceProject/",
    githubUrl: "https://github.com/Mengm2464ff4/E-CommerceProject"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather application displaying real-time data with 5-day forecast using API",
    image: weatherImg,
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://weather-d91roh5j0-mengsong954-9653s-projects.vercel.app/",
    githubUrl: "https://github.com/Mengm2464ff4/Weather-App"
  },
  {
    id: 3,
    title: "Task Manager UI",
    description: "Task management interface with drag-and-drop UI and clean user experience",
    image: taskManagerImg,
    tech: ["React", "Tailwind CSS"],
    liveUrl: "https://task-manager-gamma-sooty-58.vercel.app/",
    githubUrl: "https://github.com/Mengm2464ff4/Task-Manager"
  },
  {
    id: 4,
    title: "Dashboard UI",
    description: "Admin dashboard interface with charts, tables, and responsive design, built for practice and learning purposes to enhance frontend skills, not a real project with backend integration ",
    image: dashboardImg,
    tech: ["React", "Tailwind CSS",],
    liveUrl: "https://dashboard-ui-five-liard.vercel.app/",
    githubUrl: "https://github.com/Mengm2464ff4/DashboardUI"
  },
  {
    id: 5,
    title: "Landing Page Portfolio",
    description: "A modern landing page for a tech startup, featuring a clean design and smooth animations",
    image: landingPageImg,
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://mengm2464ff4.github.io/My-Landingpage-Portfolio/",
    githubUrl: "https://github.com/Mengm2464ff4/My-Landingpage-Portfolio"
  }
//   {
//   id: 5,
//   title: "Simple REST API (Learning)",
//   description: "Basic backend API for managing tasks using Node.js and MongoDB (learning project)",
//   image: "",
//   tech: ["Node.js", "Express", "MongoDB"],
//   liveUrl: "https://rest-api-example.com",
//   githubUrl: "https://github.com/Mengm2464ff4/Simple-REST-API"
// }
];

const ProjectsPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my best works. Each project is built with passion and attention to detail.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-purple-500 transition-colors duration-300"
                  >
                    <FiExternalLink size={20} className="text-gray-900" />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-purple-500 transition-colors duration-300"
                  >
                    <FiGithub size={20} className="text-gray-900" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link 
            to="/projects" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPreview;