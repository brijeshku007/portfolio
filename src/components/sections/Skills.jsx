import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiRedux,
  SiFramer,
  SiNextdotjs,
  SiMui,
  SiSass,
  SiVite,
  SiLodash,
  SiDocker,
  SiMysql,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { GiAmpleDress } from "react-icons/gi";
import { FaAws } from "react-icons/fa";
import { VscServer } from "react-icons/vsc";

const SKILLS_CATEGORIES = [
  {
    title: "Front-End Development",
    icon: <SiReact className="text-[#61DAFB]" size={28} />,
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" size={36} /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white" size={36} />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-[#F7DF1E]" size={36} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" size={36} />,
      },
      { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" size={36} /> },
      { name: "CSS3", icon: <SiHtml5 className="text-[#1572B6]" size={36} /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#06B6D4]" size={36} />,
      },
      {
        name: "Material UI",
        icon: <SiMui className="text-[#007FFF]" size={36} />,
      },
      { name: "Sass", icon: <SiSass className="text-[#CC6699]" size={36} /> },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" size={36} /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={36} /> },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-white" size={36} />,
      },
      {
        name: "Lodash",
        icon: <SiLodash className="text-[#333333]" size={36} />,
      },
    ],
  },
  {
    title: "Back-End Development",
    icon: <SiNodedotjs className="text-[#339933]" size={28} />,
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-[#339933]" size={36} />,
      },
      { name: "Express", icon: <SiExpress className="text-white" size={36} /> },
      {
        name: "REST API",
        icon: <SiNodedotjs className="text-[#339933]" size={36} />,
      },
      {
        name: "JWT Authentication",
        icon: <SiExpress className="text-white" size={36} />,
      },
    ],
  },
  {
    title: "Database",
    icon: <SiMongodb className="text-[#47A248]" size={28} />,
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" size={36} />,
      },
      { name: "MySQL", icon: <SiMysql className="text-[#00758F]" size={36} /> },
      {
        name: "Firebase",
        icon: <SiFirebase className="text-[#FFCA28]" size={36} />,
      },
    ],
  },
  {
    title: "Deployment & DevOps",
    icon: <SiVercel className="text-white" size={28} />,
    skills: [
      { name: "Vercel", icon: <SiVercel className="text-white" size={36} /> },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-[#00C7B7]" size={36} />,
      },
      { name: "VPS", icon: <VscServer className="text-[#FF6B6B]" size={36} /> },
      {
        name: "AWS (EC2/S3)",
        icon: <FaAws className="text-[#FF9900]" size={36} />,
      },
      //   {
      //     name: "S3",
      //     icon: <GiAmpleDress className="text-[#569A31]" size={36} />,
      //   },
      //   {
      //     name: "EC2",
      //     icon: <GiAmpleDress className="text-[#FF9900]" size={36} />,
      //   },
      {
        name: "Docker",
        icon: <SiDocker className="text-[#2496ED]" size={36} />,
      },
      { name: "Git", icon: <SiGit className="text-[#F05032]" size={36} /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-darker/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
              Technical Skills
            </h2>
            <div className="h-px bg-white/10 w-full ml-6"></div>
          </div>

          <div className="space-y-12">
            {SKILLS_CATEGORIES.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <div className="h-px bg-white/10 w-full ml-6"></div>
                </div>

                {/* Skills Grid */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 md:gap-6"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4 },
                        },
                      }}
                      className="flex flex-col items-center justify-center p-5 glass rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-default hover:scale-105"
                    >
                      <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
