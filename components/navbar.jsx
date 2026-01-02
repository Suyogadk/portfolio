import React from "react";
import { Home, User, FileText, Mail, Moon, Sun, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = ({
  activeSection,
  scrollToSection,
  isbright,
  setisbright,
  textSecondary,
  cardBg,
  borderColor,
  hoverBg,
}) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "about", icon: User, label: "About" },
    { id: "blog", icon: FileText, label: "Blog" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "login", icon: LogIn, label: "Login" },
  ];

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 ${cardBg} border-t ${borderColor} px-4 py-3 shadow-2xl z-40`}
    >
      <div className="max-w-2xl mx-auto flex justify-around items-center">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => {
              if (id === "login") navigate("/login");
              else scrollToSection(id);
            }}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
              activeSection === id
                ? "text-blue-500 scale-110 bg-blue-500 bg-opacity-10"
                : `${textSecondary} hover:scale-110 ${hoverBg}`
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs">{label}</span>
          </button>
        ))}

        <button
          onClick={() => setisbright(!isbright)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl ${hoverBg} ${textSecondary}`}
        >
          {isbright ? (
            <Moon className="w-6 h-6 text-indigo-500" />
          ) : (
            <Sun className="w-6 h-6 text-yellow-500" />
          )}
          <span className="text-xs">Theme</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
