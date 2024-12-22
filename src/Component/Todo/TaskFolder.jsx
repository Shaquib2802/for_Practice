import React, { useState } from "react";
import ModeIcon from "@mui/icons-material/Mode";

const TaskFolder = () => {
  const [data1, setData] = useState({
    _id: "",
    created_at: "",
    title: "",
    description: ""
    
  });
  const handleChange = (e) => {
    const { name, values } = e.target;

    console.log(e.target.value);

    setData(() => ({
      ...data1,
      [name]: values,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    NewLogin(data1);

    console.log("data", data1);
  };
  return (
    <div>
      <form className="border mt-5 w-[80%] mx-auto">
        <div className="border-4 p-2 rounded-md flex m-5 justify-around">
          <input
            type="text"
            className="w-[80%] outline-none placeholder:border-3 font-semibold"
            placeholder=" Enter the id:"
          />

          <div className="text-gray-500  ">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-2 rounded-md flex m-5 justify-around">
          <input
            type="text"
            className="w-[80%] outline-none placeholder:border-3 font-semibold"
            placeholder=" Enter the Task:"
          />
          <div className="text-gray-500  ">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-2 rounded-md flex m-5 justify-around">
          <input
            type="text"
            className="w-[80%] outline-none placeholder:border-3 font-semibold"
            placeholder=" Enter the Task:"
          />

          <div className="text-gray-500  ">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-2 rounded-md flex m-5 justify-around">
          <input
            type="text"
            className="w-[80%] outline-none placeholder:border-3 font-semibold"
            placeholder=" Enter the Task:"
          />

          <div className="text-gray-500  ">
            <ModeIcon />
          </div>
        </div>
        <div className="border-4 p-2 rounded-md flex m-5 justify-around">
          <input
            type="text"
            className="w-[80%] outline-none placeholder:border-3 font-semibold"
            placeholder=" Enter the Task:"
          />

          <div className="text-gray-500  ">
            <ModeIcon />
          </div>
        </div>
        <button className="flex p-2 m-auto">Submit</button>
      </form>
    </div>
  );
};

export default TaskFolder;
