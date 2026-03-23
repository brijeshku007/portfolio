import React, { useState, useEffect } from "react";
import { Menu, X, Download, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumePDF from "../../assets/MernStackBrijesh.pdf";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    // Close mobile menu first
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  const handlePreviewResume = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Brijesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          Brijesh<span className="text-primary">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={handlePreviewResume}
            className="px-5 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer"
          >
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-lg font-medium text-slate-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleDownloadResume}
                  className="inline-block px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-teal-400 transition-colors w-full text-center cursor-pointer"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Preview Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] flex items-center justify-center p-0"
            onClick={() => setShowResumeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-darker rounded-none w-full h-full border-0 overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <FileText className="text-primary" size={24} />
                  <h3 className="text-xl font-bold text-white">
                    Brijesh Kumar - Resume
                  </h3>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleDownloadResume}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary text-darker rounded-lg hover:bg-teal-400 transition-colors font-medium"
                  >
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={24} className="text-slate-400 hover:text-white" />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src={resumePDF}
                  className="w-full h-full border-0"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
