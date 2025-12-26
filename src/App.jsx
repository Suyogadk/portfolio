import React, { useState, useEffect, useRef } from "react";
import HomeSection from "../components/home.jsx";
import AboutSection from "../components/about.jsx";
import BlogSection from "../components/blog.jsx";
import ContactSection from "../components/contact.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
// css
import "./index.css";

// error section

// portfolio i.e. info of the admin/person
const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
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
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, key]));
            setActiveSection(key);
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Theme Variables
  const bgColor = isDark
    ? "bg-gray-900"
    : "bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50";
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const textColor = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-600";
  const borderColor = isDark ? "border-gray-700" : "border-gray-200";
  const hoverBg = isDark ? "hover:bg-gray-700" : "hover:bg-gray-50";

  return (
    <div
      className={`min-h-screen min-w-min ${bgColor} ${textColor} transition-all duration-500 pb-24`}
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
        isDark={isDark}
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
        isDark={isDark}
      />

      <Footer
        cardBg={cardBg}
        borderColor={borderColor}
        textSecondary={textSecondary}
        scrollToSection={scrollToSection}
        isDark={isDark}
      />

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isDark={isDark}
        setIsDark={setIsDark}
        textSecondary={textSecondary}
        cardBg={cardBg}
        borderColor={borderColor}
        hoverBg={hoverBg}
      />
    </div>
  );
};

export default Portfolio;
