import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  Send,
  User,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t("home.contact.det.call"),
      primary: "+977 9813960567",
      description: "Mon-Fri 9AM-6PM",
      action: "tel:+9779813960567",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Mail,
      title: t("home.contact.det.mail"),
      primary: "info@semlaconsultancy.com",
      description: "We'll respond within 24 hours",
      action: "mailto:info@semlaconsultancy.com",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: MessageCircle,
      title: t("home.contact.det.whatsapp"),
      primary: "+977 9813960567",
      description: "Available 24/7",
      action: "https://wa.me/9779813960567",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  const officeHours = [
    { day: "Sunday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "Closed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(0deg, transparent 24%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.1) 26%, transparent 27%, transparent 74%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1) 76%, transparent 77%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t("home.contact.title")}
            <span className="bg-primary text-secondary px-6 py-1 inline-block -rotate-4 rounded-full">
              {t("home.contact.title2")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t("home.contact.des")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 ">
            {/* Visit Us Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  {t("home.contact.det.visit")}
                </h2>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/1uZTVTUAaHpR8d689",
                      "_blank"
                    )
                  }
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span className="text-sm font-medium">
                    {t("home.contact.det.view")}
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    SEMLA Education Consultancy
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Chabahil, Kathmandu
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm gap-x-4"
                      >
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-800">
                          {schedule.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    if (method.icon === Phone) {
                      navigator.clipboard.writeText(method.primary);
                      toast.success(
                        `Phone number ${method.primary} copied to clipboard!`
                      );
                    } else if (method.icon === Mail) {
                      window.location.href = `mailto:${method.primary}`;
                    } else if (method.icon === MessageCircle) {
                      window.open(method.action, "_blank");
                    }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${method.color}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-800 font-medium">
                        {method.primary}
                      </p>
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Embedded Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="h-[600px] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14128.096058794945!2d85.3492534!3d27.7165448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197d9d23f7ed%3A0x2724281b4393865d!2sChabahil%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1756288594793!5m2!1sen!2snp"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="SEMLA Office Location"
                ></iframe>

                <div className="absolute bottom-4 right-4 space-y-2">
                  <button
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/dir//Thamel,Kathmandu,Nepal",
                        "_blank"
                      )
                    }
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center space-x-2 shadow-lg group"
                  >
                    <span className="text-sm font-medium">
                      {t("home.contact.det.direction")}
                    </span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* Map Additional Info */}
            <div className="mt-6 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <Calendar className="w-5 h-5 text-green-600 mr-2" />
                {t("home.contact.cta.title")}
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                {t("home.contact.cta.subtitle")}
              </p>
              <Link to="/contact">
                <button className="w-full bg-secondary text-white py-2 rounded-lg transition-colors duration-300 text-sm font-medium">
                  {t("home.contact.cta.btn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
