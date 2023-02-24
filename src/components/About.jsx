import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
        Hello! My name is Nrusinghamath Sahu, and I come from Koraput, Odisha. 
        I have recently completed my Bachelor's degree in Education from Acharya 
        Nagarjuna University in 2022. Prior to that, I graduated with Botany Honours 
        from Utkal University in 2020. I received my Higher Secondary education from 
        Sai College of Science, Jeypore, Odisha, and my schooling was completed at SAIEC, 
        Rayagada.
        </p>

        <br />

        <p className="text-xl">
        During the pandemic lockdown, I developed a keen interest in technology and coding, 
        which led me to start learning to code. I am passionate about this field and have 
        taken the next step towards pursuing a career in it by joining the backend bootcamp 
        organization, FunctionUp, in September 2022. At FunctionUp, I have gained in-depth 
        knowledge of various technologies, such as HTML, CSS, JavaScript, NodeJS, MongoDB, 
        React, Express, AWS-S3, Redis, Git, GitHub, and many more.
        </p>

        <br />

        <p className="text-xl">
        I am thrilled to have acquired these skills and am excited to take on new challenges 
        in the tech industry. I am a quick learner, hardworking, and highly motivated individual 
        who is always eager to learn and grow. With my educational background and technical skills, 
        I am confident that I can make a meaningful contribution to the industry. I am constantly 
        striving to improve and enhance my skills and knowledge, and I am looking forward to new 
        opportunities to further develop my career in the technology sector.
        </p>
      </div>
    </div>
  );
};

export default About;
