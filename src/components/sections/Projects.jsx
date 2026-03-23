import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageSquare,
  Shield,
  BarChart3,
} from "lucide-react";

const PROJECTS = [
  {
    title: "Smatoro AI",
    subtitle: "AI-Powered EdTech Learning Platform",
    period: "2025 Oct - 2026 Mar ",
    description:
      "A comprehensive AI-driven education platform with 20+ learning games, role-based access, and automated content generation for teachers.",
    longDescription:
      "Smatoro AI revolutionizes K-12 education by combining gamified learning with powerful AI content generation. Built with React and powered by .NET GenAI APIs, it eliminates teacher workload while providing personalized learning experiences for students across Math, English, Science, and more.",
    features: [
      {
        icon: <BarChart3 size={24} />,
        title: "20+ Educational Games",
        description:
          "Interactive games for Math, English, Science with real-time progress tracking for students, teachers, and parents",
      },
      {
        icon: <Shield size={24} />,
        title: "Role-Based Dashboards",
        description:
          "Custom interfaces for Schools, Teachers, Students & Parents with attendance tracking and comprehensive student analytics",
      },
      {
        icon: <MessageSquare size={24} />,
        title: "AI Content Generator",
        description:
          "UltraView generates slides, MCQs, vocabulary, images, videos, group work, summaries, real-life examples & mindmaps instantly",
      },
      {
        icon: <ExternalLink size={24} />,
        title: ".NET GenAI Integration",
        description:
          "Powered by advanced Generative AI APIs for real-time educational content rendering and intelligent recommendations",
      },
    ],
    tech: [
      "React",
      ".NET GenAI APIs",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "RBAC",
      "Real-time Analytics",
    ],
    images: Array.from({ length: 16 }, (_, i) => `/sma${i + 1}.png`),
    github: "https://github.com/brijeshku007",
    live: "https://www.smatoroai.com/",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Real Estate CRM",
    subtitle: "Intelligent Property Management Platform",
    period: "Apr 2025 – Oct 2025",
    description:
      "A cutting-edge real estate CRM powered by AI, featuring location-based property search, owner verification, land registry integration, and an intelligent chatbot for instant property insights.",
    longDescription:
      "This comprehensive real estate platform revolutionizes property management with AI-driven insights and automation. Built with modern React architecture, it streamlines the entire property lifecycle from listing to transaction.",
    features: [
      {
        icon: <BarChart3 size={24} />,
        title: "Dynamic Dashboard",
        description:
          "Location-based search with advanced filters and real-time property listings using React Table",
      },
      {
        icon: <MapPin size={24} />,
        title: "Property Management",
        description:
          "Detailed property views with owner verification, land registry integration, and feedback system",
      },
      {
        icon: <MessageSquare size={24} />,
        title: "AI Chatbot",
        description:
          "Intelligent chatbot UI providing instant property insights powered by AI and backend integration",
      },
      {
        icon: <Shield size={24} />,
        title: "Security & Performance",
        description:
          "Role-based access control (RBAC), optimized performance, fully responsive UI with Tailwind CSS",
      },
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "React Table",
      "Mapbox",
      "Tailwind CSS",
      "AI Integration",
      "RBAC",
    ],
    images: ["/Aireal1.png", "/Aireal2.png", "/Aireal3.png"],
    github: "https://github.com/brijeshku007",
    live: "https://realestateapp.reapp.ch",
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "StreamMe",
    subtitle: "AI-Powered Movie Streaming Platform",
    period: "Oct 2024 – Nov 2024",
    description:
      "A Netflix-like streaming application with AI-powered recommendations, Firebase authentication, and real-time movie data from TMDB API.",
    longDescription:
      "StreamMe delivers a premium streaming experience with personalized content discovery. Featuring AI-powered search, dynamic recommendations, and seamless user authentication, it achieved a 35% increase in user engagement through intuitive design and engaging content delivery.",
    features: [
      {
        icon: <BarChart3 size={24} />,
        title: "User Engagement Boost",
        description:
          "Netflix-like interface with dynamic content recommendations driving 35% increase in user engagement",
      },
      {
        icon: <Shield size={24} />,
        title: "Firebase Authentication",
        description:
          "Secure user management with sign-up, login, session handling, and real-time user state management",
      },
      {
        icon: <ExternalLink size={24} />,
        title: "TMDB API Integration",
        description:
          "Real-time movie and TV show data fetching, achieving 30% longer average session duration",
      },
      {
        icon: <MessageSquare size={24} />,
        title: "AI-Powered Search",
        description:
          "Google Generative AI integration for intelligent movie search and personalized watchlist management",
      },
    ],
    tech: [
      "React",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript",
      "Firebase",
      "TMDB API",
      "Google Generative AI",
    ],
    images: Array.from({ length: 10 }, (_, i) => `/net${i + 1}.png`),
    github: "https://github.com/brijeshku007",
    live: "https://streammefast.netlify.app",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "FoodExpress",
    subtitle: "Multi-Restaurant SaaS Management Platform",
    period: "2024 Oct - 2024 Dec",
    description:
      "A comprehensive SaaS restaurant management system with multi-restaurant support, real-time order tracking, and Razorpay payment integration.",
    longDescription:
      "RestoIn is a full-stack restaurant management platform built on the MERN stack. It empowers multiple restaurant owners with complete control over their operations through role-based access, real-time order management, secure payment processing, and comprehensive analytics. From inventory tracking to customer orders, everything is seamlessly integrated.",
    features: [
      {
        icon: <BarChart3 size={24} />,
        title: "Multi-Restaurant SaaS",
        description:
          "Admin panel managing multiple restaurants with role-based access control for owners and Admins",
      },
      {
        icon: <Shield size={24} />,
        title: "JWT Authentication",
        description:
          "Secure authentication with JWT tokens and role-based authorization for different user levels",
      },
      {
        icon: <MessageSquare size={24} />,
        title: "Real-Time Order Tracking",
        description:
          "Live order status updates from placement to delivery with complete tracking history",
      },
      {
        icon: <ExternalLink size={24} />,
        title: "Razorpay Integration",
        description:
          "Secure payment gateway integration with Razorpay for seamless online transactions and payment tracking",
      },
    ],
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Razorpay",
      "RBAC",
      "Real-time Updates",
    ],
    images: Array.from({ length: 12 }, (_, i) => `/res${i + 1}.png`),
    github: "https://github.com/brijeshku007",
    live: "https://resto.in",
    color: "from-orange-500 to-red-500",
  },
];

const Projects = () => {
  const [currentImageIndices, setCurrentImageIndices] = useState(
    PROJECTS.map(() => 0),
  );

  // Auto-slide images every 4 seconds for each project
  React.useEffect(() => {
    const intervals = PROJECTS.map((_, index) => {
      return setInterval(() => {
        setCurrentImageIndices((prev) =>
          prev.map((currentIndex, projIdx) => {
            if (projIdx !== index) return currentIndex;
            return currentIndex === PROJECTS[projIdx].images.length - 1
              ? 0
              : currentIndex + 1;
          }),
        );
      }, 4000);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const nextImage = (projectIndex) => {
    setCurrentImageIndices((prev) =>
      prev.map((currentIndex, idx) =>
        idx === projectIndex
          ? currentIndex === PROJECTS[projectIndex].images.length - 1
            ? 0
            : currentIndex + 1
          : currentIndex,
      ),
    );
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndices((prev) =>
      prev.map((currentIndex, idx) =>
        idx === projectIndex
          ? currentIndex === 0
            ? PROJECTS[projectIndex].images.length - 1
            : currentIndex - 1
          : currentIndex,
      ),
    );
  };

  return (
    <section id="projects" className="py-24 bg-darker/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
              Featured Projects
            </h2>
            <div className="h-px bg-white/10 w-full ml-6"></div>
          </div>
          <p className="text-slate-400 text-lg max-w-3xl">
            Showcasing my most recent and impactful work in modern web
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, projectIndex) => (
            <motion.div
              key={projectIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative h-full"
            >
              {/* Project Card */}
              <div className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                {/* Gradient Top Border */}
                <div
                  className={`h-1 bg-gradient-to-r ${project.color} w-full`}
                ></div>

                <div className="flex flex-col h-full">
                  {/* Image Carousel */}
                  <div className="relative h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] bg-darker overflow-hidden group flex-shrink-0">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndices[projectIndex]}
                        src={project.images[currentImageIndices[projectIndex]]}
                        alt={`${project.title} Screenshot ${currentImageIndices[projectIndex] + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-contain"
                      />
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        prevImage(projectIndex);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        nextImage(projectIndex);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm p-3 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 z-10"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentImageIndices((prev) =>
                              prev.map((val, idx) =>
                                idx === projectIndex ? index : val,
                              ),
                            );
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndices[projectIndex]
                              ? "bg-primary w-6"
                              : "bg-white/50 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Live Link Badge */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium flex items-center space-x-2 hover:bg-primary transition-colors z-10"
                    >
                      <ExternalLink size={16} />
                      <span>Visit Live</span>
                    </a>
                  </div>

                  {/* Right Column - Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-3xl lg:text-4xl font-bold text-white">
                            {project.title}
                          </h3>
                          <div className="flex space-x-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-lg"
                            >
                              <Github size={24} />
                            </a>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-lg"
                            >
                              <ExternalLink size={24} />
                            </a>
                          </div>
                        </div>
                        <p className="text-primary font-medium text-lg mb-2">
                          {project.subtitle}
                        </p>
                        <p className="text-slate-500 text-sm">
                          {project.period}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {project.longDescription}
                      </p>

                      {/* Features */}
                      <div className="space-y-5 mb-8">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-start space-x-4"
                          >
                            <div className="text-primary flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-1">
                                {feature.title}
                              </h4>
                              <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-6">
            Want to see more of my work? Check out my GitHub profile
          </p>
          <a
            href="https://github.com/brijeshku007"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary/10 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium group"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
