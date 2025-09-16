import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    courseOption: "",
    subjectOption: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courseOptions = [
    { value: "undergraduate", label: "Undergraduate" },
    { value: "postgraduate", label: "Postgraduate" },
  ];

  const subjectOptions = [
    { value: "counseling", label: "Academic Counseling" },
    { value: "application", label: "Application Assistance" },
    { value: "visa", label: "Visa Processing" },
    { value: "scholarship", label: "Scholarship Guidance" },
    { value: "general", label: "General Inquiry" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.address ||
      !formData.courseOption ||
      !formData.subjectOption ||
      !formData.message
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.firstName} ${formData.lastName}
*Address:* ${formData.address}
*Course Interest:* ${
      courseOptions.find((opt) => opt.value === formData.courseOption)?.label ||
      formData.courseOption
    }
*Subject:* ${
      subjectOptions.find((opt) => opt.value === formData.subjectOption)
        ?.label || formData.subjectOption
    }

*Message:*
${formData.message}

---
Sent from Semla Educational Consultancy website`;

    // WhatsApp number (replace with your actual WhatsApp number)
    const whatsappNumber = "9779813960567"; // Replace with your WhatsApp number

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Simulate form processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          courseOption: "",
          subjectOption: "",
          message: "",
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+977 9813960567",
      color: "text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+977 9813960567",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@semlaconsultancy.com",
      color: "text-purple-600",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Chabahil, Kathmandu, Nepal",
      color: "text-red-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your international education journey? Contact us
            today for personalized guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our expert counselors are here to guide you through every step
                of your study abroad journey. Reach out to us through any of the
                channels below.
              </p>
            </div>

            {/* Contact Cards */}
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;

                // Handle click based on type
                const handleClick = () => {
                  if (info.title === "Call Us" || info.title === "WhatsApp") {
                    navigator.clipboard.writeText(info.content);
                    toast.success(
                      `${info.title} number copied: ${info.content}`
                    );
                  } else if (info.title === "Email") {
                    window.location.href = `mailto:${info.content}`;
                  } else if (info.title === "Address") {
                    // Open Google Maps
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        info.content
                      )}`,
                      "_blank"
                    );
                  }
                };

                return (
                  <motion.div
                    key={index}
                    onClick={handleClick}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div
                      className={`w-12 h-12 ${info.color
                        .replace("text-", "bg-")
                        .replace(
                          "-600",
                          "-100"
                        )} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <IconComponent className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600">{info.content}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Why Choose Semla?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Expert counselors with 10+ years experience
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  98% visa approval success rate
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  End-to-end support from application to departure
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  Free initial consultation
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form and we'll get back to you via WhatsApp
                  </p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your address"
                  />
                </div>

                {/* Course and Subject Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Course Level *
                    </label>
                    <select
                      name="courseOption"
                      value={formData.courseOption}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select course level</option>
                      {courseOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="subjectOption"
                      value={formData.subjectOption}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select inquiry type</option>
                      {subjectOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your study abroad goals and how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </div>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 mb-4">
                  Your message has been prepared and WhatsApp should open
                  shortly.
                </p>
                <p className="text-sm text-gray-500">
                  We'll respond to your inquiry as soon as possible.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
