import React, { useState, useEffect, useRef } from "react";
import { UserPen } from "lucide-react";
const AboutSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
  isbright,
}) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio_Website",
      description:
        "A great portfolio website to showcase your work and skills along with a admin pannel to manage it.",
      tech: ["React", "Node.js", "MongoDB"],
      emoji: "🧑‍💻",
    },
    {
      id: 2,
      title: "Task Manager App",
      description:
        "Collaborative task management with real-time updates and team features",
      tech: ["React", "Firebase", "Tailwind"],
      emoji: "✅",
    },
    {
      id: 3,
      title: "game live score updater",
      description:
        "Real-time game score updates with live updates and team features.",
      tech: ["React", "API", "Chart.js"],
      emoji: "🎮",
    },
  ];

  const skills = [
    { name: "React", level: 70 },
    { name: "Node.js", level: 20 },
    { name: "TypeScript", level: 30 },
    { name: "Tailwind CSS", level: 65 },
    { name: "MongoDB", level: 20 },
    { name: "UI/UX Design", level: 87 },
  ];

  {
    return (
      <section
        ref={sectionRef}
        className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
          visibleSections.has("about")
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
      >
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            About Me
          </h2>
          <p className={`text-center ${textSecondary} mb-12 text-lg`}>
            know me better😊
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div
              className={`${cardBg} rounded-2xl p-8 shadow-xl border ${borderColor} ${hoverBg} 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-4">Intro</h3>
              <p className={`${textSecondary} mb-4 leading-relaxed`}>
                I'm a student is Pokhara University. I'm passionate to learn new
                technologies and create innovative solutions.I enjoy doing
                projects.
              </p>
              <p className={`${textSecondary} leading-relaxed`}>
                I prefer well documented code , clean and readable code.My
                intrest is in application development and game development.I'm
                currently learning full stack development .
              </p>
            </div>

            <div
              className={`${cardBg} rounded-2xl p-8 shadow-xl border ${borderColor} ${hoverBg} 
              transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <span>UI/UX Design & Prototyping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <span>Project Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <span>Project Research</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div
            className={`${cardBg} rounded-2xl p-8 shadow-xl border ${borderColor} mb-12`}
          >
            <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <div
                  key={skill.name}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className={textSecondary}>{skill.level}%</span>
                  </div>
                  <div
                    className={`h-3 ${
                      isbright ? "bg-gray-700" : "bg-gray-200"
                    } rounded-full overflow-hidden cursor-pointer hover:h-4 transition-all duration-300`}
                  >
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out hover:bg-blue-600"
                      style={{
                        width: visibleSections.has("about")
                          ? `${skill.level}%`
                          : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`${cardBg} rounded-2xl p-6 shadow-lg border ${borderColor} ${hoverBg} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500`}
                  style={{
                    transitionDelay: visibleSections.has("about")
                      ? `${idx * 150}ms`
                      : "0ms",
                    opacity: visibleSections.has("about") ? 1 : 0,
                  }}
                >
                  <div className="text-4xl mb-4">{project.emoji}</div>
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className={`${textSecondary} mb-4`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isbright
                            ? "bg-gray-700 hover:bg-gray-600"
                            : "bg-gray-100 hover:bg-gray-200"
                        } transition-colors cursor-pointer`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
};
export default AboutSection;
