import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <footer className="mt-32 border-t border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div className="px-4 sm:px-12 lg:px-24 xl:px-40 py-16">

        {/* Top */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <img
              src={theme === "dark" ? assets.logo_dark : assets.logo}
              alt="Logo"
              className="w-40"
            />

            <p className="mt-6 max-w-md text-gray-600 dark:text-gray-400 leading-8">
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </p>

            <div className="flex flex-wrap gap-8 mt-8 text-gray-700 dark:text-gray-300">
              <a href="#" className="hover:text-primary transition">
                Home
              </a>

              <a href="#services" className="hover:text-primary transition">
                Services
              </a>

              <a href="#our-work" className="hover:text-primary transition">
                Our Work
              </a>

              <a href="#contact-us" className="hover:text-primary transition">
                Contact Us
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Subscribe to our newsletter
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 mt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-5 py-4 outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="bg-primary text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-gray-700"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 dark:text-gray-400">
            Copyright © {new Date().getFullYear()} PosterRealm - All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">

            <a href="#" className="hover:scale-110 transition">
              <img
                src={assets.facebook_icon}
                alt="Facebook"
                className="w-7"
              />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img
                src={assets.twitter_icon}
                alt="Twitter"
                className="w-7"
              />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img
                src={assets.instagram_icon}
                alt="Instagram"
                className="w-7"
              />
            </a>

            <a href="#" className="hover:scale-110 transition">
              <img
                src={assets.linkedin_icon}
                alt="LinkedIn"
                className="w-7"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;