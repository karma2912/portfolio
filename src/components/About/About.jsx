import React from "react";
import yd from "./teamYash.jpg";
import au from "./aboutUs.jpg";

const About = () => {
  return (
    <>
      <div className="text-white min-h-screen w-full ">
        <div className="md:h-[30rem] h-[10rem] w-full absolute z-30 top-0">
          <div className=" w-full ">
            <img src={yd} className="md:h-[30rem] h-[10rem] w-full"></img>
          </div>
        </div>
        <div className="h-full w-full pt-[30rem] flex flex-col gap-6 justify-center items-center">
          <div>
            <img src={au} className="w-full"></img>
          </div>
          <div className="w-11/12 text-md text-center">
           <div className="text-4xl"> Meet Yash Rajak, </div> Hello! I'm Yash Rajak, a 17-year-old passionate web
            developer dedicated to helping businesses establish their online
            presence. With a keen interest in technology and a commitment to
            delivering high-quality digital solutions, I specialize in creating
            custom websites and applications that drive growth and engagement.<br/>
            <div className="text-4xl"> What I Do</div> In today’s digital age, having a strong online presence is
            crucial for any business. I provide comprehensive web development
            services that help businesses transition smoothly into the online
            world. Whether you're starting from scratch or looking to enhance
            your existing site, I offer expertise in the latest web technologies
            to bring your vision to life.<br/><div className="text-4xl"> My Skills</div> I have a solid foundation in
            various web technologies, allowing me to create dynamic, responsive,
            and user-friendly websites. My skill set includes: HTML & CSS:
            Crafting well-structured, visually appealing webpages. JavaScript:
            Adding interactivity and enhancing user experience. ReactJS:
            Building modern, high-performance user interfaces. Tailwind CSS:
            Utilizing utility-first CSS frameworks for rapid design and
            customization. Node.js & Express.js: Developing robust server-side
            applications and APIs. MongoDB: Managing and storing data
            efficiently with NoSQL databases.<br/><div className="text-4xl"> Why Choose Me? </div> At a young age, I
            bring fresh ideas, a strong work ethic, and a deep passion for
            technology. My goal is to help businesses like yours not only go
            online but thrive in the digital landscape. I offer personalized
            attention to ensure that your website reflects your brand and meets
            your specific needs. Let’s work together to transform your digital
            presence. Whether you need a new website, a redesign, or advanced
            web solutions, I’m here to help! Feel free to contact me to discuss
            how we can bring your online vision to life.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
