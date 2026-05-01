import { motion } from 'framer-motion'; 
import { 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiTypescript, 
  SiGit, 
  SiHtml5 
} from 'react-icons/si';

const Skills = () => {

  // 🔥 FRONTEND SKILLS
  const skills = [
    { name: "React", icon: SiReact, level: 70, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: 80, color: "#06B6D4" },
    { name: "HTML", icon: SiHtml5, level: 85, color: "#E34F26" },
    { name: "CSS", icon: SiTailwindcss, level: 80, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, level: 80, color: "#F7DF1E" },
    { name: "Git", icon: SiGit, level: 70, color: "#F05032" },
  ];

  // 🚀 LEARNING BACKEND
  const learningSkills = [
    { name: "Node.js", icon: SiNodedotjs, level: 40, color: "#339933" },
    {name: "Next.js", icon: SiReact, level: 30, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, level: 40, color: "#3178C6" },
  ];

  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Frontend technologies I use and backend tools I'm learning
          </p>
        </motion.div>

        {/* 🔥 FRONTEND GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <skill.icon
                  className="w-12 h-12"
                  style={{ color: skill.color }}
                />
                <span className="text-2xl font-bold text-purple-400">
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>

              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 LEARNING BACKEND */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Learning Backend
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-pink-400/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <skill.icon
                    className="w-12 h-12"
                    style={{ color: skill.color }}
                  />
                  <span className="text-2xl font-bold text-pink-400">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>

                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;