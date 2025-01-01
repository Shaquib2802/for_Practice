import React from "react";

const Template = () => {
  return (
    <div className="   overflow-hidden ">
      <div className="p-3 mx-auto w-[60%] bg-purple-800 ">
      <div className="">
          <img className=" mx-auto w-[70%]" src="https://sepano.in/img/hero.png" alt="" />
        </div>
        <div className="">
          <div>
            <img
              className="w-16 md:w-32 absolute top-3 rounded-full p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTRbUw2x8W2iWyuWgDIQNrjjvuGlFJggsbQ&s"
              alt=""
            />
          </div>
          <div className=" text-lg md:text-3xl font-thin mt-3  text-gray-50">
            Key Services in Our Proposal:
          </div>

          <div className=" mt-4 text-md md:text-2xl font-thin  text-white">
            1. Search Engine Optimization (SEO):
          </div>
          <div className=" mt-4 text-md text-md md:text-xl font-thin  text-white">
            <li>Enhance website visibility and ranking on search engines.</li>
            <li>Perform keyword research and on-page/off-page optimization.</li>
          </div>
          <div className=" mt-4  text-md md:text-2xl font-thin  text-white">
            2. Social Media Marketing:
          </div>
          <div className=" mt-4 text-md md:text-xl font-thin  text-white">
            <li>
              Develop and manage content across platforms like Facebook,
              Instagram, LinkedIn, and Twitter.
            </li>
            <li>
              Engage your audience with targeted campaigns and analytics
              tracking.
            </li>
          </div>
          <div className=" mt-4  text-md md:text-2xl font-thin  text-white">
            3. Content Marketing:
          </div>
          <div className=" mt-4 text-md md:text-xl font-thin  text-white">
            <li>Create compelling blogs, videos, and infographics.</li>
            <li>Build authority and trust with value-driven content.</li>
          </div>
        </div>
        <div ></div>
        <div className="font-thin mt-8 pt-4 border-t-2 text-white">ADDRESS --</div> 
        <div className="text-white text-sm md:text-md">2/666 Vikas Nagar Sec-2  <br />Lucknow-226022</div>
        <div className="text-white text-sm md:text-md">+91 8881033200</div>
        <div className="text-white text-sm md:text-md">hr@sepano.in</div>
      </div>
    
    </div>
  );
};

export default Template;
