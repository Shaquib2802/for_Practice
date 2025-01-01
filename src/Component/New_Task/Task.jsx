import React from "react";

const Task = () => {
  return (
    <div className="w-[100%] bg-gray-50">
      <div className="flex justify-between mt-2 ">
        <div className="text-6xl font-semibold w-[20%] text-blue-900 ml-2">
          <img className="w-20 ml-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTRbUw2x8W2iWyuWgDIQNrjjvuGlFJggsbQ&s" alt="" />
        </div>
        <div className="flex   w-[80%] justify-evenly text-3xl pt-4 font-semibold">
          <div>Home</div>
          <div>About Us</div>
          <div>Contact</div>
          <div>Services</div>
        </div>
      </div>
      <div className="mt-3  m-5">
        <img
          className="w-[100%] h-[80vh] border rounded-lg"
          src="https://staritsolutions.starfing.com/img/starnetit/IT-services.jpg"
          alt=""
        />
      </div>
      <div className="text-center text-5xl font-bold">Our Services</div>
      <div className="grid grid-cols-3 gap-2 m-1 ">
        <div className="flex flex-col border rounded-lg p-2 bg-white ">
          <div className="flex justify-center">
            <img
              className="w-[80%] rounded-full"
              src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0WDqECSWiU6N41iBQc3KPQ.png"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">Web Development</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
        <div className="flex flex-col border rounded-lg p-2 bg-white ">
          <div className="flex justify-center">
            <img
              className="w-[80%] h-36 rounded-full"
              src="https://cdn.prod.website-files.com/65a790f0493b6806e60d6e21/660e8ac66813866c71248853_Choosing-a-Mobile-App-Framework.jpeg"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">App Development</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
        <div className="flex flex-col rounded-lg border p-2 bg-white">
          <div className="flex justify-center">
            <img
              className="w-[80%] h-36 rounded-full"
              src="https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli-850x412.jpg"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">Digital Marketing</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
        <div className="flex flex-col rounded-lg border p-2 bg-white">
          <div className="flex justify-center">
            <img
              className="w-[80%] h-36 rounded-full"
              src="https://kyrosdigital.in/wp-content/uploads/2023/06/26-6-2023-1024x579.png"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">SEO</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
        <div className="flex flex-col rounded-lg border p-2 bg-white">
          <div className="flex justify-center">
            <img
              className="w-[80%] h-36 rounded-full"
              src="https://cdn.vectorstock.com/i/1000x1000/70/58/smm-social-media-marketing-technology-concept-vector-34257058.webp"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">Social Media Marketing</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
        <div className="flex flex-col rounded-lg border p-2 bg-white ">
          <div className="flex justify-center">
            <img
              className="w-[80%] h-36 rounded-full"
              src="https://www.micropediaglobal.com/images/content-writing.png"
              alt=""
            />
          </div>
        <div className="text-3xl font-semibold text-center mt-2">Content Writing</div>
        <div className="text-center text-gray-500 mt-2">Sepano Technologies the best website development agency in India has elevated web portals, websites, and applications to a whole new standard, providing top-tier web solutions through cutting-edge technologies.</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
