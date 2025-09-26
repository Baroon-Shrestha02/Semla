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
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const courseOptions = [
    { value: "undergraduate", label: t("contact.form.courseop.ug") },
    { value: "postgraduate", label: t("contact.form.courseop.pg") },
  ];

  const subjectOptions = [
    { value: "counseling", label: t("contact.form.subop.academic") },
    { value: "application", label: t("contact.form.subop.application") },
    { value: "visa", label: t("contact.form.subop.visa") },
    { value: "scholarship", label: t("contact.form.subop.scholar") },
    { value: "general", label: t("contact.form.subop.inquiry") },
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
    const whatsappNumber = "9779762588549"; // Replace with your WhatsApp number

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
      title: "Mobile",
      content: "+977 9762588549",
      color: "text-blue-600",
      type: "phone",
    },
    {
      icon: Phone,
      title: "Landline",
      content: "+01-4534143",
      color: "text-blue-600",
      type: "phone",
    },
    {
      icon: MessageCircle,
      title: t("contact.form.contactinfo.whatsapp"),
      content: "+977 9762588549",
      color: "text-green-600",
      type: "whatsapp",
    },
    {
      icon: Mail,
      title: t("contact.form.contactinfo.mail"),
      content: "info@semlaconsultancy.com",
      color: "text-purple-600",
      type: "email",
    },
    {
      icon: MapPin,
      title: t("contact.form.contactinfo.address"),
      content: "Chabahil, Kathmandu, Nepal",
      color: "text-red-600",
      type: "address",
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
            {t("contact.title1")}{" "}
            <span className="text-secondary">{t("contact.title2")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact.subtitle")}
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
                {t("contact.conv.title")}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t("contact.conv.subtitle")}
              </p>
            </div>

            {/* Contact Cards */}
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Top 3 cards */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.slice(0, 3).map((info, index) => {
                  const IconComponent = info.icon;

                  // Handle click based on type
                  const handleClick = () => {
                    if (info.type === "phone") {
                      navigator.clipboard.writeText(info.content);
                      toast.success(
                        `${info.title} number copied: ${info.content}`
                      );
                    } else if (info.type === "whatsapp") {
                      // Redirect to WhatsApp
                      const whatsappUrl = `https://wa.me/9779762588549`;
                      window.open(whatsappUrl, "_blank");
                    } else if (info.type === "email") {
                      window.location.href = `mailto:${info.content}`;
                    } else if (info.type === "address") {
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

              {/* Bottom 2 cards */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.slice(3, 5).map((info, index) => {
                  const IconComponent = info.icon;

                  // Handle click based on type
                  const handleClick = () => {
                    if (info.type === "phone") {
                      navigator.clipboard.writeText(info.content);
                      toast.success(
                        `${info.title} number copied: ${info.content}`
                      );
                    } else if (info.type === "whatsapp") {
                      // Redirect to WhatsApp
                      const whatsappUrl = `https://wa.me/9779762588549`;
                      window.open(whatsappUrl, "_blank");
                    } else if (info.type === "email") {
                      window.location.href = `mailto:${info.content}`;
                    } else if (info.type === "address") {
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
                      key={index + 3}
                      onClick={handleClick}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
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
                {t("contact.conv.why.title")}
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("contact.conv.why.p1")}
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("contact.conv.why.p2")}
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("contact.conv.why.p3")}
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  {t("contact.conv.why.p4")}
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
                    {t("contact.form.title")}
                  </h3>
                  <p className="text-gray-600">{t("contact.form.subtitle")}</p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.data.name")} *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={t("contact.form.data.pname")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.data.lname")} *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder={t("contact.form.data.plname")}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t("contact.form.data.add")} *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder={t("contact.form.data.padd")}
                  />
                </div>

                {/* Course and Subject Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.data.course")} *
                    </label>
                    <select
                      name="courseOption"
                      value={formData.courseOption}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">{t("contact.form.data.pcourse")}</option>
                      {courseOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t("contact.form.data.inquiry")} *
                    </label>
                    <select
                      name="subjectOption"
                      value={formData.subjectOption}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">
                        {t("contact.form.data.pinquiry")}
                      </option>
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
                    {t("contact.form.data.msg")} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={t("contact.form.data.pmsg")}
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
                      {t("contact.form.data.btns")}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      {t("contact.form.data.btn")}
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
                  {t("contact.form.data.sent")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("contact.form.data.senttext")}
                </p>
                <p className="text-sm text-gray-500">
                  {t("contact.form.data.sentdes")}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
