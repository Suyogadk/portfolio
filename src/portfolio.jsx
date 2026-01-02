import React, { useState, useEffect, useRef } from "react";

import HomeSection from "../components/home.jsx";
import AboutSection from "../components/about.jsx";
import BlogSection from "../components/blog.jsx";
import ContactSection from "../components/contact.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";

import "./index.css";

const Portfolio = () => {
  const [isbright, setisbright] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [visibleSections, setVisibleSections] = useState(new Set());

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    blog: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observers = [];

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(key));
            setActiveSection(key);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ✅ SAFE SCROLL FUNCTION (ONLY ONCE)
  const scrollToSection = (section) => {
    if (!sectionRefs[section]) return;

    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Theme vars
  const bgColor = !isbright
    ? "bg-gray-900"
    : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50";
  const cardBg = !isbright ? "bg-gray-800" : "bg-white";
  const textColor = !isbright ? "text-white" : "text-gray-900";
  const textSecondary = !isbright ? "text-gray-400" : "text-gray-600";
  const borderColor = !isbright ? "border-gray-700" : "border-gray-200";
  const hoverBg = !isbright ? "hover:bg-gray-700" : "hover:bg-gray-50";

  return (
    <>
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isbright={isbright}
        setisbright={setisbright}
        textSecondary={textSecondary}
        cardBg={cardBg}
        borderColor={borderColor}
        hoverBg={hoverBg}
      />

      <div
        className={`min-h-screen min-w-min ${bgColor} ${textColor} transition-all duration-500`}
      >
        <HomeSection
          sectionRef={sectionRefs.home}
          visibleSections={visibleSections}
          cardBg={cardBg}
          borderColor={borderColor}
          textSecondary={textSecondary}
          hoverBg={hoverBg}
        />

        <AboutSection
          sectionRef={sectionRefs.about}
          visibleSections={visibleSections}
          cardBg={cardBg}
          borderColor={borderColor}
          textSecondary={textSecondary}
          hoverBg={hoverBg}
          isbright={isbright}
        />

        <BlogSection
          sectionRef={sectionRefs.blog}
          visibleSections={visibleSections}
          cardBg={cardBg}
          borderColor={borderColor}
          textSecondary={textSecondary}
          hoverBg={hoverBg}
        />

        <ContactSection
          sectionRef={sectionRefs.contact}
          visibleSections={visibleSections}
          cardBg={cardBg}
          borderColor={borderColor}
          textSecondary={textSecondary}
          hoverBg={hoverBg}
          isbright={isbright}
        />

        <Footer
          cardBg={cardBg}
          borderColor={borderColor}
          textSecondary={textSecondary}
          scrollToSection={scrollToSection}
          isbright={isbright}
        />
      </div>
    </>
  );
};

export default Portfolio;
