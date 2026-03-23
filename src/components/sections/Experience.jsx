import React from "react";
import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    title: "MERN Stack Developer ",
    company: "Smatoro AI - EdTech Platform",
    duration: "Nov 2025 - Present",
    location: "Remote",
    description:
      "Built React-based AI education interfaces powered by .NET GenAI APIs. Delivered real-time content rendering, interactive slides, gamified learning, and role-based dashboards.",
    skills: [
      "React",
      "Tailwind CSS",
      "React-form-hook",
      "Zod",
      "JavaScript",
      "RTK Query",
      "Node.js",
      "Express",
      "MongoDB",
      "Material UI",
      "Redux",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Associate Front-end Developer",
    company: "Oodles Technologies Pvt Ltd",
    duration: "Jan 2025 - Oct 2025",
    location: "Gurugram, India",
    description:
      "Developed responsive and accessible user interfaces using React.js, Next.js, React Native, JavaScript, and Tailwind CSS. Integrated REST APIs with RTK Query, ensuring smooth data flow, caching, and real-time synchronization. Implemented role-based access control (RBAC) and improved form validation and error handling to enhance security, accuracy, and overall user experience. Built reusable and scalable components, optimizing front-end performance for faster load times and improved SEO. Collaborated closely with clients, backend, and design teams to ensure seamless integration and consistent functionality.",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "JavaScript",
      "Tailwind CSS",
      "RTK Query",
      "REST APIs",
    ],
  },
  {
    title: "Full Stack Trainee",
    company: "JSpiders",
    duration: "Jun 2024 - Dec 2024",
    location: "Noida, India",
    description:
      "Developed efficient, clean, and maintainable code under the supervision of senior developers, focusing on best practices and code quality. Utilized Git and GitHub for version control and collaborative development, managing codebase effectively with pull requests and code reviews. Participated in agile development processes and contributed to project planning and sprint reviews.",
    skills: [
      "Git",
      "GitHub",
      "Agile",
      "Full Stack Development",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Redux",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
            Experience
          </h2>
          <div className="h-px bg-white/10 w-full ml-6"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-4">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-6 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_10px_rgba(20,184,166,0.6)] md:hidden"></div>

              <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
                {/* Left side: Duration (Desktop) */}
                <div className="hidden md:flex flex-col items-end col-span-3 pt-4 pr-8 relative">
                  <span className="text-sm font-medium text-slate-400 font-mono">
                    {exp.duration}
                  </span>
                  {/* Desktop Timeline dot */}
                  <div className="absolute right-[-6px] top-6 w-[11px] h-[11px] rounded-full bg-primary shadow-[0_0_10px_rgba(20,184,166,0.6)]"></div>
                </div>

                {/* Right side: Content */}
                <div className="col-span-9 glass p-6 md:p-8 rounded-2xl hover:bg-white-[0.07] transition-colors border border-white/5 shadow-xl relative top-0 hover:-translate-y-1 duration-300">
                  <div className="flex flex-col mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-200">
                      {exp.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary mt-1 mb-3">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    {/* Mobile Duration */}
                    <div className="flex items-center space-x-2 text-slate-500 text-sm md:hidden mb-4">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-slate-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
