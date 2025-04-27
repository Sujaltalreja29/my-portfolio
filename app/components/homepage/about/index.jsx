// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  const interestAreas = [
    "Web Development",
    "AI Integration",
    "UI/UX Design",
    "Cloud Computing",
    "System Architecture",
    "Data Visualization",
    "API Development",
    "DevOps",
    "Machine Learning"
  ];

  return (
    <div id="about" className="my-12 lg:my-20 relative">
      {/* Section Label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 z-10">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        {/* Left Column - About Text */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg mb-6 whitespace-pre-wrap">
  {personalData.description}
</p>
          
          {/* Expertise Tags */}
          <div className="mt-8">
            <h3 className="font-medium mb-4 text-[#16f2b3] text-lg">My Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "FastAPI", "AI Integration", "React", "Node.js"].map((skill) => (
                <span 
                  key={skill}
                  className="bg-[#1a1443]/30 border border-[#1a1443] px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-[#1a1443]/80 hover:border-[#16f2b3] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#1a1443]/20 rounded-lg blur-sm z-0"></div>
            <Image
              src={personalData.profile}
              width={320}
              height={320}
              alt="Profile"
              className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-105 cursor-pointer relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Areas of Interest Section */}
      <div className="mt-8 bg-[#0c0c14]/60 p-6 lg:p-8 rounded-lg border border-[#1a1443]/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 bg-[#1a1443]/40 flex items-center justify-center rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#16f2b3]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
          </div>
          <h2 className="text-[#16f2b3] text-xl font-medium">Areas of Interest</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {interestAreas.map((interest, index) => (
            <div 
              key={interest} 
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1a1443] to-[#16f2b3]/50 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-[#0c0c14] px-4 py-3 rounded-md text-center text-gray-200 text-sm border border-[#1a1443]/40 group-hover:border-[#16f2b3]/30 transition-all duration-300 group-hover:-translate-y-1">
                {interest}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;