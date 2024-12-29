import React, { useState } from "react";

const Myfile = () => {
  const [selectedPic, setSelectedPic] = useState("base");

  const images = {
    boys: "https://i.pinimg.com/736x/09/43/1d/09431d5d09e2f0af5aff9827d584f252.jpg",
    girls:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/14334755-dbc4-456e-aec8-043257e724ed/bdbe3802-c024-40be-bf75-fd800547d677.png",
    other:
      "https://nurserylive.com/cdn/shop/products/nurserylive-plants-rose-pink-plant_600x600.png?v=1670223566",
    base: "https://t4.ftcdn.net/jpg/03/35/64/35/360_F_335643536_8ZiY9xH2KU4FIaZToBTpL7BVQLynA3w9.jpg",
  };

  return (
    <div className=" bg-purple-50 w-screen h-screen ">
      <div className="text-center mt-5 font-bold text-5xl ">
        Select Categories
      </div>

      <div className="flex justify-evenly mt-10 text-5xl font-bold">
        <button
          onClick={() => setSelectedPic("boys")}
          class="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
        >
          Boys
        </button>
        <button
          onClick={() => setSelectedPic("girls")}
          class="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
        >
          Girls
        </button>
        <button
          onClick={() => setSelectedPic("other")}
          class="cursor-pointer bg-violet-500 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-violet-700 hover:ring-2 hover:ring-violet-800 hover:shadow-xl hover:shadow-violet-500 focus:ring-violet-300 focus:shadow-violet-400 px-5 py-2"
        >
          Others
        </button>
      </div>

      <div className=" flex items-center justify-center  mt-20 mx-auto">
        <img
          src={images[selectedPic]}
          className="w-56 h-56 rounded-xl border-4 border-black"
        />
      </div>
    </div>
  );
};

export default Myfile;
