import React from 'react';

const AboutMe = () => {
  return (
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        About Me
      </h2>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
        Hi, I'm Yosf, a passionate web developer with a deep interest in frontend technologies, animation, and blockchain. I am currently pursuing a degree in Computer Science and constantly working on honing my skills in the MERN stack, React JS, and Tailwind CSS, with plans to explore blockchain development.
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
        I have experience in building modern web applications that deliver clean user interfaces and seamless user experiences. My goal is to keep growing as a developer and eventually dive deeper into blockchain technology.
      </p>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-8">
        Technologies like React, Tailwind CSS, Redux, and Framer Motion have shaped my development journey, helping me bring creative ideas to life with intuitive animations and interactions.
      </p>

      <div className="mt-8">
        <a
          href="https://www.linkedin.com/in/muhammed-yousaf-b357172b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl md:text-2xl text-blue-600 underline"
        >
          Connect with me on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
