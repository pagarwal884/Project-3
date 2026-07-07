import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";

const MeetTeam = () => {
  return (
    <section
      id="team"
      className="px-4 pt-32 text-gray-800 dark:text-white sm:px-12 lg:px-24 xl:px-40"
    >
      <div className="flex flex-col items-center gap-7">
        <Title
          title="Meet Our Team"
          desc="Meet the creative minds and skilled professionals behind our innovative digital solutions."
        />

        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/5 max-sm:flex-col"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-14 w-14 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="text-center sm:text-left">
                <h3 className="text-sm font-bold">{member.name}</h3>
                <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;