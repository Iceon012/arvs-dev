"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import TechLogos from "./logos";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-collision";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div>
      {/* Header */}
      <header className="fixed w-full bg-gray-900 shadow-lg shadow-slate-900 z-50 sh py-3">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Arvs.dev</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
      {/* Hero Section */}
      <BackgroundBeamsWithCollision>
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen w-full flex items-center justify-center bg-gray-900 text-white p-8 pt-16"
        >
          <div className="text-center">
            <motion.h1
              className="text-6xl font-bold mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Arvin Ayson
            </motion.h1>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Web Developer / Back End Developer
            </motion.p>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/Iceon012"
                whileHover={{ scale: 1.1 }}
                className="p-2"
                target="_blank"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arvin-ayson-888139236/"
                whileHover={{ scale: 1.1 }}
                target="_blank"
                className="p-2"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
            <div className="mt-20">
              <TechLogos />
            </div>
          </div>
        </motion.section>
      </BackgroundBeamsWithCollision>
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" flex items-center bg-white py-40 px-10 lg:px-0"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Passionate full-stack developer with 5+ years of experience
                building web applications. Specializing in React, Node.js, and
                cloud architecture.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Currently working on innovative projects that push the
                boundaries of web technology while maintaining a focus on user
                experience and performance.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
              >
                Download CV
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-50 py-40 px-10 lg:px-0"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                desc: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
                tech: ["React", "Node.js", "MongoDB"],
              },
              {
                title: "AI Chat Application",
                desc: "Real-time chat application with AI-powered responses",
                tech: ["Python", "TensorFlow", "WebSocket"],
              },
              {
                title: "Portfolio Generator",
                desc: "Dynamic portfolio generator with customizable themes",
                tech: ["Next.js", "Tailwind CSS", "Firebase"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={`/api/placeholder/400/200`}
                  alt={project.title}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href="#"
                  className="inline-flex items-center mt-4 text-blue-500 hover:text-blue-600"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" bg-white py-40 px-10 lg:px-0"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Frontend",
                skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"],
              },
              {
                name: "Backend",
                skills: ["Node.js", "Python", "Go", "PostgreSQL"],
              },
              {
                name: "DevOps",
                skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
              },
              { name: "Tools", skills: ["Git", "VS Code", "Figma", "Postman"] },
              {
                name: "Soft Skills",
                skills: ["Leadership", "Communication", "Problem Solving"],
              },
              { name: "Methods", skills: ["Agile", "Scrum", "TDD", "DDD"] },
            ].map((category) => (
              <motion.div
                key={category.name}
                className="bg-gray-50 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg font-bold mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-600">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" bg-gray-900 text-white py-40 px-10 lg:px-0"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <p className="text-xl mb-6">
              I'm currently open for freelance projects and full-time
              opportunities
            </p>
            <div className="flex lg:flex-row flex-col items-center justify-center space-x-6">
              <motion.a
                href="mailto:email@example.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
                whileHover={{ scale: 1.1 }}
              >
                <Mail size={20} />
                <span>a.ayson12345@gmail.com</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arvin-ayson-888139236/"
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
                whileHover={{ scale: 1.1 }}
                target="_blank"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;
