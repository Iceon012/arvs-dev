"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const ResumeViewer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Resume Content */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="p-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              ARVIN S. AYSON
            </h1>
            <div className="flex flex-col md:flex-row gap-4 text-gray-600">
              <a
                href="mailto:arvs.dev@gmail.com"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <Mail size={18} />
                arvs.dev@gmail.com
              </a>
              <a
                href="tel:+639612635002"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <Phone size={18} />
                (+63) 961-263-5002
              </a>
              <a
                href="https://linkedin.com/in/arvin-ayson-888139236"
                target="_blank"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              SUMMARY
            </h2>
            <p className="text-gray-600">
              Software Engineer skilled in developing secure, scalable, and
              high-performance applications. Proficient in leveraging modern
              technologies to deliver clean, efficient, and maintainable code,
              with a strong focus on industry best practices, thorough testing,
              and validation.
            </p>
          </div>

          {/* Experience Section */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-medium text-gray-900">
                  Software Engineer Intern
                </h3>
                <span className="text-gray-500">February 2024 - Present</span>
              </div>
              <p className="text-gray-600 font-medium mb-3">Tito Solutions</p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Web Software Development:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>
                      Integrated React, Supabase, and 5+ other technologies.
                    </li>
                    <li>
                      Focused on UI design, improving user ratings by 20% and
                      reducing UI/UX issues by 60%.
                    </li>
                    <li>
                      Developed 10+ innovative features to improve functionality
                      and user engagement.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Collaboration:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>
                      Utilized Git version control system to initiate and manage
                      50+ pull requests.
                    </li>
                    <li>
                      Reviewed 1000+ lines of peers&apos;pull requests,
                      emphasizing code quality.
                    </li>
                    <li>
                      Advocated for clean and organized code practices, reducing
                      technical debt by 25%.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Time Management:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>
                      Efficiently allocated tasks and delivering 95% of tasks on
                      schedule.
                    </li>
                    <li>
                      Utilized Jira Board to plan, track, and manage 300+ tasks
                      effectively.
                    </li>
                    <li>
                      Proactively organized and prioritized tasks, completing
                      90% of milestones on time.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              EDUCATION
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-gray-600">
                  Northern Luzon Adventist College
                </p>
                <p className="text-gray-500">April 2019 - May 2024</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Information and Communication Technologies (ICT)
                </h3>
                <p className="text-gray-600">
                  New Cabalan National Senior High School
                </p>
                <p className="text-gray-500">June 2017 - April 2019</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResumeViewer;
