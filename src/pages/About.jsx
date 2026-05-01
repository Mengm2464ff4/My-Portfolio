import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaCode, FaCoffee } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaCode, value: "10+", label: "Frontend Projects Built" },
    { icon: FaUsers, value: "Self", label: "Learning Through Practice" },
    { icon: FaAward, value: "0+", label: "Professional Experience (Internship Ready)" },
    { icon: FaCoffee, value: "∞", label: "Cups of Coffee & Learning" },
];

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
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get to know me better and learn about my journey in web development
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Who Am I?</h2>
          <div className="space-y-4 text-gray-300">
           <p>  I'm a passionate frontend developer with experience in building web applications
                using React and modern JavaScript.
           </p>
            <p>  My journey in web development started when I built my first website in college,
                and since then, I’ve been improving my skills step by step.
            </p>

            <p>  I focus on writing clean and simple code and learning new technologies to improve
                 my development skills.
            </p>
          </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-6 text-center hover:transform hover:scale-105 transition duration-300">
                    <IconComponent className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-center mb-8">Work Experience</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
           {[
             {
              year: "2024 - Present",
              title: "Frontend Developer (Learning)",
              company: "Self Learning / E-Teach Center",
              description:
                  "Currently learning frontend development using React, HTML, CSS, and JavaScript. Building small projects like portfolio websites and UI components to improve skills.",
             },
             {
               year: "2023 - 2024",
               title: "Frontend Practice Projects",
               company: "Self Learning",
               description:
                  "Practiced frontend development by building simple websites, landing pages, and components to strengthen understanding of web development.",
            },
            {
              year: "2022 - 2023",
              title: "Web Development Basics",
              company: "Online Learning",
              description:
                  "Learned HTML, CSS, and JavaScript fundamentals and created beginner-level projects.",
            },
          ].map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-purple-500">
              <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-0" />

              <div className="text-sm text-purple-400 mb-1">{exp.year}</div>
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <div className="text-gray-400 mb-2">{exp.company}</div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;