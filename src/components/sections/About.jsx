import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, Users, Target, Award, Globe } from "lucide-react";
import myProfileImage from "../../assets/myph.png";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
              About Me
            </h2>
            <div className="h-px bg-white/10 w-full ml-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Main Introduction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  <span className="text-primary font-bold text-2xl">
                    Hello!
                  </span>{" "}
                  I'm{" "}
                  <span className="text-white font-semibold">
                    Brijesh Kumar
                  </span>
                  , a passionate Full Stack Developer who transforms innovative
                  ideas into powerful, scalable web applications. With over{" "}
                  <span className="text-white font-medium">2 years</span> of
                  specialized experience in the MERN stack, I architect and
                  build modern web solutions that drive business growth and
                  deliver exceptional user experiences.
                </p>
              </motion.div>

              {/* What I Do Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold text-white flex items-center">
                  <Target className="mr-3 text-primary" size={24} />
                  What I Do
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors">
                    <Code className="text-primary mb-3" size={28} />
                    <h4 className="text-white font-semibold mb-2">
                      Frontend Development
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Building responsive, intuitive UIs with React, Next.js,
                      and modern CSS frameworks
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors">
                    <Globe className="text-primary mb-3" size={28} />
                    <h4 className="text-white font-semibold mb-2">
                      Backend Architecture
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Creating robust APIs and databases with Node.js, Express,
                      and MongoDB
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors">
                    <Lightbulb className="text-primary mb-3" size={28} />
                    <h4 className="text-white font-semibold mb-2">
                      Problem Solving
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Turning complex challenges into elegant, efficient
                      solutions
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-colors">
                    <Users className="text-primary mb-3" size={28} />
                    <h4 className="text-white font-semibold mb-2">
                      Collaboration
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Working seamlessly with teams to deliver projects on time
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="relative group max-w-sm mx-auto w-full">
                {/* Animated glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-teal-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse"></div>

                {/* Image container */}
                <div className="relative aspect-[4/5] rounded-2xl bg-darker border border-white/10 overflow-hidden shadow-2xl">
                  <img
                    src={myProfileImage}
                    alt="Brijesh Kumar - Full Stack Developer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-darker border border-primary/30 rounded-xl p-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2+</div>
                    <div className="text-xs text-slate-400">
                      Years Experience
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
