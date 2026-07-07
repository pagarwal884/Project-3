import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const workData = [
  {
    title: "Mobile App Marketing",
    description:
      "We turn bold ideas into powerful digital solutions that connect, engage, and inspire users.",
    image: assets.work_mobile_app,
  },
  {
    title: "E-Commerce Website",
    description:
      "A modern online shopping platform with seamless user experience, secure payments, and responsive design.",
    image: assets.work_dashboard_management,
  },
  {
    title: "Fitness App Promotion",
    description:
      "Helping fitness brands grow through engaging campaigns, creative visuals, and targeted digital marketing.",
    image: assets.work_fitness_app,
  },
];

const OurWork = () => {
  return (
    <section
      id="our-work"
      className="px-4 pt-32 text-gray-700 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <div className="flex flex-col items-center gap-7">
        <Title
          title="Our Latest Work"
          desc="We craft innovative digital solutions that combine creativity, quality, and technology to help businesses grow."
        />

        <div className="grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workData.map((work, index) => (
            <div
              key={index}
              className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                {work.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;