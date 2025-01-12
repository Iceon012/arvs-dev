"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Code, Database, Brush } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-collision";

const ResumeViewer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5/CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "PostgreSQL",
        "Supabase",
        "MongoDB",
        "Firebase",
        "GitHub",
        "Jira",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Brush className="w-6 h-6" />,
      skills: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "User Interface Design",
      ],
    },
  ];

  const experienceData = {
    "Web Software Development": [
      "Integrated React, Supabase, and 5+ other technologies.",
      "Focused on UI design, improving user ratings by 20% and reducing UI/UX issues by 60%.",
      "Developed 10+ innovative features to improve functionality and user engagement.",
    ],
    Collaboration: [
      "Utilized Git version control system to initiate and manage 50+ pull requests.",
      "Reviewed 1000+ lines of peers' pull requests, emphasizing code quality.",
      "Advocated for clean and organized code practices, reducing technical debt by 25%.",
    ],
    "Time Management": [
      "Efficiently allocated tasks and delivering 95% of tasks on schedule.",
      "Utilized Jira Board to plan, track, and manage 300+ tasks effectively.",
      "Proactively organized and prioritized tasks, completing 90% of milestones on time.",
    ],
  };

  return (
    <BackgroundBeamsWithCollision>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={sectionVariants}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Header Section */}
            <motion.div
              variants={sectionVariants}
              className="p-8 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white"
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                ARVIN S. AYSON
              </h1>
              <div className="flex flex-col md:flex-row gap-4 text-gray-600">
                <a
                  href="mailto:arvs.dev@gmail.com"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                >
                  <Mail size={18} />
                  arvs.dev@gmail.com
                </a>
                <a
                  href="tel:+639612635002"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                >
                  <Phone size={18} />
                  (+63) 961-263-5002
                </a>
                <a
                  href="https://linkedin.com/in/arvin-ayson-888139236"
                  target="_blank"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                >
                  <Linkedin size={18} />
                  LinkedIn Profile
                </a>
              </div>
            </motion.div>

            {/* Summary Section */}
            <motion.div
              variants={sectionVariants}
              className="p-8 border-b border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                SUMMARY
              </h2>
              <p className="text-gray-600">
                Software Engineer skilled in developing secure, scalable, and
                high-performance applications. Proficient in leveraging modern
                technologies to deliver clean, efficient, and maintainable code,
                with a strong focus on industry best practices, thorough
                testing, and validation.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={sectionVariants}
              className="p-8 border-b border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                SKILLS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {category.icon}
                      <h3 className="font-medium text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div
              variants={sectionVariants}
              className="p-8 border-b border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                WORK EXPERIENCE
              </h2>
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-lg font-medium text-gray-900">
                    Software Engineer Intern
                  </h3>
                  <span className="text-gray-500">February 2024 - Present</span>
                </div>
                <p className="text-gray-600 font-medium mb-3">Tito Solutions</p>

                <div className="space-y-4">
                  {Object.entries(experienceData).map(
                    ([section, bullets], index) => (
                      <motion.div
                        key={section}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="hover:bg-gray-50 p-3 rounded-lg transition-colors"
                      >
                        <h4 className="font-medium text-gray-700 mb-2">
                          {section}
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                          {bullets.map((bullet, bulletIndex) => (
                            <motion.li
                              key={bulletIndex}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                delay: index * 0.2 + bulletIndex * 0.1,
                              }}
                            >
                              {bullet}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={sectionVariants} className="p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                EDUCATION
              </h2>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    Bachelor of Science in Information Technology
                  </h3>
                  <p className="text-gray-600">
                    Northern Luzon Adventist College
                  </p>
                  <p className="text-gray-500">April 2019 - May 2024</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    Information and Communication Technology (ICT)
                  </h3>
                  <p className="text-gray-600">
                    New Cabalan National Senior High School
                  </p>
                  <p className="text-gray-500">June 2017 - April 2019</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
};

export default ResumeViewer;
