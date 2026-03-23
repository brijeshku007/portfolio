import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code, Rocket } from "lucide-react";
import resumePDF from "../../assets/MernStackBrijesh.pdf";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);

  const descriptions = [
    "I transform complex problems into elegant, user-centric digital solutions.",
    "I specialize in building scalable MERN stack applications with modern architecture.",
    "I create performant web experiences that users love and businesses trust.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % descriptions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = (e) => {
    e.preventDefault();
    // Create a temporary link to trigger download
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Brijesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
              MERN Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Hi, I'm <span className="text-white">Brijesh Kumar</span>.
            <br />
            <span className="text-slate-400">I build modern web apps.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed min-h-[80px] flex items-center justify-center"
          >
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {descriptions[currentText]}
                </motion.span>
              </AnimatePresence>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-6 -top-2 text-primary"
              >
                <Sparkles size={20} />
              </motion.div>
            </span>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mb-10 max-w-2xl"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Code className="text-primary mr-2" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                2+
              </div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Rocket className="text-primary mr-2" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                20+
              </div>
              <div className="text-sm text-slate-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="text-primary mr-2" size={20} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">
                100%
              </div>
              <div className="text-sm text-slate-400">Client Satisfaction</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 bg-primary text-darker px-8 py-4 rounded-full font-semibold hover:bg-teal-400 transition-all duration-300 w-full sm:w-auto"
            >
              <span>View My Work</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={handleDownloadResume}
              className="group flex items-center justify-center space-x-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              <Download
                size={20}
                className="text-slate-400 group-hover:text-white transition-colors"
              />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
