import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-darker py-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter text-white mb-6"
        >
          Brijesh<span className="text-primary">.dev</span>
        </a>

        <div className="flex space-x-6 mb-8">
          <SocialLink
            href="https://github.com/brijeshku007"
            icon={<Github size={20} />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/brijeshkumar007/"
            icon={<Linkedin size={20} />}
          />
          <SocialLink
            href="mailto:uietbrijesh@gmail.com"
            icon={<Mail size={20} />}
          />
        </div>

        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Brijesh Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
