import { Mail, MapPin, Instagram, Twitter, Github, Link } from "lucide-react";
const ContactSection = ({
  sectionRef,
  visibleSections,
  cardBg,
  borderColor,
  textSecondary,
  hoverBg,
  isbright,
}) => {
  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 py-20 transition-all duration-1000 ${
        visibleSections.has("contact")
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-10 text-center">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div
              className={`${cardBg} rounded-2xl p-8 shadow-xl border ${borderColor} ${hoverBg} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    isbright
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } transition-all duration-300 cursor-pointer hover:-translate-x-2`}
                >
                  <Mail className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-semibold hover:text-blue-500 transition-colors">
                      <a href="mailto:adhikarisuyog999@gmail.com">
                        adhikarisuyog999@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={`flex items-center gap-4 p-4 rounded-xl ${
                    isbright
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-50 hover:bg-gray-100"
                  } transition-all duration-300 cursor-pointer hover:-translate-x-2`}
                >
                  <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-semibold hover:text-blue-500 transition-colors">
                      pokhara-31,kaski, Nepal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`${cardBg} rounded-2xl p-8 shadow-xl border ${borderColor} ${hoverBg} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h4 className="text-xl font-bold mb-6">Connect With Me</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  {
                    name: "GitHub",
                    icon: Github,
                    link: "https://github.com/Suyogadk",
                  },
                  { name: "Instagram", icon: Instagram },
                  { name: "Twitter", icon: Twitter },
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl ${
                      isbright
                        ? "bg-gray-700 hover:bg-sky-500"
                        : "bg-gray-100 hover:bg-gray-200"
                    } hover:-translate-y-2 transform transition-all duration-300 shadow hover:shadow-xl`}
                  >
                    <social.icon className="w-6 h-6 hover:scale-125 transition-transform" />
                    <span className="text-xs font-semibold">
                      <a href={social.link}>{social.name}</a>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`${cardBg} rounded-2xl overflow-hidden shadow-xl border ${borderColor} h-full min-h-[500px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7612.094070008541!2d84.0910372880247!3d28.14548931655649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2snp!4v1766331554919!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
