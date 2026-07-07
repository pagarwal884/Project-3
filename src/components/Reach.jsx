import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const Reach = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    // Replace with your actual Web3Forms Access Key
    formData.append("access_key", "49e87dee-cfac-460e-a7ea-dc90d78736dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Thankyou for your submission')
      event.target.reset()
    } else {
      toast.error("Failed to submit form")
    }
  };

  return (
    <section
      id="contact-us"
      className="px-4 pt-32 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <div className="flex flex-col items-center gap-7">
        <Title
          title="Reach Out to Us"
          desc="Ready to grow your brand? Let's connect and build something exceptional together."
        />

        <form
          onSubmit={onSubmit}
          className="grid w-full max-w-2xl gap-5 sm:grid-cols-2"
        >
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Your Name
            </label>

            <div className="flex items-center rounded-lg border border-gray-300 pl-3 transition-colors focus-within:border-primary dark:border-gray-600">
              <img
                src={assets.person_icon}
                alt="Person Icon"
                className="h-5 w-5"
              />

              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent p-3 text-sm outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center rounded-lg border border-gray-300 pl-3 transition-colors focus-within:border-primary dark:border-gray-600">
              <img
                src={assets.email_icon}
                alt="Email Icon"
                className="h-5 w-5"
              />

              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent p-3 text-sm outline-none"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium">
              Message
            </label>

            <textarea
              name="message"
              rows={8}
              placeholder="Enter your message"
              className="w-full rounded-lg border border-gray-300 bg-transparent p-3 text-sm outline-none transition-colors focus:border-primary dark:border-gray-600"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex flex-col items-start gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-full bg-primary px-10 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Submit
              <img
                src={assets.arrow_icon}
                alt="Arrow Icon"
                className="w-4"
              />
            </button>

          </div>
        </form>
      </div>
    </section>
  );
};

export default Reach;