import { Heart, Brain } from "lucide-react";

const Footer = ({
  cardBg,
  borderColor,
  textSecondary,
  scrollToSection,
  isDark,
}) => {
  return (
    <footer className={`${cardBg} border-t ${borderColor} py-12 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex mb-8 md:grid md:grid-cols-2  gap-8">
          {/* Branding */}
          <div className="min-w-0 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Suyog Adhikari</h4>
            <p className="text-lg font-semibold">
              Building digital experiences that inspire and delight.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Blog", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className={`block ${textSecondary} hover:text-blue-500 hover:translate-x-2 transition-all duration-300`}
                >
                  {link}
                </button>
              ))}
            </div>
          </div> */}

          {/* Subscribe */}
          <div>
            <h4 className="text-xl font-bold mb-4">Subscribe</h4>
            <p className={`${textSecondary} mb-4`}>
              Stay updated with my latest posts
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className={`flex-1 px-4 py-2 rounded-lg ${
                  isDark ? "bg-gray-700" : "bg-gray-100"
                } border ${borderColor} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all hover:border-blue-500`}
              />
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`border-t ${borderColor} pt-8 text-center`}>
          <p className={textSecondary}>
            © 2025 Suyogadk. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-500 hover:scale-125 transition-transform cursor-pointer" />{" "}
            and lots of{" "}
            <Brain className="w-4 h-4 inline text-blue-500 hover:scale-125 transition-transform cursor-pointer" />
          </p>
        </div>
        <div className={`border-t ${borderColor} pt-8 text-center`}>
          <p></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
