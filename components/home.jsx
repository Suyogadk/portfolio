// importing icons
import React, { useState, useEffect, useRef } from "react";
// home section
const HomeSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
}) => {
  const stats = [
    { label: "Projects Completed", value: "5+" },
    { label: "Happy Clients", value: "3+" },
    { label: "Years Experience", value: "1+" },
    { label: "Code Commits", value: "100+" },
  ];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-all duration-1000 ${
        visibleSections.has("home")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center max-w-4xl z-10 mt-20">
        <div
          className={`w-32 h-32 rounded-full ${cardBg} mx-auto mb-2% flex items-center justify-center shadow-xl border-2 ${borderColor} transform transition-all duration-700 ${
            visibleSections.has("home") ? "scale-100" : "scale-0"
          }`}
        >
          <div className="text-6xl">
            <img src="/images/suyog.jpg" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold mb-6">Suyog Adhikari</h1>

        <p
          className={`text-2xl md:text-3xl ${textSecondary} mb-8 font-semibold`}
        >
          Full Stack Developer & Designer
        </p>

        <p
          className={`text-lg md:text-xl ${textSecondary} max-w-2xl mx-auto mb-12 leading-relaxed`}
        >
          creating a best looging and user quierable website with best features.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`${cardBg} rounded-xl p-6 shadow-lg border ${borderColor} ${hoverBg} cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: visibleSections.has("home") ? 1 : 0,
              }}
            >
              <div className="text-3xl font-bold mb-1 text-blue-500">
                {stat.value}
              </div>
              <div className={`text-sm ${textSecondary}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
