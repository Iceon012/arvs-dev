/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-collision";
import TechStackSlider from "./tech-stack";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const menuItems = ["Home", "About", "Projects", "Skills", "Contact"];
  const menuItems = ["Home", "Projects", "Contact"];

  return (
    <div>
      {/* Header */}
      <header className="w-full bg-gray-900 shadow-lg shadow-slate-900 z-50 sh py-3">
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
          // initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
          className="w-full flex items-center justify-center  text-white py-48 pt-24 z-10"
        >
          <div className="text-center">
            <motion.h1
              className="text-6xl font-bold mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hi I&apos;m Arvin
            </motion.h1>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Web Developer
            </motion.p>
            <div className="flex justify-center space-x-4 text-blue-900">
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
            {/* <div className="mt-20">
              <TechLogos />
            </div> */}
          </div>
        </motion.section>
      </BackgroundBeamsWithCollision>
      <TechStackSlider />
      {/* <BackgroundBeamsWithCollision>
        <motion.section
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex items-center bg-gray-900 py-40 px-10 lg:px-0"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/assets/images/profile.png"
                  alt="Profile"
                  className="max-w-lg rounded-lg shadow-lg"
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
      </BackgroundBeamsWithCollision> */}
      <BackgroundBeamsWithCollision>
        {/* Projects Section */}
        <motion.section
          id="projects"
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1 }}
          className="w-full py-40 px-10 lg:px-0 z-10"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  img: "/assets/images/ars.jpg",
                  title: "Enrollment System",
                  link: "https://student-pi.vercel.app/login",
                  desc: "Enrollment System is designed to streamline administrative processes, enhance communication, and improve the learning experience for students and staff alike.",
                  tech: ["Angular", "Node.js", "MySQL", "PHP"],
                },
                {
                  img: "/assets/images/donverge.jpg",
                  title: "Don Verge Delivery App",
                  link: "#",
                  desc: "Don Verge Delivery App is an innovative and user-friendly platform designed to revolutionize the way you send and pick-up orders.Don Verge Delivery App makes it simple, fast, and efficient.",
                  tech: ["React Native", "Penpot", "Firebase"],
                },
                {
                  img: "/assets/images/photography.jpg",
                  title: "Photography Booking System",
                  link: "#",
                  desc: "a platform tailored specifically for photographers and clients to simplify the process of scheduling, managing, and booking photography sessions. Whether you're a professional photographer or a client looking for seamless coordination, Iceonphotography ensures a stress-free experience from start to finish.",
                  tech: ["Next.js", "Tailwind CSS", "Firebase"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-10 rounded-lg shadow-lg flex flex-col"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-900 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto text-center">
                    <motion.a
                      href={`${project.link ? project.link : "#"}`}
                      className="flex flex-row items-center justify-center mt-4 text-white hover:text-gray-300 bg-blue-900 p-3 rounded-lg"
                    >
                      View Project <ExternalLink size={16} className="ml-1" />
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </BackgroundBeamsWithCollision>

      {/* Skills Section */}
      {/* Contact Section */}
      <BackgroundBeamsWithCollision>
        <motion.section
          id="contact"
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 1 }}
          className=" w-full h-auto text-white py-40 px-10 lg:px-0 z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <p className="text-xl mb-6">
                I&apos;m currently open for full-time opportunities
              </p>
              <div className="flex lg:flex-row flex-col items-center justify-center space-x-6">
                <motion.a
                  href="mailto:email@example.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail size={20} />
                  <span>arvs.dev@gmail.com</span>
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
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Portfolio;
