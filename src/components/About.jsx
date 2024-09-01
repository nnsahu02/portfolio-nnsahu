import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
          Hello, I'm Nrusinghanath Sahu from Koraput, Odisha. Since April 2023, I have been working as a Software Developer, applying my passion for technology and coding to real-world projects.
        </p>

        <br />

        <p className="text-xl">
          My journey into the tech world began during the pandemic lockdown, when I developed a keen interest in technology and coding. This newfound passion led me to embark on a dedicated learning path, starting with a Bachelor's degree in Education from Acharya Nagarjuna University, completed in 2022, and a Botany Honours degree from Utkal University in 2020.
        </p>

        <br />

        <p className="text-xl">
          To formalize my transition into the tech industry, I joined FunctionUp's backend bootcamp in September 2022. There, I gained hands-on experience and in-depth knowledge of various technologies, including HTML, CSS, JavaScript, Node.js, MongoDB, React, Express, AWS S3, Redis, Git, and GitHub. This intensive training equipped me with the skills needed to excel in the fast-paced tech environment.
        </p>

        <br />

        <p className="text-xl">
          Now, as a Software Developer, I am eager to leverage my technical skills and educational background to contribute to innovative projects and take on new challenges in the tech industry. I am a quick learner, hardworking, and highly motivated to continuously improve and expand my expertise. My goal is to make a meaningful impact in the technology sector while advancing my career through constant learning and growth.
        </p>
      </div>
    </div>
  );
};

export default About;
