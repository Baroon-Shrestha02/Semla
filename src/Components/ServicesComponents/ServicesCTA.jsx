import React from "react";
import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <>
      <section className="container mx-auto px-4">
        <div className="text-center bg-secondary rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their dreams
            of studying in Japan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Schedule Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
