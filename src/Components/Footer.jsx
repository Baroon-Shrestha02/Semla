import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.service"), href: "/services" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.faq"), href: "/faq" },
  ];

  const legalLinks = [
    { name: t("footer.policy"), href: "#" },
    { name: t("footer.term"), href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/semla", label: "Facebook" },
    {
      icon: Instagram,
      href: "https://instagram.com/semla",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/semla",
      label: "LinkedIn",
    },
  ];

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+977 9762588549");
    toast.success("Phone number copied to clipboard!");
  };
  const handleCopytelPhone = () => {
    navigator.clipboard.writeText("+01-4534143");
    toast.success("Phone number copied to clipboard!");
  };

  return (
    <footer className="relative bg-secondary text-white">
      {/* SVG background with lower z-index */}
      <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 md:h-40"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            d="M0,64L60,80C120,96,240,128,360,138.7C480,149,600,139,720,122.7C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description - Column 1 */}
          <div>
            <div className="mb-6 ">
              <img
                src="/Main/logo3.png"
                alt="SEMLA Logo"
                className="h-16 md:h-22 mb-4 bg-white rounded-2xl"
              />
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {t("footer.des")}
              </p>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("footer.quick")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information - Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("footer.contact")}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/8s5yTyu6oH1YMiJc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                >
                  Chabahil
                  <br />
                  Kathmandu, Nepal 44600
                </a>
              </div>

              <div className="flex items-center space-x-3 cursor-pointer">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                  onClick={handleCopyPhone}
                >
                  +977 9762588549
                </span>
                <span
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                  onClick={handleCopytelPhone}
                >
                  +01-4534143
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a
                  href="mailto:info@semlaconsultancy.com"
                  className="text-gray-300 text-sm hover:text-green-400 transition-colors"
                >
                  info@semlaconsultancy.com
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Map - Column 4 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t("footer.find")}
            </h3>
            <a
              href="https://maps.app.goo.gl/8s5yTyu6oH1YMiJc8"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform"
            >
              <iframe
                className="aspect-video w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096058794945!2d85.3492534!3d27.7165448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756288594793!5m2!1sen!2snp"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Semla Educational Consultant Location"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} SEMLA. {t("footer.right")}.
              </p>
              <div className="flex items-center space-x-4">
                {legalLinks.map((link, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="text-gray-600">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
