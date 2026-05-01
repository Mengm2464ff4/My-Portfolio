import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm"
          >
            ✨ Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vuthy Vutha
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Frontend Developer creating modern and responsive web experiences with React & Tailwind CSS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-purple-500 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/Mengm2464ff4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/vuthy-vutha-8770703bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={24} />
            </motion.a>            
            <div className="flex gap-4 items-center">
            {/* Gmail (reliable) */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=SongMeng66667777@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
               <FaEnvelope size={24} />
            </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <AiOutlineArrowDown className="text-gray-400" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;