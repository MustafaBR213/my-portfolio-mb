"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Meteor</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Laravel</li>
        <li>ASP.Net</li>
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>FreeCodeCamp</li>
        <li>International University of Science and Renaissance</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>FreeCodeCamp </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutsetup.png" width={600} height={600} alt="s"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Hello! I am Mustafa Brooky, a proactive and detail-oriented software engineer with experience in Python, PHP, Flutter, ASP.net core, and Laravel. My expertise lies in building web-based systems and applications, such as a prison system built with Python, a school system developed using PHP, and websites built in ASP.net core. Additionally, I have experience building mobile applications, including a chat app developed with Flutter and Laravel API integration.
          In addition to my technical skills, I also have experience in image processing using OpenCV in Python. This knowledge has been valuable in developing and enhancing various applications that require image recognition and manipulation. I am always eager to explore new technologies and techniques to improve my work and am confident in my ability to bring value to any project I work on.
          I am passionate about programming and enjoy collaborating with other developers. In fact, I founded a team called Developers For Syria with a friend. Our team regularly discusses programming and design, sharing knowledge and skills with each other to improve our work.
          If you are looking for a reliable and skilled software engineer who is committed to delivering high-quality work on time, please do not hesitate to contact me. I am always seeking new challenges and opportunities to grow and learn.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
